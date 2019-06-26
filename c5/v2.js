
var routes = {
    get: [
        {route: '/students', func: getAllStudents},
        {route: '/students/:id', funct: getStudent}
    ],
    post: [
        {route: '/students', func: storeStudent}
    ],
    put: [

    ],
    patch: [

    ],
    delete: [

    ],
};

var getAllStudents = () => {};

var getStudent = () => {};

var storeStudent = () => {};

var deleteStudent = () => {};

var updateStudent = () => {};

var patchStudent = () => {};


req.method = "get"
GET /students/23

if(routes[req.method][0].route == req.url){
   routes[req.method][0].funct();
}


'/students/:id'

/\/students\/([a-zA-Z0-9\-])/
