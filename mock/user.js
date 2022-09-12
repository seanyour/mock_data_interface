const {faker} = require('@faker-js/faker');

const {internet, datatype} = faker;

let user = [
    {
        id: datatype.uuid(),
        name: 'admin',
        password: 'admin'
    }
];

for (let i = 0; i < 10; i++) {
    user.push({
        id: datatype.uuid(),
        name: internet.userName(),
        password: internet.password()
    });
}
;

module.exports = user;
