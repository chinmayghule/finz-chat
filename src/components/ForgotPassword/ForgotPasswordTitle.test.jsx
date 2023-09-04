import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ForgotPasswordTitle from "./ForgotPasswordTitle";

describe('ForgotPasswordTitle', () => {
  it('should render the title', () => {
    render(<ForgotPasswordTitle />);
    
    expect(
      screen.getByText('Recover Password')
    ).toBeInTheDocument();
  });
});