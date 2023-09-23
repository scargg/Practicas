const name = document.querySelector('.firsName')
const age = document.querySelector('.age')
const phoneNumber = document.querySelector('.phoneNumber')
const text = document.querySelector('.text')
const button = document.querySelector('#send')

var arr = []

const who = document.querySelector('.who')
const see = document.querySelector('#leet-me-see')
const aboutStranger = document.querySelector('.aboutStranger')

button.addEventListener('click', newStudent)

function Student (name,age,phoneNumber) {
    this.name = name
    this.age = age
    this.phoneNumber = phoneNumber
}

function newStudent () {
    const studentName = name.value
    const studentAge = age.value
    const studentPhoneNumber = phoneNumber.value
    console.log({
        studentName,
        studentAge,
        studentPhoneNumber
    });
    arr.push(new Student (studentName,studentAge,studentPhoneNumber))
}

see.addEventListener('click',strangerInfo)

function   strangerInfo () {
    const whoIs = who.value
    const aboutwhoIs = arr.find(item => item.name == whoIs)
    if (aboutwhoIs) {
        console.log(aboutwhoIs);
        aboutStranger.innerText = 'EL extraño se llama: '+aboutwhoIs.name + ' y tiene ' + aboutwhoIs.age+ ' años'
    }else{
        aboutStranger.innerText = 'El extraño no está registrado'
    }
}

/*
asi podriamos buscar a algun estudiante dentro de el array
usando el metodo FIND

arr.find(item => item.name == 'Algun Nombre')

*/