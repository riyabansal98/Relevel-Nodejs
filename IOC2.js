//filterFunction -> callback function
function filter(array, filterFunction){

    let newArray = [];

    for(let index = 0; index < array.length; index++){

        const element = array[index];
        
        if(filterFunction(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}
const array = [0, 1, undefined, 2, null, 3, 'four', ''];
//User is asking to filter out null and undefined. 
console.log(filter(array, el => el != null && el != undefined));
console.log(filter(array, el => el != null));
console.log(filter(array, el => el != null && el != undefined && el != 0));

