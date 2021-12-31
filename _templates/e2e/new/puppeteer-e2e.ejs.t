---
to: "src/<%= path %>/__tests__/<%= h.changeCase.kebab(name) %>.e2e.js"
---

import puppeteer from 'puppeteer';
import { getDocument, queries } from 'pptr-testing-library';

describe('<%= name %> e2e', () => {

  /**
  * Variables
  */
  let browser;
  let page;

  /**
  * Setup
  */
  beforeAll(async () => {
    browser = await puppeteer.launch(
      // { headless: false, slowMo: 100 },
    );
    page = await browser.newPage();
    await page.goto(process.env.VUE_APP_BRONCONAT_URL);
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
  });
});
