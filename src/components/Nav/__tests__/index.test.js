import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  // baseline test
  test('renders', () => {
    render(<Nav></Nav>);
  });

  // snapshot test
  test('matches snapshot', () => {
    const { asFragment } = render(<Nav></Nav>);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visible', () => {
  test('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav></Nav>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

describe('links are visible', () => {
  test('inserts text into the links', () => {
    const { getByTestId } = render(<Nav></Nav>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
});
