//let mult=1;
const fs = require('fs');

console.clear();
console.log('==============');
console.log(' Tabla del: 5');
console.log('==============');

let n=10;
const base = 3;
let salida = '';

for(let i=1;i<=n;i++){
    //mult=5*i;
    //console.log(mult);
    salida += (`${ base } x ${ i } = ${ base * i }\n`);
}

console.log(salida);

fs.writeFile(`tabla-${ base }.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`tabla-${ base }.txt`);
})