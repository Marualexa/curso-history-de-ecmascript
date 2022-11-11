// metodo anterior
function neaUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country ||'MX';
    console.log(name,age,country);
}

neaUser();
neaUser('David', 15, 'CO');

//metodo actual
function newAdmin(name = 'Oscar', age = 32, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');