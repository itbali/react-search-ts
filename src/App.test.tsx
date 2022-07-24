import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {HashRouter} from "react-router-dom";
import {store} from "./bll/store";
import {Provider} from "react-redux";

test('renders whole app', () => {

  render
  (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );

  const linkElement = screen.getByText(/search api/);
  expect(linkElement).toBeInTheDocument();
});
