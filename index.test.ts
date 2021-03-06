import { Builder, WebDriver } from 'selenium-webdriver';
import 'selenium-webdriver/chrome';
import 'selenium-webdriver/firefox';
import 'chromedriver';
import 'geckodriver';

import { querySelector } from './helpers';

const rootURL = 'https://www.mozilla.org/en-US/';
let driver: WebDriver;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => driver.quit());

it('initialises the context', async () => {
  await driver.get(rootURL);
});

it('should click on navbar button to display a drawer', async () => {
  const anchor = await querySelector("[href='/en-US/firefox/']", driver);
  const actual = await anchor.getText();
  const expected = 'Firefox';
  expect(actual).toEqual(expected);
});
