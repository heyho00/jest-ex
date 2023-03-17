import { users } from "./data";

export function findAll() {
    return users;
}

export function create(user) {
    users.push(user);
}

export function destroy(id) {
    users.splice(
        users.findIndex((user) => user.id === id),
        1
    );
}

export function update(id, user) {
    users[users.findIndex((user) => user.id === id)] = user;
}


