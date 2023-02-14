" use strict";


// let stu1={
//     name: "Konul",
//     surname: "Ibrahimova",
//     email: "konul@gmail.com",
//     phones:[5345,658577],
//     education:{
//         name: ["Programing", "Digital marketing"]
//     }
// }




// stu1.address ="Neftciler";

// console.log(stu1.address);


// for (const key in stu1) {

//     console.log(key + "/" +stu1[key]);
// }


// let user =[];

// user.name = "Pervin"

// console.log(user.name);

// for (const item of stu1.phones) {
//     console.log(item);
// }


// console.log(stu1.education.name );


// let stu1 = {
//     id: 1,
//     name: "Eli",
//     surname: "Talibov",
//     address: "Xetai"
// }

// let stu2 = {
//     id: 2,
//     name: "Aqsin",
//     surname: "Hummatov",
//     address: "Xirdalan"
// }
// let stu3 = {
//     id: 3,
//     name: "Elcan",
//     surname: "Talibov",
//     address: "Xetai"
// }
// let stu4 = {
//     id: 4,
//     name: "Shaqi",
//     surname: "Kazimov",
//     address: "Bulbule"
// }



// let group = {
//     name: "P135",
//     capacity: 3,
//     students: [],
//     addStudent: function (student) {

//         let stu = this.students.find(s => s.id == student.id)

//         if (stu != undefined) {
//             console.log("Student already exist");
//             return;
//         }

//         if (this.students.length == this.capacity) {
//             console.log("Group alredy filled");
//             return;
//         }

//         this.students.push(student)



//     },


//     updateStudent: function (student) {
//         let stu = this.students.find(s => s.id == student.id)

//         if (stu != undefined) {

//             stu.address = address;

//         }

//     },


//     getStduents: function () {

//         // for (const item of this.students) {
//         //     console.log(`${item.name} ${item.surname} ${item.address}`);
//         // }

//         return this.students
//     }




// }

// group.addStudent(stu1)
// group.addStudent(stu2)
// group.addStudent(stu3)
// group.addStudent(stu4)


// let datas = group.getStduents()

// getStud entsDatas(datas);



// function getStudentsDatas(arr) {

//     for (const item of arr) {
//         console.log(`${item.name} ${item.surname} ${item.address}`);
//     }
// }


// let updatedStudent = {
//     id: 5,
//     address: "Ehmedli"
// }


// group.updateStudent(updateStudent);


// let datas = group.getStduents()

// getStudentsDatas(datas);


let user = {
    name: "Elcan",
    company: {
        name: "Code Academy",
        rooms: [

            {
                name: "Yupiter",
                capacity: 15,
                computers: ["HP", "Apple", "Acer"]
            },
            {
                name: "Saturn",
                capacity: 10
            }

        ]


    }
}


// function getRoomCapacityByUser(user) {
//     let rooms = user.compant.rooms;

//     let computers = [];

//     for (const room of rooms) {
//         if (room.name == "Yupiter") {
//             computers = room.computers;
//         }

//     }

//     for (const  computer of computers) {

//         console.log(computer);
//     }

// }

// console.log(getRoomCapacityByUser(user));



// function getRoomComputers(user) {
//     let rooms = user.compant.rooms;



//     for (const room of rooms) {
//         if (room.name == "Yupiter") {
//              return room.computers;
//         }

//     }



// }

// console.log(getRoomComputers(user));


// class Car {
//     constructor(name,speed){
//         this.name=name;
//         this.speed=speed;
//     }

//     showCarData(color){
//         return this.name + " "+ this.speed +"-" + color;
//     }


// }

// let car1 = new Car("Bmw",500);


// console.log(car1.showCarData("red"));


// class Animal {
//     constructor(name, sound) {
//         this.name = name;
//         this.sound = sound;

//     }
// }

// class Cat extends Animal{
//     constructor(color,name,sound){
//         super(name,sound)
//         this.color =color;
//     }
    
// }


// let cat1 = new Cat("Black");

// let animal1 = new Animal("Cat","Myaouuu")




// console.log();

// cat1.name ="Luis";



// let nums = [1,2,3,5];


// Array.prototype.konul() = function() {
    
//     console.log("Hello Konul");
// }

// nums.konul();



// String.prototype.p135 = "Ugurlar";

// let name ="Shaiq";

// console.log(name.p135);

// String.prototype.getStr= function(str) {
    
//     console.log(str);
// }

// let name ="Shaiq";

// name.getStr("Hello")