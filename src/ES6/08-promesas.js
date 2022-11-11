const anotherFuntion = () => {
    return new Promise((resolve, reject) => {
        if(false) { // se puede aplicar true o false para el resultado
            resolve('Hey!!');
        } else {
            reject('No logrado:(');
        }
    })
}

anotherFuntion()
    .then(response => console.log(response))
    .catch(err => console.log(err));