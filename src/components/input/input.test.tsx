import Input from ".";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("only allows numbers", async () => {
  let value = "";
  render(
    <>
      <Input
        id="input"
        label="input"
        value={value}
        onChange={(e) => (value = e)}
      />
    </>
  );
  await userEvent.type(screen.getByPlaceholderText('input'), 'foo');
  expect(value).toEqual('');
  await userEvent.type(screen.getByPlaceholderText('input'), '1');
  expect(value).toEqual('1');
});
