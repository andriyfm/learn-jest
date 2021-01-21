function fetchData() {
    return Promise.resolve('WOW')
}

function fetchData2() {
    return Promise.reject({message: 'error'})
}

test('data harus berisi "WOW"', async () => {
    await expect(fetchData()).resolves.toBe('WOW')
})

test('error yang dikembalikan harus berisi "Fn Error"', async () => {
    await expect(fetchData2()).rejects.toEqual({message: 'error'})
})