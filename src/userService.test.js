
//userService.findAll() 테스트

// data 모듈의 users 배열이 비어있으므로 세 건의 데이터를 추가 후에 userService.findAll()를 호출
// 그 다음, 리턴 결과의 길이가 3인지, 그리고 각 사용자 데이터를 정확히 담고 있는지 검증

import { findAll } from './userService';
import { users as _users } from './data';

test('find all users', () => {
    _users.push(
        { id: 1, email: "user1@test.com" },
        { id: 2, email: "user2@test.com" },
        { id: 3, email: "user3@test.com" }
    )
    
    const users = findAll();

  expect(users).toHaveLength(3);
  expect(users).toContainEqual({ id: 1, email: "user1@test.com" });
  expect(users).toContainEqual({ id: 2, email: "user2@test.com" });
  expect(users).toContainEqual({ id: 3, email: "user3@test.com" });
});

