import React from 'react';
import { render } from '@testing-library/react';
import TableComponent from './TableComponent';

test('renders learn react link', () => {
  const { getByText } = render(<TableComponent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
