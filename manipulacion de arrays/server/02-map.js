const letters = ['a','b','c']
const arr = letters.map(item => item + '++')
console.log(arr);

const products2 = [
    {title: 'tv', price: 12},
    {title: 'pc', price: 1.5}
]

/*
Para no mutar las propiedades del objeto original con map, tenemos que crear una copia de la ref original con el spreat operator

const arr2 = products2.map(item => {
    item.mes = 'septiembre'
    return item
})

esto creara la nueva propiedad para cada elemento del array pero tambien la agregara al array original, esto solo con objetos, porque cada propiedad es una llamada a su referencia y si cambiamos esa referencia cambia el estado original
*/

/*De esta forma no ocurriria eso*/
const arr2 = products2.map(item => {
    return {...item,
            mes: 'septiembre'}
})

/* recibimos un aray y regresamos uno nuevo con una nueva propiedad taxes sin cambiar el original*/

function addNewAttr(array) {
    // Tu código aquí 👈
     return array.map(item =>
    {
      return {
        ...item,
        taxes: Math.trunc(item.price * 0.19)
      }})
  }
  const newarr = addNewAttr(products2)
 console.log(newarr);
 console.log(products2);