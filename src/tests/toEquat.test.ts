
test('object assignment', () => {
  const data:any = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

