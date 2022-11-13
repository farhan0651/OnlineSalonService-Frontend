//import App from "./App";
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import OrderCard from "./components/OrderCard/OrderCard";
import AddCard from "./components/Payment/AddCard";
import AddCustomer from "./components/Myprofile/AddCustomer";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import Login from "./components/Login";

describe("Delete Button Test", () => {
  it("Delete Button Order Card", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <OrderCard />
      </BrowserRouter>
    );
    const details = getByTestId("button");
    expect(details).toBeTruthy();
  });
});
describe("Link Testing", () => {
  it("Link For Book Again", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <OrderCard />
      </BrowserRouter>
    );
    const details = getByTestId("links");
    expect(details).toBeTruthy();
  });
});
describe("Delete Button Test", () => {
  it("Delete Button Add Card", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <AddCard />
      </BrowserRouter>
    );
    const details = getByTestId("button2");
    expect(details).toBeTruthy();
  });
});

describe("Submit Button Test", () => {
  it("Submit Button Customer Card", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <AddCustomer />
      </BrowserRouter>
    );
    const details = getByTestId("button5");
    expect(details).toBeTruthy();
  });
});

describe("Submit Button Test", () => {
  it("Submit Button Customer Card", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ServiceCard />
      </BrowserRouter>
    );
    const details = getByTestId("button3");
    expect(details).toBeTruthy();
  });
});
describe("Submit Button Test", () => {
  it("Submit Button Customer Card", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const details = getByTestId("loginbutton");
    expect(details).toBeTruthy();
  });
});

/*
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/