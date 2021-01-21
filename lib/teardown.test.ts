import fetch from 'node-fetch'

function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response:any) => response.json())
    .then((json:any) => Promise.resolve(json));
}

function fetchPost() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response: any) => response.json())
  .then((json: any) => Promise.resolve(json));
}

function initializeCityDatabase() {
    setTimeout(() => {
        return Promise.resolve('Viena')
    }, 2000);
}

function clearCityDatabase() {
    setTimeout(() => {
        return Promise.resolve('san juan')
    }, 2000);
}

function isCity(city:string) {
    return city === 'viena' || 'san juan'
}

beforeAll(() => {
    initializeCityDatabase()
})
afterAll(() => {
    clearCityDatabase()
})

test('city database has viena', () => {
    expect(isCity('viena')).toBeTruthy()
})

test('city database has san juan', () => {
    expect(isCity('san juan')).toBeTruthy()
})

test('data harus punya property id yang bernilai 1', async () => {
    await expect(fetchTodo()).resolves.toHaveProperty('id', 1)
})

test('data harus punya property userId yang bernilai 1', async () => {
    await expect(fetchTodo()).resolves.toHaveProperty('userId', 1)
})

test('data harus punya property title yang bernilai "delectus aut autem"', async () => {
    await expect(fetchTodo()).resolves.toHaveProperty('title', 'delectus aut autem')
})