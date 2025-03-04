// SignUp.test.jsx
import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignUp from "../src/screens/SignUp";

describe("SignUp Component", () => {
  it("renders the sign up form correctly", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    // Check that form labels/fields are present
    // Adjust these label texts to match your signup form
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    // Check that the sign-up button is present
    // Adjust the button text to match your actual sign-up button
    expect(
      screen.getByRole("button", { name: /Sign up/i })
    ).toBeInTheDocument();
  });

  it("handles input changes correctly", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    // Grab the input fields by label text
    const usernameInput = screen.getByLabelText(/Username/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    // Simulate typing
    fireEvent.change(usernameInput, { target: { value: "testUser" } });
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "password1234" } });

    // Check the updated values
    expect(usernameInput.value).toBe("testUser");
    expect(emailInput.value).toBe("test@gmail.com");
    expect(passwordInput.value).toBe("password1234");
  });

  it("redirects to login page when I click on 'Sign in'", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    // Suppose your signup form says: "Already have an account? Sign in"
    // This test checks that "Sign in" is a link pointing to "/login"
    const loginLink = screen.getByText(/Sign in/i);
    expect(loginLink.closest("a")).toHaveAttribute("href", "/login");
  });
});
