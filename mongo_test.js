const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
  console.log('Connected!');

  // database Name
  const dbName = 'myproject';
  const db = client.db(dbName);

  // new user
  var name = 'user' + Math.floor(Math.random()*10000);
  var email = name + '@mit.edu';
  var balance = Math.floor(Math.random()*10000);

  // insert into customer table
  var collection = db.collection('customers');
  var doc = {name, email, balance};
  collection.insertOne(doc, {w:1}, function(err, result){
    console.log('Document insert');
  });

  // update balance for the newly inserted customer
  collection.updateOne(
    { name: name }, // filter object - find the customer by name
    { $set: { balance: 100 } } // update object - set the balance to 100
  );

  // find the newly inserted customer by name
  collection.findOne({ name: name }, function(err, customer) {
    if (err) throw err;

    // show the balance for the customer
    console.log(customer.balance);

    // clean up
    client.close();
  });
});
