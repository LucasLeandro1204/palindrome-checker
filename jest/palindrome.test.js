const { join } = require('path');
const path = join(__dirname, '../public/index.html');

describe('Palindrome', () => {
  beforeAll(async () => {
    await page.goto(`file:${path}`);
  });

  it('should contain a form with an input', async () => {
    const form = await page.$('form');
    const input = await page.$('form input');

    expect(form).not.toBeNull();
    expect(input).not.toBeNull();
  });

  it('should add a new table record with correct palindrome verification when form is submited', async () => {
    const input = await page.$('form input');

    await input.type('not a palindrome');
    await input.press(String.fromCharCode(13));

    const tds = await page.$$('tbody tr');

    expect(tds).toHaveLength(1);
  });

  // it('should not add a new value to history if input is empty', async () => {

  // });
});
