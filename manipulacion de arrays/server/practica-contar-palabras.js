const array = ['       a ','              a']
  //  console.log(rta);
  
  const array2 = ['hola','hola']

  const rta = array.join(' ').split(' ').reduce((acu,item)=>{
    acu = !item.length == 0 ? acu + 1 : acu
    return acu
  },0)
  console.log(rta);