import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {BeersPage} from "./BeersPage";
import {store} from "../../bll/store";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

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
test('request is loaded', async () => {

  render(
    <HashRouter>
      <Provider store={store}>
        <BeersPage/>
      </Provider>
    </HashRouter>
  )
  const searchButton = screen.getByText('🔍')

  expect(screen.getAllByText(/To search type some text/i)[0]).toBeInTheDocument()
  fireEvent.click(searchButton)

  expect(await screen.findByText(/A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once/i)).toBeInTheDocument()
  expect(screen.queryByText(/To search type some text/i)).not.toBeInTheDocument()
})
