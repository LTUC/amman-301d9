'use strict'

const { response } = require('express');
// Application Dependencies
const express = require('express');
const pg = require('pg');
const methodOverride = require('method-override');

// Environment variables
require('dotenv').config();

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
// Utilize ExpressJS functionality to parse the body of the request
app.use(express.urlencoded({ extended: true }));
// Application Middleware override
app.use(methodOverride('_method'));
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
// route for updating 
app.put('/task/:task_id', updateTask);
// route for deleting 
app.delete('/task/delete/:task_id', deleteTask);

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
    tasksResults = data.rows;
    res.render('index', {tasks: tasksResults});
  });
}

function addTask(req, res){
  // Deconstruction Assignment
  const {title, description, category, contact,status } = req.body;
  const sql = "INSERT INTO tasks (title, contact, status, category, description) VALUES($1,$2,$3,$4,$5) RETURNING *;";
  const safeValue = [title, description, category, contact,status];
  client.query(sql,safeValue).then(data => {
    const taskId = data.rows[0].id;
    res.status(201).redirect(`/task/${taskId}`);
  }).catch(error=>{
    console.log(error);
    res.redirect('/');
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

function updateTask(req, res){
  // destructure var
  const taskId = req.params.task_id;
  const {title, description, category, contact,status } = req.body;
  // create an sql update query
  const sql = 'UPDATE tasks SET title=$1,description=$2, category=$3, contact=$4,status=$5 WHERE id=$6 ;';
  const safeValus = [title, description, category, contact,status, taskId];
  // execute using the client query
  client.query(sql,safeValus).then(()=>{
    res.redirect(`/task/${taskId}`)
  });
  // redirect the user the same page as they are in 
}

function deleteTask(req, res){
  const taskId = req.params.task_id;
  const sql = 'DELETE FROM tasks WHERE id=$1';
  client.query(sql, [taskId]).then(()=>{
    res.redirect('/');
  });
}

function showForm(req, res) {
  res.render('pages/add-view')
}