const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const logs = [];
  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('clear') || text.includes('Clear') || text.includes('✅') || text.includes('❌')) {
      logs.push(text);
    }
  });

  await page.goto('http://localhost:3002');
  await page.waitForTimeout(10000);
  await page.screenshot({ path: '/tmp/spline-transparent.png', fullPage: false });
  console.log('Screenshot saved');
  logs.forEach(l => console.log('LOG:', l));

  await browser.close();
})();
