'use strict'

const { response } = require('express');
// Application Dependencies
const express = require('express');
const pg = require('pg');

// Environment variables
require('dotenv').config();

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
// Utilize ExpressJS functionality to parse the body of the request
app.use(express.urlencoded({ extended: true }));
// Specify a directory for static resources
app.use(express.static('./public'));

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);

client.on('error', err => console.error(err));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// API Routes

// TODO: 
// route for getting tasks
app.get('/', getTasks);
// route for getting task by id
app.get('/task/:task_id', getSingleTask);
// route to html form
app.get('/add', showForm);
// route for adding a new task
app.post('/add', addTask);

app.get('*', (req, res) => res.status(404).send('This route does not exist'));

// Database connection and express runtime
client.connect().then(()=>{
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
}).catch( error => console.log(`Could not connect to database\n${error}`));

// HELPER FUNCTIONS

function getTasks(req, res) {
  const sql = 'SELECT * FROM tasks;';
  let tasksResults;
  client.query(sql).then(data =>{
    console.log(data.rows);
    tasksResults = data.rows;
    res.render('index', {tasks: tasksResults});
  });
}

function addTask(req, res){
  // Deconstruction Assignment
  const {title, description, category, contact,status } = req.body;
  const sql = "INSERT INTO tasks (title, contact, status, category, description) VALUES($1,$2,$3,$4,$5);";
  const safeValue = [title, description, category, contact,status];
  client.query(sql,safeValue).then(() => {
    res.status(201).redirect('/');
  });
}

function getSingleTask(req, res) {
  const sql = 'SELECT * FROM tasks WHERE id=$1';
  const safeValues = [req.params.task_id];
  client.query(sql, safeValues).then(data => {
    res.render('pages/detail-view', {
      task: data.rows[0]
    })
  });
}

function showForm(req, res) {
  res.render('pages/add-view')
}