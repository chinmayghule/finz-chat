import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SignInOtherOptions from "./SignInOtherOptions";
import SignInOtherOptionButtonContainer from "./SignInOtherOptionButtonContainer";


// mock the useBreakpointValue hook.
vi.mock('@chakra-ui/react', async () => {
  const mod = await vi.importActual('@chakra-ui/react');
  return {
    ...mod,
    useBreakpointValue: vi.fn().mockImplementation(() => 'sm')
  };
});

describe('SignInOtherOptions', () => {
  it('should render `SignInOtherOptions` component', () => {
    render(<SignInOtherOptions />);

    expect(
      screen.getByTestId('signin-other-options')
    ).toBeInTheDocument();
  });

  it('outer div should have the required styles', () => {
    render(<SignInOtherOptions />);

    expect(screen.getByTestId('signin-other-options'))
      .toHaveStyle({ marginBlockStart: '2rem' });
  })
  
  it('should render `SignInDivider` component inside', () => {
    render(<SignInOtherOptions />);

    expect(
      screen.getByTestId('signin-divider')
    ).toBeInTheDocument();
  });

  it('should render `SignInOtherOptionButtonContainer` component inside',
    () => {
      render(<SignInOtherOptionButtonContainer />);

      expect(
        screen.getByTestId('signin-other-option-btn-container')
      ).toBeInTheDocument();
    });
});