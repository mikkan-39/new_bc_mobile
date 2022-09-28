import reactotron from "reactotron-react-native";
import { getConfig, loginRequest } from "../src/api";

describe("Requests tests", () => {
  it("should login", () => {
    expect(async () => {
      await loginRequest({ username: "mbs", password: "1qaz!QAZ" });
    }).not.toThrowError();
  });

  it("should get config", () => {
    expect(async () => {
      await getConfig();
    }).not.toThrowError();
  });
});
