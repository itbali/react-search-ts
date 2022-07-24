import {Header} from "./Header";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../bll/store";

test('testing header functionality', () => {
  const {container} = render(
    <Provider store={store}>
      <Header/>
    </Provider>
  )

  expect(container).toBeTruthy()
  expect(container.getElementsByTagName('button')[0]).toHaveTextContent('🔍')
})
test('input text is typed correctly', () => {

  render(
    <Provider store={store}>
      <Header/>
    </Provider>
  )
  const input = screen.getByPlaceholderText('Enter title')
  fireEvent.click(input)
  expect(input).toHaveValue('')
  fireEvent.change(input, {target: {value: 'lager'}})
  expect(input).toHaveValue('lager')
})
