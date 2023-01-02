import React from 'react';
import Head from 'next/head';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  // Get the email and password from the request body
  const { email, password } = req.body;

  // Find a user with the matching email and password
  User.findOne({ email: email, password: password }, (error, user) => {
    if (error) {
      // If there is an error, send an error response
      res.send({ success: false, error: error });
    } else if (user) {
      // If the email and password match a valid account, send a success response
      res.send({ success: true });
    } else {
      // If the email and password do not match a valid account, send an error response
      res.send({ success: false, error: 'Invalid email or password' });
    }
  });
});

const Layout = (props) => (
  <div>
    <Head>
      <title>My App</title>
      <link rel="stylesheet" href="/static/css/style.css" />
    </Head>
    {props.children}
  </div>
);

export default Layout;

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
