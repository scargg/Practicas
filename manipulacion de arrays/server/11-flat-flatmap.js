const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9,[7, 8, 9]],
  ]
  const rta = matriz.flat(3)

  const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]
  
  const rta2 = users.flatMap(item => item.attributes).reduce((acu,item)=>{
    acu[item] = acu[item] ? acu[item] + 1 : 1
    return acu
  },{})
  const calendars = {
    primaryCalendar: [{
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [{
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  }
  const rta3 = Object.entries(calendars).flat(3).reduce((acu,item)=>{
    item.startDate ? acu.push(item.startDate) : acu 
    return acu
  },[])
  console.log('1: ',rta3);
  const rta4 = Object.values(calendars).flatMap(item => {
    return item.map(item => item.startDate)
  })
  console.log('2: ',rta4);
