

var GetAllStudents = (req, res) =>{
    res.send('Hello from / students');
};

var GetStudentByID = (req, res) => {
    res.send('Get single student with id:' + req.params.idf);
};

var GetStudentSubjectGrades = (req, res) => {
    res.send('Get single student with id: ' + req.params.id + 'grades for subject: ' + req.params.sub);
};

module.exports = {
    GetAllStudents,
    GetStudentByID,
    GetStudentSubjectGrades

};