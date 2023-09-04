import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LoadingGeneral from "./LoadingGeneral";

describe('LoadingGeneral', () => {
  it('should render `LoadingGeneral` component', () => {
    render(<LoadingGeneral />);

    expect(
      screen.getByTestId('loading-general')
    ).toBeInTheDocument();
  });

  it('outer div should have the required styles', () => {
    render(<LoadingGeneral />);

    const outerDivStyles = {
      minHeight: '100dvh',
      display: 'grid',
      justifyContent: 'center',
      placeItems: 'center',
      backgroundColor: 'rgba(226, 232, 240, 1)'
    };
    
    expect(
      screen.getByTestId('loading-general')
    ).toHaveStyle(outerDivStyles);
  });

  it('should render inner div', () => {
    render(<LoadingGeneral />);

    const outerDiv = screen.getByTestId('loading-general');
    const innerDiv = outerDiv.querySelector('div');
    expect(innerDiv).toBeInTheDocument();
  });

  it('inner div should have the required styles', () => {
    render(<LoadingGeneral />);

    const outerDiv = screen.getByTestId('loading-general');
    const innerDiv = outerDiv.querySelector('div');
    
    const innerDivStyles = {
      animation: 'finzLogoLoadingAnimation 3s infinite linear'
    };
    
    expect(innerDiv).toHaveStyle(innerDivStyles);
  });

});