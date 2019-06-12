import React from "react";
import { render, cleanup } from "react-testing-library";

import Header from "./Header";

describe(" Header", () => {
  afterEach(cleanup);

  it("should render successfully", () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });
});
