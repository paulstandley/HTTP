const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
/*
app.get('/', (req, res) => {
  //res.send('<h1>Hello from Express</h1>');
  //res.send(req.header('host'));
  //res.send(req.header('user-agent'));
  res.send(req.body);
});

app.post('/contact', (req, res) => {
  //res.send(req.body);
  if(!req.body.name) {
    return res.status(400).send("Name is required");
  }
  res.status(201).send(`Thank you ${req.body.name}`);
});

app.post('/login', (req, res) => {
  if(!req.header("x-auth-token")) {
    return res.status(400).send('No token');
  }
  if(req.header('x-auth-token') !== '123456') {
    return res.status(401).send('Not authorized');
  }
  res.send('Logged in');
});
*/
/*
app.put('/post/:id', (req, res) => {
// DATABASE STUFF
  res.json({
    id: req.params.id,
    title: req.body.title
  });  
});

app.delete('/post/:id', (req, res) => {
  // DATABASE STUFF
    res.json({ msg: `Post ${req.params.id} deleted` });  
});
*/

app.listen(5000, () => console.log('Server started on 5000'));