const arr = [1,2,3]
const arr2 = [4,5,5,6]
const rta = arr.concat(arr2).reduce((acu,item)=>{
    !acu.includes(item) ? acu.push(item) : acu
    return acu
},[])
console.log(rta);