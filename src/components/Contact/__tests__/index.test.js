import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact Form Component', () => {
  test('module renders', () => {
    render(<ContactForm></ContactForm>);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<ContactForm></ContactForm>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('title is "contact me"', () => {
    const { getByTestId } = render(<ContactForm></ContactForm>);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
  });

  test('submit button text', () => {
    const { getByTestId } = render(<ContactForm></ContactForm>);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('button')).toHaveTextContent('Submit');
  });
});
