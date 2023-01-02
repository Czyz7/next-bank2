const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
  const express = require('express')
const app = express()

// set up other middleware and routes here

// import the login route handler
const loginRouter = require('./login')

// use the login route handler as middleware
app.use('/api', loginRouter)

app.listen(3000, () => {
  console.log('Express server listening on port 3000')
})
