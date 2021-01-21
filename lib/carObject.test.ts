import carObject from './carObject'

test('carObject harus return object', () => {
    expect(carObject()).toEqual({name: 'honda', type: 'HR-V'})
})