import React from "react";
import { render, cleanup } from "react-testing-library";

import Loading from "./Loading";

describe(" Loading", () => {
  afterEach(cleanup);

  it("should render successfully", () => {
    const { baseElement } = render(<Loading />);
    expect(baseElement).toBeTruthy();
  });
});