
var fs = require('fs')






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



   fs.writeFile('file.txt', lipsum, (err) => {
    if(err){
        console.error(err);
    }
});

   
fs.readFile('file.txt', 'utf8', (err, content)=>{
    if(err){
        console.error(err);
    }
   //tuka se povikuvaat funk
   seven(content);
   letters(content);
   sentences(content);
});


var letters = (str) => {
   var check = /[a-z]/gi;
   var m = str.match(check);
   if (m) {
     console.log("There are " + m.length + " letters in this text.");
   }
}

function seven(str) {
    var strSplit = str.split(' ');
   var bigg =[];
   var less =[];
   var equal = [];
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > 7){
         bigg.push(strSplit[i])
       }
       else if(strSplit[i].length < 7){
        less.push(strSplit[i])
       }
       else {
          equal.push(strSplit[i]);
       }
    }
   console.log(`Total: ${strSplit.length}. More than 7 : ${bigg.length}, less than 7: ${less.length}, equal to 7 : ${equal.length} `)
  }
 



  
  var sentences = (str) => {
   var sentence = str.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
   console.log(`There are ${sentence.length} sentences in this text.`)
};


// function w7(str) {
//     var equ = [];
//     var bigg = [];
//     var less = [];
//     var strSplit = str.split(' ');
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > 7){
//                bigg.push(strSplit[i]);
//             }
   
//         else if(strSplit[i].length < 7){
//             less.push(strSplit[i]);
//         }
//      else{
//              equ.push(strSplit[i]);
//             }
//         }
//    };

//    w7(lipsum);
//    console.log(w7(lipsum));
//    console.log(less);