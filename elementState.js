const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://demoqa.com/automation-practice-form");

  const firstName = await page.$("#firstName");
  const sportChecks = await page.$("#hobbies-checkbox-1");
  const sumitBtn = await page.$("#submit");

  console.log(await firstName.isDisabled());
  console.log(await firstName.isEnabled());
  console.log(await firstName.isEditable());
  console.log(await sportChecks.isChecked);
  console.log(await sportChecks.isVisible());
  console.log(await sumitBtn.isHidden());
  console.log(await sumitBtn.isVisible());

  await browser.close();
})();
