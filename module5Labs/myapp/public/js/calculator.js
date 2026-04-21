// Recieve Data
const urlMap = {
  "+": "http://localhost:3001/add",
  "-": "http://localhost:3001/sub",
  "*": "http://localhost:3001/mult",
  "/": "http://localhost:3001/div",
};

document
  .getElementById("calculatorT")
  .addEventListener("click", async function (e) {
    // If Clear : clear
    if (e.target.id === "clearResult") {
      document.getElementById("calculatorResult").innerHTML = "0";
    }
    //If = : calculate
    else if (e.target.id === "=") {
      let number = document
        .getElementById("calculatorResult")
        .textContent.match(/[\d.]+|[+\-*/]/g);
      console.log(number);
      let result = await fetch(urlMap[number[1]], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ num1: number[0], num2: number[2] }),
      });
      const data = await result.json();
      document.getElementById("calculatorResult").textContent = `${data}`;
    }
    // Code to update display otherwise
    else {
      if (document.getElementById("calculatorResult").textContent == "0") {
        document.getElementById("calculatorResult").textContent =
          e.target.textContent;
      } else {
        document.getElementById("calculatorResult").textContent +=
          e.target.textContent;
      }
    }
  });
