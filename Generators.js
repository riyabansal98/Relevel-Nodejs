
// function* simpleGenerator() {
//     yield 1
//     yield 2
//     yield 3
// }

// //* Purpose of Asterik -> Telling javascript that whatever function is written is a generator function 
// //yield as a return type and yield is specific to generator function. 

// const generatorObject = simpleGenerator();
// const generatorObject2 = simpleGenerator(); 
// //console.log(generatorObject);
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject2.next());
// console.log(generatorObject2.next());
// console.log(generatorObject.next());

//Use cases
//1. Infinite loops

//89, 90, ...... 107, 108

function* generateId(){

    let id = 1;

    while(true) {

        const increment = yield id;
        if(increment != null) {
            id += increment;
        }else{
            id++;
        }
    }
}

const generatorObject = generateId();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.throw(new Error("Hi")));
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());

// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());

//Iterators

function* generator(array){

    for(let i = 0; i < array.length; i++){
        yield array[i];
    }
}

const generatorObj = generator([1, 3, 4]);
// console.log(generatorObj.next());
// console.log(generatorObj.next());
// console.log(generatorObj.next());