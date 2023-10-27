import { render, screen } from "@testing-library/react";
import HowItWorksCard from "../HowItWorksCard";

describe("How It Works Card component", () => {
  it("Displays the title, image and description in the dom", () => {
    const props = {
      title: "This is a title",
      description: "This is a description",
      imagePath: "/path/to/image",
    };

    render(<HowItWorksCard {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByRole("image")).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });
});
