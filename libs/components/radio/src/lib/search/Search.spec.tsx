import React from "react";
import { render, cleanup } from "react-testing-library";

import Search from "./Search";

describe(" Search", () => {
  afterEach(cleanup);

  it("should render successfully", () => {
    const { baseElement } = render(<Search />);
    expect(baseElement).toBeTruthy();
  });
});
