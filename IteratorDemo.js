

let ranks = ['A', 'B', 'C'];

//for loop

// for(let i = 0; i < ranks.length; i++)
// {
//     console.log(ranks[i]);
// }

//Issues: its complexity grows when you nest a loop inside another loop. 
//Keeping track of multiple variables inside the loops is error - prone. 

//for..of to eliminate standard loop complexity and avoid errots caused by 
//keeping track of loop indexes. 

// for(let rank of ranks) {
//     console.log(rank);
// }
//shows the true intent of the code. 

//for..of loop has the ability to create a loop over any iterable object not just
//an array. 

//Javascript Iterables and Iterators
//---------------------------------

//JS provides a protocal to iterate over the data structures. 

//Iterable
//Iterator

//Iterable
//--------

//The data structures that have the Symbol.Iterator() method are called iterables. 
//Eg: Arrays, Strings, Sets etc. 

//Iterators
//---------

//An iterator is an object that is returned by thSymbol.Iteratoe r() method. 

// const number = [1, 2, 3];

// for(let n of number[Symbol.iterator]()){
//     console.log(n);
// }

// for(let n of number){
//     console.log(n);
// }

///Javascript .next() method returns the next item in the sequence. 
//.next() method contains two properties: 
//value -> value property can be of any data type and represents the current
//value of the sequence. 

//done -> done property is a boolean value that indicates whether the iteration
//is complete or not. 

// const arr = ['h', 'e', 'l', 'l', 'o'];

// let arrIterator = arr[Symbol.iterator]();

// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());

// const str = "hello";
// const strIterator = str[Symbol.iterator]();

// console.log(strIterator);


//User defined iterator
//--------------------


function displayElements(arr){
    let n = 0;
    return {
        //implementing the next() function

        next(){
            if(n < arr.length){
                return {
                    value: arr[n++],
                    done: false
                }
            }else{
                return {
                value: undefined,
                done: true
                }
            }
        }
    }
}

const arr2 = ['h', 'e', 'l', 'l', 'o'];
//displayElements fun is returning a iterator object. 
const arrIterator2 = displayElements(arr2);

console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());


//For Wednesday Class

//Generators

//you can stop the execution of a function
//continue executing code from a halted position

//Inversion of Control


//For Tomorrow Session
// - Intro to express
// - Routing
// - Regular Expressions
// - Middleware
// - Create a Rest API 

//Prerequisites for next classs

//Revise all that
//Install Postman 

