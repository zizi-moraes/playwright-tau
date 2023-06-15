const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://applitools.com");

  //print page
  await page.screenshot({ path: "s1_page.png" });

  //print page with scroll
  await page.screenshot({ path: "s2_full_page.png", fullPage: true });

  //print element
  const logo = await page.$(".logo");
  await logo.screenshot({ path: "s3_element.png" });

  await browser.close();
})();
