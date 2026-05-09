import { createContext, useContext, useState } from "react";

const moodContext = createContext(null);

export function MoodProvider({ children }) {
  const [index, setIndex] = useState(0);
  return (
    <moodContext.Provider value={{ index, setIndex }}>
      {children}
    </moodContext.Provider>
  );
}

// Custom hook so consumers don't import the context directly
export function useMood() {
  return useContext(moodContext);
}
