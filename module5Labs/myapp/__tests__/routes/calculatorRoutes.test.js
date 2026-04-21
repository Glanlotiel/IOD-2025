const request = require("supertest");
const app = require("../../app");
const Calculator = require("../libraries/Calculator");
const calc = new Calculator();

let number1 = Math.floor(parseFloat(Math.random() * 1_000_000));
let number2 = Math.floor(parseFloat(Math.random() * 1_000_000));

describe("add route", () => {
  test("adds two numbers", async () => {
    const response = await request(app)
      .post("/add")
      .send({ num1: number1, num2: number2 });
    expect(response.status).toBe(200);
    expect(response.body).toBe(number1 + number2);
  });
});

describe("sub route", () => {
  test("subtracts two numbers", async () => {
    const response = await request(app)
      .post("/sub")
      .send({ num1: number1, num2: number2 });
    expect(response.status).toBe(200);
    expect(response.body).toBe(number1 - number2);
  });
});

describe("mult route", () => {
  test("multiplies two numbers", async () => {
    const response = await request(app)
      .post("/mult")
      .send({ num1: number1, num2: number2 });
    expect(response.status).toBe(200);
    expect(response.body).toBe(calc.mult(number1, number2));
  });
});

describe("div route", () => {
  test("divides two numbers", async () => {
    const response = await request(app)
      .post("/div")
      .send({ num1: number1, num2: number2 });
    expect(response.status).toBe(200);
    expect(response.body).toBe(calc.div(number1, number2));
  });
});
