
const mockFn = jest.fn().mockImplementation(n1 => n1 + 1);

describe('hogehoge', () => {

  it('hoge', () => {
    expect(['a', 'b']).toEqual(expect.not.arrayContaining(['c']),
    );
  });
});
