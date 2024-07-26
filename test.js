
class Human {
    constructor(name) {
        this.name = name;
        this.legs = true;
        this.arms = true
    }
}


class Student extends Human {
    constructor(name, age, roll) {
        super();
        this.name = name;
        this.age = age;
        this.roll = roll;
    }
}

const student1 = new Student('sheikh', 20, 100);

console.log(student1);