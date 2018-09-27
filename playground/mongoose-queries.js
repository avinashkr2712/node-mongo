const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5bac9c7566a1635c83e1d788';


Todo.find({
  _id:id
}).then((todos) => {
  console.log('Todos',todos);
})

Todo.findOne({
  _id:id
}).then((todo) => {
  console.log('Todo',todo);
})

Todo.findById(id).then((todo) => {
  if(!todo)
  {
    return console.log('id not found');
  }
  console.log('Todo',todo);
})
