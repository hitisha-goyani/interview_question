

// shallow copy - its not create new storage its work to reference
    
//deep cooy - its a create new storage as per data storage 

// let obj = {
//     name : "amite",
//     age :20, 
  
// }

// // let obj2 = obj; shallow copy

// let obj2 = {...obj}


// obj2.age = 200;


// console.log(obj.age)
// console.log(obj2.age)


let arr = [
    {
        name: "alisha",
        age : 10
    },
    {
        name: "alisha",
        age : 10
    },
    {
        name: "alisha",
        age : 10
    },
]

let arr2 = [...arr]

arr2[0].age = 20;



let obj = {
    name : "amite",
    age :20, 
    data:{
            marks: 100
        }
}

let obj2 = {...obj};

obj2.data.marks = 200;

console.log(obj.data.marks)
console.log(obj2.data.marks)


let newObj = JSON.parse(JSON.stringify(obj))

newObj.data.marks = 999;

console.log(newObj.data.marks)
console.log(obj.data.marks)