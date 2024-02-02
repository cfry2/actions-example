import App from "./App";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Theme } from "@radix-ui/themes";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup()
const store = configureStore([])({sum: {value: 0}});

test("handles actions", async () => {
   render(
    <Provider store={store}>
      <Theme>
        <App />
      </Theme>
    </Provider>
  );

  await user.type(screen.getByPlaceholderText('one'), "1")
  await user.type(screen.getByPlaceholderText('two'), "1")
  await user.click(screen.getByText('Go!'))
  expect(store.getActions()[0].type).toEqual('todos/sum')
});
