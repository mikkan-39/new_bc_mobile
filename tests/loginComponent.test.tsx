import * as React from "react";
import LoginComponent from "../src/components/loginComponent";
import { render, screen, fireEvent } from "./myTestRenderer";
import reactotron from "reactotron-react-native";

describe("loginComponent test", () => {
  reactotron.log = () => {};

  it("should match snapshot", () => {
    render(<LoginComponent loginCallback={() => {}} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("should render username", async () => {
    const expectedUsername = "123";
    render(<LoginComponent loginCallback={() => {}} />);
    fireEvent.changeText(screen.getByTestId("username"), expectedUsername);
    expect(screen.getByDisplayValue(expectedUsername)).toBeTruthy();
  });

  it("should render password", async () => {
    const expectedPassword = "321";
    render(<LoginComponent loginCallback={() => {}} />);
    fireEvent.changeText(screen.getByTestId("password"), expectedPassword);
    expect(screen.getByDisplayValue(expectedPassword)).toBeTruthy();
  });

  it("should pass creds", async () => {
    const mockFn = jest.fn();
    const expectedUsername = "123";
    const expectedPassword = "321";

    render(<LoginComponent loginCallback={mockFn} />);

    fireEvent.changeText(screen.getByTestId("username"), expectedUsername);
    fireEvent.changeText(screen.getByTestId("password"), expectedPassword);
    fireEvent.press(screen.getByTestId("loginButton"));

    expect(mockFn).toBeCalledWith({
      username: expectedUsername,
      password: expectedPassword,
    });
  });
});
