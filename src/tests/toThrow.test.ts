function getUser(id:number) {
  if (id <= 0) throw new Error("Invalid ID");
  return {
    id,
    email: `user${id}@test.com`,
  };
}

// test("throw when id is non negative", () => {
//   expect(getUser(-1)).toThrow();
//   expect(getUser(-1)).toThrow("Invalid ID");
// });

// 이렇게는 에러남.
// expect() 함수에 넘기는 검증 대상을 함수로 한 번 감싸줘야함.

// 그렇지 않으면 예외 발생 여부를 체크하는 것이 아니라, 
// 테스트 실행 도중 정말 그 예외가 발생하기 때문에 그 테스트는 항상 실패하게 된다.

test("throw when id is non negative", () => {
  expect(() => getUser(-1)).toThrow();
  expect(() => getUser(-1)).toThrow("Invalid ID");
});
