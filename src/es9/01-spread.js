const user = { username: 'gndx', age: 34, country: 'CD'};
const { username, ...values } = user;
console.log(username);
console.log(values);