import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SignInOtherOptionButtonContainer from "./SignInOtherOptionButtonContainer";


// mock the useBreakpointValue hook.
vi.mock('@chakra-ui/react', async () => {
  const mod = await vi.importActual('@chakra-ui/react');
  return {
    ...mod,
    useBreakpointValue: vi.fn().mockImplementation(() => false)
  };
});

describe('SignInOtherOptionButtonContainer', () => {
  it('should render the component', () => {
    render(<SignInOtherOptionButtonContainer />);

    expect(screen.getByTestId('signin-other-option-btn-container'))
      .toBeInTheDocument();
  });

  it('component outer div should have the required styles', () => {
    render(<SignInOtherOptionButtonContainer />);

    expect(screen.getByTestId('signin-other-option-btn-container'))
      .toHaveStyle('display: flex');
    expect(screen.getByTestId('signin-other-option-btn-container'))
      .toHaveStyle('flex-direction: row');
    expect(screen.getByTestId('signin-other-option-btn-container'))
      .toHaveStyle('justify-content: center');
    expect(screen.getByTestId('signin-other-option-btn-container'))
      .toHaveStyle('gap: 2rem');
    expect(screen.getByTestId('signin-other-option-btn-container'))
      .toHaveStyle('margin-block-start: 1rem');
  });

  it('component should have 2 buttons', () => {
    render(<SignInOtherOptionButtonContainer />);

    const component =
      screen.getByTestId('signin-other-option-btn-container');
    const buttons = component.querySelectorAll('button');

    expect(buttons.length).toBe(2);
  });

  it('buttons should have the required styles', () => {
    render(<SignInOtherOptionButtonContainer />);

    const component =
      screen.getByTestId('signin-other-option-btn-container');
    const buttons = component.querySelectorAll('button');

    buttons.forEach(btn => {
      expect(btn).toHaveStyle('padding: 2rem');
    });
  });

  it('component should have custom google icon inside button',
    () => {
      render(<SignInOtherOptionButtonContainer />);

      expect(screen.getByTestId('custom-google-icon'))
        .toBeInTheDocument();
    });

  it('component should have custom twitter icon inside button',
    () => {
      render(<SignInOtherOptionButtonContainer />);

      expect(screen.getByTestId('custom-twitter-icon'))
        .toBeInTheDocument();
    });

});