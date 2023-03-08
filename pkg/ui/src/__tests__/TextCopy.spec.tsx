import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TextCopy from "../components/TextCopy";

test("TextCopy", () => {
  render(<TextCopy value={"text to be copied"} />);
  expect(screen.getByRole("button")).toBeDefined();
});
