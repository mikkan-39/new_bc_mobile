import reactotron from "reactotron-react-native";
import { getConfig, getSqlTable, loginRequest } from "../src/api";

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

  it("should get tables", () => {
    expect(async () => {
      await getSqlTable({
        Field: "TaskDescription",
        Left: "Data_zavershenija2086376608000",
        Review: "rvTaskList",
        Right: "TaskResponsible.Name",
        Table: "tblTask",
      });
    }).not.toThrowError();
  });
});
