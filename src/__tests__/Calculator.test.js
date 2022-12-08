import React from 'react';
import renderer from 'react-test-renderer';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const calculator = renderer
    .create(<Calculator />)
    .toJSON();
  expect(calculator).toMatchSnapshot();
});

test('user interaction with calc', async () => {
  render(<Calculator url="/calculator" />);
  fireEvent.click(screen.getByText('8'));
  fireEvent.click(screen.getByText('7'));
  expect(screen.getByText('87')).toBeInTheDocument();
});
