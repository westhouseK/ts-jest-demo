import { Dog } from "../src/Dog";

test('fnが呼び出せていること', () => {
    const fn = jest.fn();
    fn()
    expect(fn).toBeCalled();
})

test('関数がモックできていること', () => {
    jest.spyOn(Dog.prototype, 'bark').mockImplementationOnce(() => 'mock!')
    const dog = new Dog('pochi');
    expect(dog.bark()).toStrictEqual('mock!')
})

test('アロー関数がモックできていること', () => {
    jest.mock('../src/Dog')
    jest.mocked(Dog).prototype.barkAllow = jest.fn().mockImplementationOnce(() => 'mock arrow')
    expect(jest.mocked(Dog).prototype.barkAllow()).toStrictEqual('mock arrow')
})

test('console.logのテスト', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    new Dog('pochi').feel();
    expect(logSpy).toHaveBeenCalledTimes(1)
    expect(logSpy).toHaveBeenCalledWith('feel')
    logSpy.mockRestore()
})

test('Promiseのテスト', () => {
    expect(new Dog('taro').eat()).resolves.toBe('eat!')
})

test('Async/Awaitのテスト', () => {
    expect(new Dog('taro').drink()).resolves.toBe('drink!')
})
