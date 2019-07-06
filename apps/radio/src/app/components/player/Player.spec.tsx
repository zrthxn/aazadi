import React from "react";
import { render, cleanup } from "react-testing-library";

import Player from "./Player";

describe(" Player", () => {
  afterEach(cleanup);

  it("should render successfully", () => {
    const { baseElement } = render(<Player />);
    expect(baseElement).toBeTruthy();
  });
});
