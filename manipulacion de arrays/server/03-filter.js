const words = ["spray", "elites", "limit", "apple", "exuberant"]

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

const rta = words.filter(item => item.length >= 6)
const rta2 = orders.filter(item => item.delivered && item.total >= 100)
const rta3 = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

const orders2 = [
    {
        Name: "Nicolas",
        LastName: 'Alberto',
        Age: 1,
    },
    {
        Name: "Aldon",
        LastName: 'Mendoza',
        Age: 2,
    },
    {
        Name: "Piedad",
        LastName: 'Escorcia',
        Age: 3,
    },
    {
        Name: "Luis",
        LastName: 'Perez',
        Age: 4,
    }
  ]
  const rta4 = (query) => {
    return orders2.filter(item => {
        return item.Name.includes(query) || item.LastName.includes(query) || item.Age === query
    })
  }
  console.log(rta4(1));