
function fetchUser(id: number, cb: (arg0: { id: any; name: string; email: string; }) => void) {
  setTimeout(() => {
    console.log("wait 0.1 sec.");

    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    };

    cb(user);
  }, 100);
}

//  test('fetch a user', ()=>{
//      return fetchUser('2', (user) => {
//          expect(user).toEqual({
//              id: 1,
//              name: 'harry',
//              email: '1@test.com'
//          });
//      });
//  })

test("fetch a user", (done) => {
  fetchUser(1, (user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
    
    done();
  });
});