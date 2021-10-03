import { Human } from "../src/Human"


test('', () => {
  expect(new Human('taro').getName).toBe('My name is taro')
})