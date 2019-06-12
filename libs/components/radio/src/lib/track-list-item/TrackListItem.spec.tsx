import React from "react";
import { render, cleanup } from "react-testing-library";

import TrackListItem from "./TrackListItem";

describe(" TrackListItem", () => {
  afterEach(cleanup);

  it("should render successfully", () => {
    const { baseElement } = render(<TrackListItem />);
    expect(baseElement).toBeTruthy();
  });
});
