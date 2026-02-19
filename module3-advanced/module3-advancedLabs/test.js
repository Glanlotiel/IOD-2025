import fetch from "node-fetch";
globalThis.fetch = fetch;
function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));


  async function asyncFetchURLData(url) {
    let fetchResponse = await fetch(url);
    if (response.status === 200) {
      let responseJson = await fetchResponse.json()
      return responseJson
    } else {
      throw new Error(`Request failed with status ${fetchResponse.status}`);
    }
  }

  async function asyncFetchMultipleURLData(urls) {
    return Promise.all(urls.map(async (url) => {
      let response = await fetch(url);
      return response.json()
    }))
  }


  try {
    let responseData1 = await
      asyncFetchURLData("https://jsonplaceholder.typicode.com/todos/1")
      console.log(responseData1)

    let responseData2 = await
    asyncFetchMultipleURLData([
      "https://jsonplaceholder.typicode.com/todos/1",
      "https://jsonplaceholder.typicode.com/todos/2",
      "https://jsonplaceholder.typicode.com/todos/3"])
      console.log(responseData2)
    let responseData3 = await
    asyncFetchURLData("https://jsonplaceholder.typicode.com/fake");
    console.log(responseData3)
  } catch (error) {
    console.log(error.message)
  }