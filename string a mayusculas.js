const arr = 'una palabra mayuscula'
const arr1 = arr.split(' ')
const arr2=[]
console.log(arr1);
arr1.forEach(word => {
    let a = word[0].toUpperCase() + word.substring(1)
    console.log(a);
    arr2.push(a)
})
console.log(arr2.join(' '));
/*
set name(nuevoNombrecito) {
    // Tu código aquí 👈
    if (typeof nuevoNombrecito === 'string') {
      nuevoNombrecito = nuevoNombrecito.trim()
      if (nuevoNombrecito.length != 0) 
      {
        const arr1 = nuevoNombrecito.split(' ')
        const arr2 = []
        console.log(arr1);
        arr1.forEach(word => {
          let a = word[0].toUpperCase() + word.substring(1)
          console.log(a);
          arr2.push(a)
        })
        this._name = arr2.join(' ')
      } else {return this.name}
    }
  }
*/