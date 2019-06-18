const {
  join,
} = require('path');
const path = `file:${join(__dirname, '../public/index.html')}`;

describe('Palindrome', () => {
  before(async () => {
    await page.goto(path);
  });

  it('should contain a form with an input', async () => {
    const form = await page.$('form');
    const input = await page.$('form input');

    expect(form).to.not.equal(null);
    expect(input).to.not.equal(null);
  });

  it('should add a new table record with correct palindrome verification when form is submited', async () => {
    const input = await page.$('form input');

    await input.type('not a palindrome');
    await input.press('Enter');

    const tds = await page.$$('tbody tr');

    expect(tds).to.have.lengthOf(1);
  });

  it('should not add a new row if input is empty', async () => {
    const input = await page.$('form input');

    await input.type('');
    await input.press('Enter');

    const tds = await page.$$('tbody tr');

    expect(tds).to.have.lengthOf(1);
  });
});
