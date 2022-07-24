import React from 'react';
import {render, screen} from '@testing-library/react';
import {BeersPage} from "./BeersPage";
import {store} from "../../bll/store";
import {Provider} from "react-redux";

test('renders header,body and footer', () => {

  render(
    <Provider store={store}>
      <BeersPage/>
    </Provider>
  );

  const header = screen.getByText(/Beers search api/);
  const input = screen.getByPlaceholderText('Enter title')
  const body = screen.getByText(/type some text/);
  const footer = screen.getByText(/All rights reserved/);

  expect(header).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(body).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
