import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import UserIcon from "./UserIcon";
import { UserContext } from "../../contexts/UserContext";


describe('UserIcon', () => {
  it('should render the component', () => {
    const userIconWithContext = (
      <UserContext.Provider value={{
        user: {
          displayName: 'John Doe',
          email: 'johndoe@mail.com',
          photoURL: 'https://example.com/mock-photo.jpg'
        }
      }}>
        <UserIcon />
      </UserContext.Provider>
    );

    render(
      userIconWithContext
    );

    expect(screen.getByTestId('user-icon'))
      .toBeInTheDocument();
  });

  it('should render an image if photoURL exist', () => {
    const userIconWithContext = (
      <UserContext.Provider value={{
        user: {
          displayName: 'John Doe',
          email: 'johndoe@mail.com',
          photoURL: 'https://example.com/mock-photo.jpg'
        }
      }}>
        <UserIcon />
      </UserContext.Provider>
    );

    render(
      userIconWithContext
    );

    expect(screen.getByRole('img'))
      .toBeInTheDocument();
  });

  it('if photoURL exist, rendered image should have required attributes',
    () => {
      const userIconWithContext = (
        <UserContext.Provider value={{
          user: {
            displayName: 'John Doe',
            email: 'johndoe@mail.com',
            photoURL: 'https://example.com/mock-photo.jpg'
          }
        }}>
          <UserIcon />
        </UserContext.Provider>
      );

      render(userIconWithContext);

      expect(screen.getByRole('img'))
        .toHaveAttribute('src', 'https://example.com/mock-photo.jpg');

      expect(screen.getByRole('img'))
        .toHaveAttribute('alt', 'Photo of user John Doe');
    });

  it('if photoURL exist, rendered image should have required styles',
    () => {
      const userIconWithContext = (
        <UserContext.Provider value={{
          user: {
            displayName: 'John Doe',
            email: 'johndoe@mail.com',
            photoURL: 'https://example.com/mock-photo.jpg'
          }
        }}>
          <UserIcon />
        </UserContext.Provider>
      );

      render(userIconWithContext);

      expect(screen.getByRole('img'))
        .toHaveStyle('width: 3rem');

      expect(screen.getByRole('img'))
        .toHaveStyle('height: 3rem');
    });

  it('should not render an image if photoURL does not exist', () => {
    const userIconWithContext = (
      <UserContext.Provider value={{
        user: null
      }}>
        <UserIcon />
      </UserContext.Provider>
    );

    render(
      userIconWithContext
    );

    const userIcon = screen.getByTestId('user-icon');

    expect(userIcon.tagName.toLowerCase()).not.toBe('img');
    expect(userIcon.tagName.toLowerCase()).toBe('div');
  });

  it('if photoURL does not exist, rendered div should have required styles',
    () => {
      const userIconWithContext = (
        <UserContext.Provider value={{
          user: null
        }}>
          <UserIcon />
        </UserContext.Provider>
      );

      render(
        userIconWithContext
      );

      const userIcon = screen.getByTestId('user-icon');
      const iconStyle = {
        height: '3rem',
        maxWidth: '3rem',
        aspectRatio: '1 / 1',
        backgroundColor: 'lightgreen',
        flexGrow: '1'
      };

      expect(userIcon.tagName.toLowerCase()).toBe('div');
      expect(userIcon).toHaveStyle("height: 3rem");
      expect(userIcon).toHaveStyle("maxWidth: 3rem");
      expect(userIcon).toHaveStyle("aspectRatio: 1 / 1");
      expect(userIcon)
        .toHaveStyle("backgroundColor: rgb(144, 238, 144)");
      expect(userIcon).toHaveStyle("flexGrow: 1");

    });
});