import "tsarch/dist/jest";
import { filesOfProject } from "tsarch";

describe("architecture", () => {
  jest.setTimeout(60000);

  it("business logic should not depend on the ui", async () => {
    const rule = filesOfProject()
      .inFolder("business")
      .shouldNot()
      .dependOnFiles()
      .inFolder("pages");

    await expect(rule).toPassAsync();
  });

  it("business logic should be cycle free", async () => {
    const rule = filesOfProject()
      .inFolder("business")
      .should()
      .beFreeOfCycles();

    await expect(rule).toPassAsync();
  });
});
