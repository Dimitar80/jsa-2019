// Node server homeWork


var http = require ('http');

var server = http.createServer(function(req, res){
    console.log(req);
     res.write('Hello World');
     //http://127.0.0.1:4567/add/2/3
    //  /add/2/3

    var URL = req.url.split('/');
    
    
    

    switch(URL[1]){
        case 'add':
            var output = 0;
            if(URL.length > 2){
            for( let i = 2; i < URL.length; i++){
               output += parseInt(URL[i]);
          }
         }
            break;

            case 'sub':
            var output = parseInt(URL[2]);
            if(URL.length > 2){
            for( let i = 3; i < URL.length; i++){
                output = output - parseInt(URL[i]);
          }
         }
            break;
             
            case 'mul':
                var output = 1;
                if(URL.length > 2){
                for( let i = 2; i < URL.length; i++){
                   output *= parseInt(URL[i]);
              }
            }
                break;   
                
                case 'div':
                var output = parseInt(URL[2]);
                if(URL.length > 2){
                for( let i = 3; i < URL.length; i++){
                    output = output / parseInt(URL[i]);
              }
             }
                break;
    }
    res.write(" "+"-" + " Result from " + URL[1] + " is " + output + '');
    res.end();
});

server.listen(8080, (err) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started successfully');
});






