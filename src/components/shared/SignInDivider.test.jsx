import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SignInDivider from "./SignInDivider";

describe('SignInDivider', () => {
  it('should render the outer div', () => {
    render(<SignInDivider />);

    const outerDiv =
      screen.getByTestId('signin-divider');

    expect(outerDiv).toBeInTheDocument();
  });

  it('outer div should have the required styles', () => {
    render(<SignInDivider />);

    const outerDiv =
      screen.getByTestId('signin-divider');
    const outerDivStyles = {
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0rem'
    };

    expect(outerDiv).toHaveStyle(outerDivStyles);
  });

  it('should have 2 dividers', () => {
    render(<SignInDivider />);

    const outerDiv =
      screen.getByTestId('signin-divider');
    const noOfDividers = outerDiv.querySelectorAll('hr').length;

    expect(noOfDividers).toBe(2);
  });

  it('dividers should have required styles', () => {
    render(<SignInDivider />);
    
    const outerDiv =
      screen.getByTestId('signin-divider');
    const dividers = outerDiv.querySelectorAll('hr');
    const dividerStyle = {
      width: '100%',
      border: '1px solid black',
      flex: '1'
    };

    dividers.forEach(divider => {
      expect(divider).toHaveStyle(dividerStyle);
    });
  })


  it('should render the text `or continue with`', () => {
    render(<SignInDivider />);
    
    const outerDiv =
      screen.getByTestId('signin-divider');

      expect(outerDiv).toHaveTextContent(/or continue with/i);
  })

  it('text between dividers should have required styles', () => {
    render(<SignInDivider />);
    
    const outerDiv =
      screen.getByTestId('signin-divider');
    const text = outerDiv.querySelector('p');

    const textStyle = {
      flex: 'auto',
      width: 'min-content',
      textAlign: 'center',
      fontSize: '0.875rem'      
    };

    expect(text).toHaveStyle(textStyle);

  })
});