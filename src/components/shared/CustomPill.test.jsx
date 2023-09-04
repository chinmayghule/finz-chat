import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CustomPill from "./CustomPill";

describe('CustomPill', () => {
  it('should render `Custom Pill` component', () => {
    render(<CustomPill />);

    expect(screen.getByTestId('custom-pill')).toBeInTheDocument();
  });

  it('`Custom Pill` component should have text `testing...`', () => {
    render(<CustomPill pillText='testing...' />);

    expect(
      screen.getByTestId('custom-pill')
    ).toHaveTextContent('testing...');
  });

  it('`Custom Pill` component should have bg=lightgreen when selected',
    () => {
      render(<CustomPill isPillSelected={true} />);

      expect(
        screen.getByTestId('custom-pill')
      ).toHaveStyle('background-color: rgb(144, 238, 144)');
    });

  it('`Custom Pill` component should have bg=rgba(226, 232, 240, 1) when not selected',
    () => {
      render(<CustomPill />);

      expect(
        screen.getByTestId('custom-pill')
      ).toHaveStyle('background-color: rgba(226, 232, 240, 1)');
    });

  it('`Custom Pill` component should have color=`rgb(255, 255, 255) when not selected`', () => {
    render(<CustomPill />);

    expect(
      screen.getByTestId('custom-pill')
    ).toHaveStyle('color: rgb(255, 255, 255)');
  });

  it('`Custom Pill` component should have color=`rgb(0, 0, 0) when selected`',
    () => {
      render(<CustomPill isPillSelected={true} />);

      expect(
        screen.getByTestId('custom-pill')
      ).toHaveStyle('color: rgb(0, 0, 0)');
    });
});