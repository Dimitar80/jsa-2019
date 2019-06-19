
var fs = require('fs')


// fs.writeFile('test.txt', 'Node.js is the best', (err) => {
//     if(err){
//         console.error(err);
//     }
// });


fs.readFile('test.txt', 'utf8', (err, data)=>{
    if(err){
        // console.log(err);
        console.error(err);
    }
    console.log(err);
    console.log(data);
});


// Callback f-ii
// var pero = (cb) => {
//     var sum = 0;
//     for(var i = 0; i < 100; i++){
//         sum +=i;
//     }
//     cb(sum);
//     pero((sum) =>{
//         console.log(sum);
//     });
// }

// var log = (num) => {
//   console.log(num);
// }

// pero(log);



// pero((s) =>{
//     console.log(s);
// });
//  




// var pero = () => {
//     var sum = 0;
//     for(var i = 0; i < 100; i++){
//         sum +=i;
//     }
//     return sum;
// }

//  var o = pero();