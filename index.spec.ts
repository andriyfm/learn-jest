import data from "./data.json";

test("the data is correct", () => {
  expect(data).toMatchSnapshot();
  expect(data).toHaveLength(2);
  expect(data.map((item) => item.id)).toEqual([1, 2]);
});

data.forEach((el, i) => {
  test(`data ${i}: harus mempunyai property id, title & description`, () => {
    expect(el).toHaveProperty("id");
    expect(el).toHaveProperty("title");
    expect(el).toHaveProperty("description");
  });
});

test("mock implementation of a basic function", () => {
  const mock = jest.fn(() => "I am a mock function");
  expect(mock()).toBe("I am a mock function");
});

test("should mock implementation of a function", () => {
  const func = jest.fn().mockImplementation(() => "United Kingdom");
  expect(func("location")).toBe("United Kingdom");
  expect(func).toHaveBeenCalledWith("location");
});

test("spying using original implementation", () => {
  const pizza = { name: (n:string) => `pizza name ${n}` };
  const spy = jest.spyOn(pizza, "name");

    expect(pizza.name("keju")).toBe("pizza name keju");
    expect(spy).toHaveBeenCalledWith('keju')
});

test("spying using  implementation", () => {
  const pizza = { name: (n:string) => `pizza name ${n}` };
  const spy = jest.spyOn(pizza, "name");

    spy.mockImplementation(()=>'crazy pizza')
    expect(pizza.name('keju')).toBe('crazy pizza')

    spy.mockRestore()
    expect(pizza.name('keju')).toBe('pizza name keju')
});
test('should return resolve promise', async () => {
    const fetchdata = jest.fn(() => Promise.resolve({message: 'work'}))
    await expect(fetchdata()).resolves.toEqual({message: 'work'})
})

test('should return reject promise', async () => {
    const fetchdata = jest.fn(() => Promise.reject(new Error('error')))
    await expect(fetchdata()).rejects.toThrowError('error')
})
