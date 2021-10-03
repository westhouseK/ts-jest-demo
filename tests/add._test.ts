import { add } from "../src/add";

test('nomarl', () => {
  expect(add(1,2)).toBe(3);
})

test('abnomarl', () => {
  expect(add(0,2)).not.toBe (3);
})


