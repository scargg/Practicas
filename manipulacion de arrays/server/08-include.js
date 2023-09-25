const arr = ['cat','dog','bat',bat]
const rta = arr.includes('dog')

function filterByTerm(array, term) {
    // Tu código aquí 👈
    return array.reduce((acu,item)=>{
        item.includes(term) ? acu.push(item) : acu
        return acu
    },[])
  }
console.log(filterByTerm(arr,'a'));
console.log(arr);