const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/node-todo-api',(err,client) => {
    if(err)
    {
      return console.log('unable to connect to mongo db');
    }
    console.log('connected to MongoDB Server')
    var db = client.db('node-todo-api');

    // db.collection('ToDos').find().toArray().then((docs) => {
    //   console.log('ToDos');
    //   console.log(JSON.stringify(docs,undefined,2));
    // },(err) => {
    //   console.log('unableto fetch ToDos',err);
    // })

    db.collection('ToDos').find().count().then((count) => {
      console.log('ToDos');
      console.log(`Count is ${count}`);
    },(err) => {
      console.log('unableto fetch ToDos',err);
    })

    //client.close();
});
