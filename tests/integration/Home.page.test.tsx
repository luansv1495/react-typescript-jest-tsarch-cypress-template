import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../../src/pages/Home/Home.page";

describe("HomePage", () => {
  it("should render correct message", () => {
    render(<HomePage />);

    expect(screen.getByText("HomePage")).toBeVisible();
  });
});
