const numbers = [25,35,40,15,8]
const rta = numbers.every(item => item <= 40)

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const rta2 = team.every(item => item.age < 15)
  console.log(rta2);