import {faker} from "@faker-js/faker";

const {internet, datatype} = faker;


const user = [
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

export default user;
