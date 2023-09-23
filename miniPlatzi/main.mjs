class Student {
    constructor ({
        name,
        username,
        facebook =undefined,
        instagram =undefined,
        learningPath = [],
    }) {
        this.name = name
        this.username = username
        this.socialMedia = {
            facebook,
            instagram
        }
        this.learningPath = learningPath
    }
}
class Classes {
    constructor ({classes}){
        this._classes = classes
    }
    get classes () {
        return this._classes
    }
    set classes ({classes}){
        this._classes = classes
    }
}
export class Courses {
    constructor ({
        name,
        classes = []
    })  {
        this._name = name
        this.classes = classes
    }
    get name () {
        return this._name
    }
    set name (newName){
        if(newName){
            this._name = newName
        }else{console.warn('no puede ser vacio')}
    }
}
export class LearningPath { 
    constructor ({
        name,
        courses = []
    }) {
        this.name = name
        this.courses = courses
    }
    newCourses ({
        courses = []
    }) {
        this.courses.push(courses)
    }
    removeCourses ({
        rcourses = []
    }) {
        RemoveCourse(rcourses,this.courses)
    }
}
function RemoveCourse (removecourse,courses) {
    console.log({removecourse,
    courses});
    const pos = courses.findIndex(curso => curso.name === removecourse.name)
        console.log({pos});
        courses.splice(pos,1)
}
export const clase1 = new Classes ({classes: 'clase del curso1'})
export const clase2 = new Classes ({classes: 'clase del curso2'})
export const clase3 = new Classes ({classes: 'clase del curso3'})
export const curso1 = new Courses ({name: 'curso de curso1',classes: [clase1]})
export const curso2 = new Courses ({name: 'curso de curso2',classes: [clase2]})
export const curso3 = new Courses ({name: 'curso de curso3',classes: [clase3]})
export const path1 = new LearningPath ({
    name: 'Escuela de desarrollo web 1',
    courses: [curso1,curso2,curso3]
})
export const path2 = new LearningPath ({
    name: 'Escuela de desarrollo web 2',
    courses: [curso2]
})
export const path3 = new LearningPath ({
    name: 'Escuela de desarrollo web 3',
    courses: [curso3]
})
const Aldon = new Student ({
    name: 'Aldon',
    username: 'scargg',
    facebook: 'aldonmendoza@facebook',
    learningPath: [path2,path3]
})