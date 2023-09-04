import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FinzLogo from "./FinzLogo";

describe('FinzLogo', () => {
  it('should render `FinzLogo` component', () => {
    render(<FinzLogo />);

    expect(screen.getByTestId('finz-logo')).toBeInTheDocument();
  });

  it('outer div should have the required styles', () => {
    render(<FinzLogo />);

    const outerDivStyles = {
      display: 'grid',
      justifyContent: 'center',
      placeItems: 'center',
      position: 'relative',
      transform: `scale(1)`,
      width: 'min-content',
      height: 'min-content',
      maxWidth: 'min-content',
      maxHeight: 'min-content',
      justifySelf: 'center',
    };

    expect(screen.getByTestId('finz-logo'))
      .toHaveStyle(outerDivStyles);
  });

  it('logo should scale as per prop value passed to it', () => {
    const scale = 3;

    render(<FinzLogo scale={scale} />);


    const outerDivStyles = {
      display: 'grid',
      justifyContent: 'center',
      placeItems: 'center',
      position: 'relative',
      transform: `scale(${scale})`,
      width: 'min-content',
      height: 'min-content',
      maxWidth: 'min-content',
      maxHeight: 'min-content',
      justifySelf: 'center',
    };

    expect(screen.getByTestId('finz-logo'))
      .toHaveStyle(outerDivStyles);
  });

  it('should render background svg', () => {
    render(<FinzLogo />);

    const bgSvg =
      screen.getByTestId('finz-logo').querySelector('svg');

    expect(bgSvg).toBeInTheDocument();
  });

  it('background svg should have necessary attributes', () => {
    render(<FinzLogo />);

    const bgSvg =
      screen.getByTestId('finz-logo').querySelector('svg');

    expect(bgSvg).toHaveAttribute(
      'xmlns',
      'http://www.w3.org/2000/svg'
    );
    expect(bgSvg).toHaveAttribute('width', '87');
    expect(bgSvg).toHaveAttribute('height', '87');
    expect(bgSvg).toHaveAttribute('viewBox', '0 0 87 87');
    expect(bgSvg).toHaveAttribute('fill', 'none');
    expect(bgSvg).toHaveAttribute('position', 'absolute');
  });

  it('background svg should have necessary styles', () => {
    render(<FinzLogo />);

    const bgSvg =
      screen.getByTestId('finz-logo').querySelector('svg');

    const bgSvgStyle = {
      gridColumnStart: '1',
      gridColumnEnd: '2',
      gridRowStart: '1',
      gridRowEnd: '2',

      transform: `scale(1)`
    };

    expect(bgSvg).toHaveStyle(bgSvgStyle);
  });

  it('background svg should scale as per prop value', () => {
    const scale = 3;
    render(<FinzLogo scale={scale} />);

    const bgSvg =
      screen.getByTestId('finz-logo').querySelector('svg');

    const bgSvgStyle = {
      gridColumnStart: '1',
      gridColumnEnd: '2',
      gridRowStart: '1',
      gridRowEnd: '2',

      transform: `scale(${scale})`
    };

    expect(bgSvg).toHaveStyle(bgSvgStyle);
  });

  it('should render inner svg', () => {
    render(<FinzLogo />);

    const innerSvg =
      screen.getByTestId('finz-logo').querySelectorAll('svg')[1];

    expect(innerSvg).toBeInTheDocument();
  });

  it('inner svg should have necessary attributes', () => {
    render(<FinzLogo />);

    const innerSvg =
      screen.getByTestId('finz-logo').querySelectorAll('svg')[1];

    expect(innerSvg).toHaveAttribute(
      'xmlns',
      'http://www.w3.org/2000/svg'
    );
    expect(innerSvg).toHaveAttribute('width', '82');
    expect(innerSvg).toHaveAttribute('height', '82');
    expect(innerSvg).toHaveAttribute('viewBox', '0 0 82 82');
    expect(innerSvg).toHaveAttribute('fill', 'none');
  });

  it('innerSvg svg should have necessary styles', () => {
    render(<FinzLogo />);

    const innerSvg =
      screen.getByTestId('finz-logo').querySelectorAll('svg')[1];

    const innerSvgStyle = {
      position: 'absolute',
      gridColumnStart: '1',
      gridColumnEnd: '2',
      gridRowStart: '1',
      gridRowEnd: '2',
      transform: `scale(1)`
    };

    expect(innerSvg).toHaveStyle(innerSvgStyle);
  });

  it('inner svg should scale as per prop value', () => {
    const scale = 3;
    render(<FinzLogo scale={scale} />);

    const innerSvg =
      screen.getByTestId('finz-logo').querySelectorAll('svg')[1];

    const innerSvgStyle = {
      position: 'absolute',
      gridColumnStart: '1',
      gridColumnEnd: '2',
      gridRowStart: '1',
      gridRowEnd: '2',
      transform: `scale(${scale})`
    };

    expect(innerSvg).toHaveStyle(innerSvgStyle);
  });


});