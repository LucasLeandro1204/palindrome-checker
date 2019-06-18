const {
  expect,
} = require('chai');
const puppeteer = require('puppeteer');
const pti = require('puppeteer-to-istanbul');

const {
  expect: globalExpect,
  browser: globalBrowser,
} = global;

// puppeteer options
const opts = {
  timeout: 10000,
  headless: true,
};

before(async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
  global.page = await browser.newPage();

  await Promise.all([
    page.coverage.startJSCoverage(),
    page.coverage.startCSSCoverage()
  ]);
});

after(async () => {
  const [
    jsCoverage,
    cssCoverage,
  ] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage(),
  ]);

  pti.write(jsCoverage);

  await browser.close();

  global.expect = globalExpect;
  global.browser = globalBrowser;
});
