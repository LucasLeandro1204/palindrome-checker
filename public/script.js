const form = document.querySelector('form');
const input = document.querySelector('form input');
const tbody = document.querySelector('table tbody');

const createTd = (string, flag) => {
  return '<td>' + string + '</td><td>' + flag ? 'sim' : 'não' + '</td>'
};

const isPalindrome = (string) => {
  const clean = string.replace(/[^a-zA-Z0-9]/, '');
  const reversed = clean.split('').reverse().join('');

  return clean === reversed;
};

const createTableRow = (string, flag) => {
  const element = document.createElement('tr');

  element.innerHTML = createTd(string, flag);

  return element;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (! input.value) {
    return;
  }

  tbody.insertBefore(createTableRow(input.value, isPalindrome(input.value)), tbody.firstChild);

  input.value = '';
});
