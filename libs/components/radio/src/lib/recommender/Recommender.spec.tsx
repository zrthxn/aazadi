import React from "react";
import { render, cleanup } from "react-testing-library";

import Recommender from "./Recommender";

describe(" Recommender", () => {
  afterEach(cleanup);

  it("should render successfully", () => {
    const { baseElement } = render(<Recommender />);
    expect(baseElement).toBeTruthy();
  });
});
