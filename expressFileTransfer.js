const expressJS = require('express');
const bodyParser = require('body-parser');
const expressApp = expressJS();
//database
let users = [
    {"id": "1", "name": "Tushar Raina", "email": "rainatushar22@gmail.com"},
    {"id": "2", "name": "Sachin Tendulkar", "email": "sachin112@gmail.com"}
];
expressApp.use(bodyParser.urlencoded({extended: false})); //middleware for parsing bodies
//the URL. 
//between parsing the URL encoded data with the querystring library (false)
//qs library (true)
expressApp.use(bodyParser.json()); //parsing json objects. 

expressApp.get('/users', (request, response) => {
    response.json(users).status(200);
});
expressApp.delete('/user/:id', (req, res) => {
    const id = req.params.id; //id to be deleted sent by the user
    users = users.filter(user => {
        if(user.id != id) {
            return true;
        }
        return false;
    });
    res.send('User is deleted').status(200);
});
expressApp.post('/user', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send('User is added to the database').status(200);
});

expressApp.listen(3000, 
    () => console.log('Listening on port 3000'));

 //Get 
 //Post
 //Get
 //Delete
 //Post
 //Get   