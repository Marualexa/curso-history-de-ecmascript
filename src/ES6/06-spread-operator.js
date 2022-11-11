let person = { name: 'Oscar', age: 28 };
let country = 'MX';

let date = { id: 1,...person, country };
console.log(data);

//paramet rest
function sum(num, ...value) {
    console.log(value);
    console.log(num + value[0]);
    return num + value[0];
}

sum(1,1,2,3);



// function solucion(json1, json2) {

//     let jsonDefecto1 = { name: 'Mr.Mich', food: 'pescado'};
//     let jsonDefecto2 = { age: 12, color: 'Blanco'};

//     if(json1) {
//         jsonDefecto1 = json1;
//     }
//     if(json2) {
//         jsonDefecto2 = json2;
//     }

//     return { ...jsonDefecto1, ...jsonDefecto2 };
// }
function solucion(json1 = {
    name: "Mr. Michi",
    food: "Pescado"
}, json2 = {
    age: 12,
    color: "Blanco"
}) {
    return { ...json1, ...json2 };
}

let json1 = { name: 'Mariana', food: 'pescado'}
let json2 = { age: 13, color: 'Blanco'}

const resultado = solucion();
console.log(resultado);
