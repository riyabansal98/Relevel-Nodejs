//users array
let users = [
  5, 6, 7
];

users.push(8);
console.log(users);
const id = 2;

//helper(1)
//helper(2)
//helper(3)
function helper(id) { //id => 5, 6, 7
   
    if(id != 2) { 
        //return true means keep the id in the array. 
        return true;
    }
    //return false means remove that id from the array. 
    return false;
}
//Use case: remove the user with id 2.
//It will iterate over all the elements of user array and call helper function for
//each one of them. 
console.log(users.filter(helper));


