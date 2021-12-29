
//implement a filter for an array function which only passes the numbers. 
//function -> pass an array, filter out the unwanted values. 

//array = [1, 2, 3, a, undefined, c, ' ']
// return -> [1, 2, 3, a, c]
//Java, C++ => Arrays are hoo
function filter(
    array,
    {
        filterNull = true, //true means should be removed. 
        filterUndefined = true,
        filterZero = false,
        filterEmptyString = false,
    } = {},
    ) {

    let newArray = []; 

    for(let index = 0; index < array.length; index++){

        const element = array[index];
      
        if(
            (filterNull && element === null) ||
            (filterUndefined && element === undefined) || 
            (filterZero && element === 0) ||
            (filterEmptyString && element === '') 
        ) {
            continue;
        }
        newArray.push(element);
    }
    return newArray;
}

const array = [0, 1, undefined, 2, null, 3, 'four', ''];

console.log(filter(array));
//[0, 1, 2, 3, 'four', '']  
console.log(filter(array, {filterNull :false})); 
//filterNull -> false, filterUndefined -> true, filterZero = false, filterEmptyString = false,
//[0, 1, 2, null, 3, 'four', '']
console.log(filter(array, {filterUndefined: false}));
//filterNull -> true, filterUndefined -> false, filterZero = false, filterEmptyString = false
//[0, 1, undefined, 2, 3, 'four', '']
console.log(filter(array, {filterZero: true}));
//filterNull -> true, filterUndefined -> true, filterZero = true, filterEmptyString = false
//[1, 2, 3, 'four', '']
console.log(filter(array, {filterEmptyString: true}));

//[0 1 2 3 'four']

//Abstract Equality Comparision Algorithm

//compare x and y (x == y)
//Type(x) = number
//Type(y) = string
//ToNumber(y); 
//x == ToNumber(y);
//'' => 0