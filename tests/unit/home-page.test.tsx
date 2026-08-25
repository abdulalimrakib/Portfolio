import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { profile } from "@/data/profile";

describe("Home page", () => {
  it("renders the hero heading and contact email", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /I build AI systems/i, level: 1 }),
    ).toBeInTheDocument();

    expect(screen.getAllByText(profile.email).length).toBeGreaterThan(0);
  });
});
