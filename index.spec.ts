import data from './data.json'

test('the data is correct', () => {
    expect(data).toMatchSnapshot()
    expect(data).toHaveLength(2)
    expect(data.map(item => item.id)).toEqual([1,2])
})

data.forEach((el, i) => {
    test(`data ${i}: harus mempunyai property id, title & description`, () => {
        expect(el).toHaveProperty('id')
        expect(el).toHaveProperty('title')
        expect(el).toHaveProperty('description')
    })
});