// This section is what i've learned in javascript 


// Javascript variables

// 3 method which is var , let and Const (constant)

// var example
var name  = "Pedro";
var name = "juan";

console.log(name);

// Let example

let lname = "pedro";
lname = "juan";
console.log(lname);

// Const example

const fname = "Pedro";
// const fname = "juan";
// fname = "juan";
// the const variable can update the varible data.
console.log(fname);



// concatenation Phase 

let me = "Anthony";
let age = "21";
let place = "Caloocan";

// method 1 ES6 update
let intro = `My name is ${me}, I am from ${place} and i am ${age} years old.`;
console.log(intro.toLocaleLowerCase());


// method 2 before 
let introduction = "My name is " + me + " and I am from " + place + " I'm " + age + " years old.";
console.log(introduction.toLocaleUpperCase());


// Array WITH FOR LOOPS
const cars = ["Honda", "Yamaha" , "Suzuki" , "Kawasaki"]; 

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

console.log(cars);


// OBJ LIIERALS 

const person = {
    
    firstname:"Anthony",
    Lastname :"Esquilona",
    age : 21,
    Gender: "male",
    Address: "Caloocan",
    Education: ["Batasan", "BSIT" , "QCU"],
    familyMembers: {
        Father:"Nonoy",
        Mother:"Mila",
        Sister:["Jovie","Joann"]
    }  
};


console.log(person.firstname, person.Lastname);


// ARRAY OBJ LITERALS

const contacts = [
    {
        id: 1,
        fullname: "Pedro Penduko",
        isSaved: "SD Card"
    },
    {
        id:2,
        fullname: "Anthony Esquilona",
        isSaved: "Phone"
    },
    {
        id:3,
        fullname: "Jovie Esquilona",
        isSaved: "Phone"
    },
    {
        id:4,
        fullname: "Joann Esquilona",
        isSaved: "Phone"
    }
]
console.log(contacts[2].fullname)
console.log(contacts);


// loop with obj literals 
// for loop
console.log("");
console.log(`//this code is for loop in Obj literals`);
for (let h = 0; h < contacts.length; h++){
    console.log(contacts[h].fullname);
}

// while loop 
console.log("");
console.log("//Using While loop in Obj Literals");
 
let j = 0 ;
while(j < contacts.length){
    console.log(contacts[j].isSaved);
    j++;
}

// for of loop most efficient way 
console.log("");
console.log("//Using for of loop in Obj Literals");

for(let contact of contacts){
    console.log(contact.fullname);
}

// for Each loop 
console.log("");
console.log("//Using for Each loop in Obj Literals");

contacts.forEach(function(cont){
    console.log(cont.fullname);
});

// Map loop the output is array
console.log("");
console.log("//Using Map loop in Obj Literals with the output of Array");

const contactFullname = contacts.map(function(conts){
    return conts.fullname;
});

console.log(contactFullname);


// LOOP in for loop with array 

const num = [1,2,3,4,5,6,7,8,9,10];

for(let y = 0 ; y <= num.length; y++){
    console.log("");
    console.log(`line of ${y}`);
    

    for(let x=0; x<=10;x++){
        console.log(`${y} * ${x} = `+ y*x)
    }
}

// for Loop

for(let n = 0; n <= 10; n++){
    console.log("");
    console.log(`line of ${n}`);

    for(let p = 0; p <=10 ; p++){
        console.log(`${n} * ${p} = `+ n*p)
    }
}

// for(let x = 0; x <= 5; x++){   
//     console.log(`${num} x ${x} = `+ num*x);
// }

console.log("")
console.log("//This line is even numbers code")
for(let b = 1; b <= 10 ; b++){
    if (b % 2==0){
      
        console.log(b)
    }
}

// while loop tutorial

console.log("");
console.log("//This line is odd numbers code");

let m = 1; 
while(m<=10){
   if (m % 2!=0){
    console.log(m)
   }
    m++;
}


// obj array loop filter 

const student = [
    {
        name: "Trisha",
        age: 18,
        gender: "Female"
    },
    {
        name: "Anthony",
        age:21,
        gender:"male"
    },
    {
        name: "Gozo",
        age: 42,
        gender:"male"
    }
];

const students = student.filter(function(stud){
    return stud.name ;
}).map(function(stude){
    return stude.name;
})

console.log(students);

const studentsJson = JSON.stringify(students);

console.log(studentsJson);


// Conditionals if statements / switch 

const x  = 129 ; 
const y = 142 ; 
const result = x + y ; 


if (result %2!= 0 && result >= 100){
    console.log(`${x} + ${y} = ${result} is odd numbers`);
    console.log("its 3 Digits");
}
else if (result %2!= 0 && result < 100 && result >=10){
    console.log(`${x} + ${y} = ${result} is odd numbers`)
    console.log("its 2 digits  Digits");
}
else if(result %2!=0 && result < 10 && result >= 0){
    console.log(`${x} + ${y} = ${result} is odd numbers`)
    console.log("its 1 Digit");
}
else if (result %2==0 && result >= 100){
    console.log(`${x} + ${y} = ${result} is even numbers`)
    console.log("its 3  Digits");
}
else if (result %2== 0 && result < 100 && result >=10){
    console.log(`${x} + ${y} = ${result} is even numbers`)
    console.log("its 2 Digits");
}
else if(result %2==0 && result < 10 && result >= 0){
    console.log(`${x} + ${y} = ${result} is even numbers`)
    console.log("its 1 Digit");
}
else {
    console.log("error");
}


// switch statement condition 

let day; 

switch(new Date().getDay()){

    case 0:
        day = "Sunday";
        break;

    case 1:
        day = "Monday";
        break;

    case 2:
        day = "Tuesday";
        break;

    case 3: 
        day = "Wednesday";
        break;

    case 4:
        day = "Thursday";
        break;
    
    case 5:
        day = "Friday";
        break;

    case 6:
        day = "Saturday";     
}

console.log(day);

document.getElementById("date").innerHTML = `${Date()} ${day}`
 

