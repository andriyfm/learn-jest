// NOTE: toBe(n) dan toEqual(n) are equivealent for numbers

test('n harus lebih besar dari 5', () => {
    const n = 10
    expect(n).toBeGreaterThan(5)
})

test('n harus lebih kecil dari 5', () => {
    let n: number;
    n = 4
    expect(n).toBeLessThan(5)
})

test('n harus lebih besar atau sama dengan 5', () => {
    const n = 5;
    expect(n).toBeGreaterThanOrEqual(5)
})

test('menambahkan nilai pecahan', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); // This won't work because of rounding error
    expect(value).toBeCloseTo(0.3)
})