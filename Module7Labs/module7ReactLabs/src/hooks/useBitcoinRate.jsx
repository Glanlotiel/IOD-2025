import { useEffect, useReducer } from "react";

// State shape: { rate: number | null, status: 'idle' | 'loading' | 'success' | 'error' }
const initialState = { rate: null, status: "idle" };

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, status: "loading", rate: null };
    case "FETCH_SUCCESS":
      return { status: "success", rate: action.payload };
    case "FETCH_ERROR":
      return { ...state, status: "error", rate: null };
    default:
      return state;
  }
}

export function useBitcoinRate(currency) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let ignore = false;

    dispatch({ type: "FETCH_START" });

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (!ignore)
          dispatch({
            type: "FETCH_SUCCESS",
            payload: data.bitcoin[currency.toLowerCase()],
          });
      })
      .catch(() => {
        if (!ignore) dispatch({ type: "FETCH_ERROR" });
      });

    return () => {
      ignore = true;
    };
  }, [currency]);

  return state; // { rate, status }
}
