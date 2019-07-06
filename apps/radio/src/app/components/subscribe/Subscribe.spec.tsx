import React from "react";
import { render, cleanup } from "react-testing-library";

import Subscribe from "./Subscribe";

describe(" Subscribe", () => {
  afterEach(cleanup);

  it("should render successfully", () => {
    const { baseElement } = render(<Subscribe />);
    expect(baseElement).toBeTruthy();
  });
});
