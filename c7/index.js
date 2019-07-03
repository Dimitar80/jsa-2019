// console.log("Zdravo")

var express = require('express');
var students = require('./handlers/students');
var calculator = require('./handlers/calculator');
var api = express();

api.get('/students', students.GetAllStudents);
api.get('/students/:idf', students.GetStudentByID);
api.get('/students/:id/grades/:sub', students.GetStudentSubjectGrades);
// api.post('/students/:id/grades/:sub', students.PostStudentSubjectGrades);


api.get('/calc/:op/:a/:b', calculator.Calculator);
api.get('/calc/:op/:a/:b', calculator.Calculator);


api.listen(8080, (err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started successfully');
});