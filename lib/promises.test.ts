import fetch from 'node-fetch'

const fetchData = () => {
  return new Promise(async (resolve, reject) => {
    fetch("https://jsonplaceholdera.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => resolve('peanut butter'))
      .catch((err) => reject('error'));
  });
};

test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  return expect(fetchData()).rejects.toMatch('error');
});