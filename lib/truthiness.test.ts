test('null', () => {
    const n = null;
    expect(n).toBeNull();
    // expect(n).toBeUndefined();
    // expect(n).toBeUndefined();
    // expect(n).toBeTruthy();
    // expect(n).toBeFalsy()
})

test('undefined', () => {
    const n = undefined;
    expect(n).toBeUndefined()
})

test('defined', () => {
    let n: string;
    n = 'hello world'
    expect(n).toBeDefined()
})

test('truthy', () => {
    const n = true
    expect(n).toBeTruthy()
})

test('falsy', () => {
    const n = false;
    expect(n).toBeFalsy()
})