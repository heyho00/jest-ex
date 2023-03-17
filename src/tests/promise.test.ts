

function fetchpromiseUser(id:number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("wait 0.1 sec.");
      const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
      };

      resolve(user);
    }, 100);
  });
}


// test("fetch a user", () => {
//   fetchpromiseUser(2).then((user) => {
//     expect(user).toEqual({
//       id: 1,
//       name: "User1",
//       email: "1@test.com",
//     });
//   });
// });

test("fetch a user", () => {
  return fetchpromiseUser(1).then((user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
  });
});
