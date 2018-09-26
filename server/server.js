var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res) => {
    var todo = new Todo({
      text:req.body.text
    });

    todo.save().then((doc) => {
      res.send(doc);
    },(e) => {
      res.status(400).send(e);
    });


});

app.listen(3000 , () => {
  console.log('Server started on 3000');
});



// var newTodo = new Todo({
//   text:'  Edit this video    '
// });
//
// newTodo.save().then((doc) => {
//   console.log('saved Todo',doc);
// },(e) => {
//   console.log('unable to save Todo');
// });

// var newUser = new User({
//   email:'  avinashkr2712@gmail.com    '
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc,undefined,2));
// },(e) => {
//   console.log('unable to save User');
// });
