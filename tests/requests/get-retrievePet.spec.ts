// get pet details
import { test, expect } from "@playwright/test";
//
test("Get pet details", async ({ request }) => {
  const response = await request.get("/pet/2");
  expect(await response.status()).toBe(200);
});
