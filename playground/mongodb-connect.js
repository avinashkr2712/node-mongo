//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//Destuructring
// var user = {name:'Avinash',age:34};
// var {name} = user
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/node-todo-api',(err,client) => {
    if(err)
    {
      return console.log('unable to connect to mongo db');
    }
    console.log('connected to MongoDB Server')
    var db = client.db('node-todo-api');

    // db.collection('ToDos').insertOne({
    //   text:'something to do',
    //   completed:false
    // } ,(err,result) => {
    //   if(err)
    //   {
    //     return console.log('unable to insert todo',err);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined , 2));
    // })

//Insert new doc in to users collection (name age location)
    // db.collection('Users').insertOne({
    //   name:'Avinash Kumar',
    //   age:34,
    //   location:'Bangalore'
    // } ,(err,result) => {
    //   if(err)
    //   {
    //     return console.log('unable to insert user',err);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined , 2));
    //   //console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // })

    client.close();
});
