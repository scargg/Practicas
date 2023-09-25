const array = [1,4,3,4,4,5]
const newarr2 = array.reduce((acu,item)=> {
    acu[item] = acu[item] ? acu[item] + 1 : 1
    return acu
},{})
console.log(newarr2);


const cadena = "Hello World"
const cadena2 = cadena.split('')
console.log(cadena2);
const newCadena = cadena.split('').reduce((acu,item)=>{
    if(item != ' '){
        acu[item] = acu[item] ? acu[item] + 1 : 1
    }
    return acu
},{})

console.log(newCadena);

const number = [1, 1, 1]
const newnumber = number.reduce((acu,item)=>acu+item,0)
console.log(newnumber);
