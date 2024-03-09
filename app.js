const express = require('express');
const app = express();

users = [{
    email : "abc@abc.ca",
    firstName : "ABC",
    id : "5abf6783"
    },
    {
    email : "xyz@xyz.ca",
    firstName: "XYZ",
    id : "5abf674563"
    }]

app.get('/', (req, res) => {
    return res.send(users);
  });
  
  app.post('/add', (req, res) => {
    users = req.body.users;
    return res.send('User added');
  });
  
  app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
  
  app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });
module.exports = app;