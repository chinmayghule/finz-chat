import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { describe, it } from "vitest";
import CustomChakraLink from "./CustomChakraLink";

describe('CustomChakraLink', () => {
  it('should render a link', async () => {
    render(
      <MemoryRouter>
        <CustomChakraLink
          link='#'
          linkContent='login'
        />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveTextContent(/login/i);
  });

  it('`go to test location` custom link should redirect to `/test-location` page',
    async () => {
      const TestLocation = () => {
        const location = useLocation();
        return (
          <div data-testid="location">
            {location.pathname}
          </div>
        );
      };

      render(
        <MemoryRouter initialEntries={['/custom-chakra-link']}>
          <Routes>
            <Route
              path="/custom-chakra-link"
              element={
                <CustomChakraLink
                  link='/test-location'
                  linkContent='go to test location'
                />
              }
            />
            <Route
              path="/test-location"
              element={<TestLocation />}
            />
          </Routes>
        </MemoryRouter>
      );

      const returnToTestLocationLink =
        screen.getByText(/go to test location/i);

      fireEvent.click(returnToTestLocationLink);

      expect(
        screen.getByTestId('location').textContent
      ).toBe('/test-location');
    });

});