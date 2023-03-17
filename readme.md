# jest

sample test,

TextField test

기본적으로 테스트는 다음과 같은 패턴으로 작성한다.

```js
test("테스트 설명", () => {
  expect("검증 대상").toXxx("기대 결과");
});
```

## matcher

위의 .toXxx 부분에서 사용되는 흔히 test Matcher라고 한다.

### toBe

toBe는 Object.is를 사용하여 정확한 동일성을 테스트한다.

숫자나 문자같은 객체가 아닌 원시값을 비교할 때 사용된다.

```js
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

// 이 코드에서 .toBe(4)가 matcher이다. 
```

### toEqual

객체의 값을 확인하려면 toEqual을 사용한다.

toEqual은 객체 또는 배열의 모든 필드를 재귀적으로 확인한다.

```js
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```

```js
test("return a user object", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});
```

not을 사용하여 일치하는 항목의 반대를 테스트할 수도 있다

```js
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```

.
.
.

tests 폴더에 ...

<br>

## Jest로 테스트 전/후 처리하기

다음 파일들 사용.

src/data.js

src/userService.js

src/userService.test.js