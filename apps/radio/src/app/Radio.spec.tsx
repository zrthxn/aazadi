import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Radio from './Radio';

describe('Radio', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Radio />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<Radio />);
    expect(getByText('Welcome to radio!')).toBeTruthy();
  });
});
