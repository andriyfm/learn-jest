// You can check string against reqular expressions with toMatch.

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
    expect('Cristoph').toMatch(/stop/)
})