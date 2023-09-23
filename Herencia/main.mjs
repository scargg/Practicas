class LearningPaths {
    constructor ({
        name,
        isfree = false
    }) {
        this._name = name
        this._isfree = isfree
    } 

    get name () {
        return this._name
    }

    set name (newName) {
        this._name = newName
    }
}

class Student {
    constructor ({
        name,
        facebook = undefined,
        instagram = undefined,
        studenType = 'FREE',
        learningPaths = []
    }){
        this._name = name
        this._socialMedia = {
            facebook,
            instagram
        }
        this._learningPaths = learningPaths
        this._studenType = studenType
    }
    get name () {
        return this._name
    }
    get type () {
        return this._studenType
    }
    get socialMedia () {
        return this._socialMedia
    }
    get learningPaths () {
        return this._learningPaths
    }

    set type (newType) {
        this._studenType = newType
    }

    set name (newName) {
        if (typeof(newName) === 'string'){
            if (newName.length != 0){
                this._name = newName
            }
        }else{
            console.warn('Ingrese un nombre valido');
        }
    }

    set socialMedia ({
        facebook,
        instagram
    }) {
        this.facebook = facebook
        this.instagram = instagram
    }

    set learningPaths (newPath) {
        this._learningPaths.push(newPath)
    }
}


class freeStudent extends Student{
    constructor (props) {
        super(props)
    }
    learningPaths (newPath) {
        if (newPath._isfree){
            this._learningPaths.push(newPath)
        }else{console.warn('El path no es gratis');}
    }
}

class expertStudent extends Student{
    constructor (props) {
        super(props)
    }
    learningPaths (newPath) {
        this._learningPaths.push(newPath)
    }
}

export const freePath = new LearningPaths ({
    name: 'Path FREE',
    isfree: true
})

const expertPath = new LearningPaths ({
    name: 'Path expert',
})

export const Aldon = new freeStudent ({
    name: 'Aldon'
})

const Luis = new expertStudent ({
    name: 'Luis'
})

Luis.type = 'EXPERT'

Aldon.learningPaths(expertPath)
Aldon.learningPaths(freePath)
console.log(Aldon); 