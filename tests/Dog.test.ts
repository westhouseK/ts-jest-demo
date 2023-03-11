import { Dog } from "../src/Dog";

const fn = jest.fn();
test('fnが呼び出せていること', () => {
    fn()
    expect(fn).toBeCalled();
})

test('関数をモックできていること', () => {
    jest.spyOn(Dog.prototype, 'bark').mockImplementationOnce(() => 'mock!')
    const dog = new Dog('pochi');
    expect(dog.bark()).toStrictEqual('mock!')
})

