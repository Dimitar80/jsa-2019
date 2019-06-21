
var fs = require('fs')


// fs.writeFile('test.txt', 'Node.js is the best', (err) => {
//     if(err){
//         console.error(err);
//     }
// });

   



// fs.readFile('test.txt', 'utf8', (err, data)=>{
//     if(err){
//         // console.log(err);
//         console.error(err);
//     }
//     console.log(err);
//     console.log(data);
// });





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




// fs.writeFile('test.txt', 'Hello World!', function (err) { 
//                         if (err)
//         console.log(err);
//                         else
//         console.log('Write operation complete.');
// });




// homework2

var lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in sem ante. 
Morbi vulputate, lorem ac pulvinar porttitor, enim nunc tempus diam, et fermentum odio purus ac justo.
 Cras fringilla nulla in consequat placerat. Donec sollicitudin orci elit, ut dapibus purus mollis egestas.
  Suspendisse ultricies nec massa vitae mollis. In diam odio, convallis vitae pharetra ut, rhoncus eget purus.
   Etiam molestie eros at massa euismod suscipit. Nam congue ex vulputate tincidunt suscipit. 
   Pellentesque mattis tincidunt orci, in pellentesque nisl consectetur a. Mauris at placerat lacus.
    Phasellus fermentum commodo tellus, in posuere orci elementum interdum. Nunc quis consectetur libero.
     Vivamus eu purus vitae tortor vestibulum blandit eu sed metus. 
     Curabitur porta ultrices lectus, sed venenatis urna finibus eu.
      Curabitur congue pulvinar elit, in viverra orci egestas eu.

Curabitur consequat faucibus tellus nec eleifend. Suspendisse euismod placerat metus.
 Duis sit amet ornare sapien. Mauris est ex, pulvinar a egestas vel, pulvinar eu orci. 
 Praesent nec lacus volutpat diam commodo suscipit ut eu ex. Suspendisse eu laoreet augue.
  Vestibulum tortor mi, ultrices sit amet tempus nec, dignissim eu sem. Pellentesque in convallis lorem.
   Aliquam in quam eu elit mollis egestas.

Etiam non varius ligula. Praesent finibus dui elit.
 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti.
  Proin sit amet aliquet dui. Fusce non dui sit amet eros efficitur pulvinar ut at orci.
   Pellentesque vitae consequat elit, eget mattis leo. 
   Sed gravida urna efficitur, aliquam urna at, porta nisi. Sed eu ipsum libero
   . Phasellus rutrum nisi risus, eget maximus purus accumsan sit amet. 
   Pellentesque diam purus, rhoncus ut mi in, mollis aliquet orci. 
   Quisque a erat non odio sagittis blandit non in ligula. Donec vitae odio elit.
    Suspendisse fringilla dapibus feugiat. Proin in venenatis dui. Nullam sed accumsan ante.

Mauris sit amet scelerisque arcu. Integer dictum ultricies sodales. 
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
Nam sagittis convallis mi, vitae faucibus diam blandit sed. 
Vestibulum ac faucibus est. Ut lacus metus, sollicitudin luctus ligula vitae, feugiat facilisis neque.
 In ac pellentesque neque. Quisque purus tortor, cursus eu metus et, dapibus tempus ipsum. 
 Cras id eros euismod ante molestie porttitor nec a leo. 
 Nunc leo orci, facilisis sit amet laoreet eget, rhoncus nec lorem. 
 Cras semper nisl vel dui ornare, quis vulputate lorem dictum. 
 Phasellus blandit mi elit, sit amet pretium elit lobortis finibus.

Sed a odio vel mi volutpat ultricies eu sed elit. Donec auctor augue eu dapibus fermentum.
 Ut consectetur lacus eros, et lobortis quam finibus ac.
  Aenean iaculis risus lorem, sit amet egestas libero luctus at. 
  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat vitae lectus vitae congue. 
   Fusce at felis sit amet risus volutpat iaculis non id nisi. Sed id congue felis.`;

// fs.writeFile('homework2.txt', lipsum, (err) => {
//     if(err){
//         console.error(err);
//     }
// });

   
// fs.readFile('homework2.txt', 'utf8', (err, lipsum)=>{
//     if(err){
//         // console.log(err);
//         console.error(err);
//     }
//     console.log(err);
//     console.log(lipsum);
// });


// console.log("Words 7 letters");

// function seven(str) {
//     var strSplit = str.split(' ');
//     // console.log(strSplit);
//    var bigg =[];
//    var less =[];
//     // var br = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > 7){
//          bigg.push(strSplit[i].length)
//        }
//        else if(strSplit[i].length < 7){
//         less.push(strSplit[i].length)
//        }
//     }
//     return strSplit;
//   }
 
//   seven(lipsum);
//   console.log(seven(lipsum));
//   console.log(lipsum(bigg));
//   console.log(lipsum(less));
  

// function w7(str) {
//     var equ = [];
//     var bigg = [];
//     var less = [];
//     var strSplit = str.split(' ');
//     // console.log(strSplit);
//      var br = 0;
//     for(var i = 0; i < strSplit.length; i++){
        
//       if(strSplit[i].length > 7){
//                bigg.push(strSplit[i].length);
//                b ++
//       }   
//       else if(strSplit[i].length < 7){
//             less.push(strSplit[i].length);
//             b ++
//       }
//         else (strSplit[i].length === 7);{
//              equ.push(strSplit[i].length);
//              b ++
//         };
//          };
//       return b ++;     
// };
  
//  w7(lipsum);
//  console.log(w7(lipsum));
//  console.log(w7(bigg));
//  console.log(less);
//  console.log(equ);



  



 //   console.log(" ");

console.log("Words with more than 7 letters");

function w7(str) {
    var bigg = [];
    var strSplit = str.split(' ');
    // console.log(strSplit);
     var br = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > 7){
        return br ++;
           };
            if(strSplit[i].length < 7){
              return  br ++; 
          };
    };
      return strSplit;     
};
  
 w7(lipsum);
 console.log(w7(lipsum));
//  console.log(w7(bigg));
 

 
  








// console.log(" ");

// console.log("Letters");
// var s = lipsum;
// var rx = /[a-z]/gi;
// var m = s.match(rx);
// if (m) {
//  console.log(m.length);
// }


// console.log(" ");

// console.log("Words");
// function WordCount(str) { 
//     return str.split(" ").length;
//   }
  
//   console.log(WordCount(lipsum));







