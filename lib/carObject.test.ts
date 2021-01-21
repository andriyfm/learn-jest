import carObject from './carObject'

test('carObject harus return object', () => {
    expect(carObject()).not.toEqual({name: 'honda', type: 'HR-V'})
})