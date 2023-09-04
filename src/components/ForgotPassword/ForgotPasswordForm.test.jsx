import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";


describe('ForgotPasswordForm', () => {
  it('should render the Chakra label', async () => {
    render(
      <MemoryRouter>
        <ForgotPasswordForm />
      </MemoryRouter>
    );

    expect(
      await screen.findByLabelText(/email address/i)
    ).toBeInTheDocument();
  });

  it('should render the Chakra Input with required attribute',
    async () => {
      render(
        <MemoryRouter>
          <ForgotPasswordForm />
        </MemoryRouter>
      );

      const emailInputField =
        screen.getByRole('textbox', { type: 'email' });

      expect(emailInputField).toBeRequired();
  });

  it('should render the Chakra Input with placeholder: `Your email`',
    async () => {
      render(
        <MemoryRouter>
          <ForgotPasswordForm />
        </MemoryRouter>
      );

      const emailInputField =
        screen.getByRole('textbox', { type: 'email' });

      expect(emailInputField.placeholder).toBe('Your email');
  });

  it('should render the submit button', async () => {
    render(
      <MemoryRouter>
        <ForgotPasswordForm />
      </MemoryRouter>
    );

    const submitBtn = screen.getByRole('button', { type: 'submit' });
    expect(submitBtn).toBeInTheDocument();
  });

  it('submit button should have text `Recover Password`.', async () => {
    render(
      <MemoryRouter>
        <ForgotPasswordForm />
      </MemoryRouter>
    );

    const submitBtn =
      screen.getByRole('button', { type: 'submit' });

    expect(submitBtn).toHaveTextContent(/recover password/i);
  });

  it('should render the `return to login` custom link',
    async () => {
      render(
        <MemoryRouter>
          <ForgotPasswordForm />
        </MemoryRouter>
      );

      const link = screen.getByRole('link');
      expect(link).toHaveTextContent(/return to login/i);

    });

  it('`return to login` custom link should redirect to `/login` page',
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
        <MemoryRouter initialEntries={['/forgot-password']}>
          <Routes>
            <Route
              path="/forgot-password"
              element={<ForgotPasswordForm />}
            />
            <Route
              path="/login"
              element={<TestLocation />}
            />
          </Routes>
        </MemoryRouter>
      );

      const returnToLoginLink =
        screen.getByText(/return to login/i);

      fireEvent.click(returnToLoginLink);

      expect(
        screen.getByTestId('location').textContent
      ).toBe('/login');
  });
});