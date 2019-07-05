// console.log("Zdravo")

var express = require('express');
var bodyParser = require('body-parser');
var students = require('./handlers/students');
var calculator = require('./handlers/calculator');
var food = require('./handlers/food');

var api = express();
api.use(bodyParser.json());
api.use(express.static('www'));


api.get('/students', students.GetAllStudents);
api.get('/students/:idf', students.GetStudentByID);
api.get('/students/:id/grades/:sub', students.GetStudentSubjectGrades);
// api.post('/students/:id/grades/:sub', students.PostStudentSubjectGrades);


api.get('/calc/:op/:a/:b', calculator.Calculator);

api.get('/food', food.GetAllFood);
api.get('/food/:id', food.GetSingleFood);
api.post('/food', food.CreateNewFood);
api.put('/food/:id', food.UpdateFood);
api.patch('/food/:id', food.PartialUpdateFood);
api.delete('/food/:id', food.DeleteFood);


api.listen(8080, (err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started successfully');
});

var string1 = "";  //var string1 = 0;
var object1 = {a: 1, b: 2, c: 3};

for (var property1 in object1) {
  string1 += object1[property1];
  console.log(string1);
}

console.log(string1);


