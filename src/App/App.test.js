import App from "./App";
import React from "react";
import { render } from "@testing-library/react";


describe("the root App component", () => {

    it("renders on the page", () => {
        const { getByTestId } = render(<App/>);
        const app = getByTestId("app");

        expect(app).toBeTruthy();
    });

    it("displays the title", () => {
      const { getByRole } = render(<App/>);
      const title = getByRole("heading");

      expect(title).toBeTruthy();
    });

    it("displays the title correctly", () => {
      const { getByRole } = render(<App/>);
      const title = getByRole("heading");

      expect(title).toHaveTextContent("Goblin Market");
    });
    
    it("displays the categories menu", () => {
      const { getByTestId } = render(<App/>);
      const ctgButton = getByTestId("ctg-btn");

      expect(ctgButton).toBeTruthy();
    });

    it("displays the user icon", () => {
      const { getByTestId } = render(<App/>);
      const userButton = getByTestId("user-btn");

      expect(userButton).toBeTruthy();
    });

    it("displays the cart menu", () => {
      const { getByTestId } = render(<App/>);
      const cartButton = getByTestId("cart-btn");

      expect(cartButton).toBeTruthy();
    });
});