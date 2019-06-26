// Node server homeWork


var http = require ('http');

var server = http.createServer(function(req, res){
    console.log(req);
     res.write('Hello World');
     //http://127.0.0.1:4567/add/2/3
    //  /add/2/3

    var URL = req.url.split('/');
    var output = 0;
    var opm = 1;
    var d = parseInt(URL[2]);

    switch(URL[1]){
        case 'add':
            if(URL.length > 2){
            for( let i = 2; i < URL.length; i++){
               output += parseInt(URL[i]);
          }
          res.write(" " + output + '');
         
        }
            break;

            case 'sub':
            if(URL.length > 2){
            for( let i = 3; i < URL.length; i++){
                d = d - parseInt(URL[i]);
          }
          res.write(" " + d + '');
          
        }
            break;
             
            case 'mul':
                if(URL.length > 2){
                for( let i = 2; i < URL.length; i++){
                   opm *= parseInt(URL[i]);
              }
              res.write(" " + opm + '');
              
            }
                break;   
                
                case 'div':
                if(URL.length > 2){
                for( let i = 3; i < URL.length; i++){
                    d = d / parseInt(URL[i]);
              }
              res.write(" " + d + '');
              
            }
                break;
    }
    res.end();
});

server.listen(8080, (err) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started successfully');
});






