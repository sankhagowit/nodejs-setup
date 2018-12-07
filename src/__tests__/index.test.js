import config from "../config";

test("Its Working", () => {
  expect(config.isTest).toEqual(false);
});
