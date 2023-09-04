import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomepageChatCard from "./HomepageChatCard";

describe('HomepageChatCard', () => {
  it('should render `HomepageChatCard` component', () => {
    render(<HomepageChatCard />);

    expect(
      screen.getByTestId('homepage-chat-card')
    ).toBeInTheDocument();
  });

  it('should render props passed to the component', () => {
    render(
      <HomepageChatCard
        chatOwnerIcon={<div>Chat Owner Icon</div>}
        chatContent={<div>Chat Content</div>}
        chatOperationIcon={<div>Chat Operation Icon</div>}
      />
    );

    expect(
      screen.getByTestId('homepage-chat-card')
    ).toHaveTextContent(/chat owner icon/i);

    expect(
      screen.getByTestId('homepage-chat-card')
    ).toHaveTextContent(/chat content/i);

    expect(
      screen.getByTestId('homepage-chat-card')
    ).toHaveTextContent(/chat operation icon/i);
  });
});