// You can check if an array or iterable contains a particular item using toContain

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towel',
    'milk'
]

test('the shoping list has milk on it', () => {
    expect(shoppingList).toContain('milk')
    // expect(new Set(shoppingList)).toContain('milka')
})