

// var students = [
//     {ime:"Cvetan", prezime:"Cvetkov", prosek: 8.27},
//     {ime:"Blagoja", prezime:"Spasevski", prosek: 9.20},
//     {ime:"Ivana", prezime:"Janeva", prosek: 7.60},
//     {ime:"Jane", prezime:"Mankovski", prosek: 8.80},
//     {ime:"Maja", prezime:"Desoska", prosek: 7.70},
//     {ime:"Ana", prezime:"Veleva", prosek: 8.90},
//     {ime:"Marko", prezime:"Terzievski", prosek: 8.65},
//     ]

//     // var nova = [
//     //   {ime:"Dejan", prezime:"Cvetov", prosek: 8.27},
//     //   {ime:"Boban", prezime:"Acev", prosek: 9.20},
//     //   {ime:"Ana", prezime:"Kocev", prosek: 7.60},
//     //   ]


  
//     function studentsDetails(s) {
//         console.log(s);
        
//     var sorted = s.sort((a, b) => a.prosek - b.prosek);
//         console.log(sorted);

//     console.log(`Student so najnizok prosek ${sorted[0].ime} ${sorted[0].prezime}
//         so prosek ${sorted[0].prosek}`);

//         console.log(`Student so najnizok prosek ${sorted[sorted.length -1].ime} ${sorted[sorted.length -1].prezime}
//         so prosek ${sorted[sorted.length -1].prosek}`);

//         var avg = sorted.map((v) => v.prosek).reduce((a,b)=>a+b) / sorted.length;
//         console.log(`Sreden prosek na generacijata e ${avg}`);
//   }

//   studentsDetails(students);

//   var str = "Hello, World";
//   var l = str;
//   console.log(l); 


  // function homework2Details(s) {
//         console.log(s);
        
//     var sorted = s.sort((a, b) => a.prosek - b.prosek);
//         console.log(sorted);

//     console.log(`Student so najnizok prosek ${sorted[0].ime} ${sorted[0].prezime}
//         so prosek ${sorted[0].prosek}`);

//         console.log(`Student so najnizok prosek ${sorted[sorted.length -1].ime} ${sorted[sorted.length -1].prezime}
//         so prosek ${sorted[sorted.length -1].prosek}`);

//         var avg = sorted.map((v) => v.prosek).reduce((a,b)=>a+b) / sorted.length;
//         console.log(`Sreden prosek na generacijata e ${avg}`);
//   }

//   studentsDetails(students);


// console.log(" ");

// console.log("Words with more than 7 letters");
// function moreThen7(str) {
//     var strSplit = str.split(' ');
//     // console.log(strSplit);
   
//     var br = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > 7;){
//          br ++;
//          //   console.log(strSplit[i].length);
//        }
//     }
//     return br ++;
//   }
 
//   moreThen7(lipsum);
//   console.log(moreThen7(lipsum));





//   console.log(" ");

//   console.log("Words with more than 7 letters");
//   function moreThen7(str) {
//       var strSplit = str.split(' ');
//       // console.log(strSplit);
//       var longestWord = 7;
//       var br = 0;
//       for(var i = 0; i < strSplit.length; i++){
//         if(strSplit[i].length > longestWord){
//            br ++;
//           }
//           // else if(strSplit[i].length < longestWord){
//           //     br ++;
//           //    }
//       }
//       return br ++;
//     }
   
//     moreThen7(lipsum);
//     console.log(moreThen7(lipsum));


var lib = [{author:"J. R. R. Tolkien", book:"The Lord of the Rings: The Fellowship of the Ring", read:"True"},
           {author:"Michelle Obama", book:"Becoming", read:"True"},
           {author:"Mark Manson", book:"The Subtle Art of Not Giving a F*ck", read:"False"},
           {author:"Leo Tolstoy", book:"War and Peace", read:"True"},
           {author:"Toni Morrison", book:"Song of Solomon", read:"False"},
           {author:"James Joyce", book:"Ulysses", read:"True"},];


        //    console.log(lib);

           var read = [];
    var notRead = [];

 for( i = 0; i < lib.length; i++){
           	if(lib[i].read == "True"){
              read.push(lib[i].book);
           		// console.log(lib[i].book + " is read ");
              
           	}

            else{
               notRead.push(lib[i].book);
            //   console.log(lib[i].book + " is not read ");

            }
           }
console.log(read);
    console.log(notRead);

    function findLongestWord(str) {
        var strSplit = str.split(' ');
        var longestWord = 0;
        for(var i = 0; i < strSplit.length; i++){
          if(strSplit[i].length > longestWord){
          longestWord = strSplit[i].length;
           }
        }
        return longestWord;
      }
      findLongestWord("The quick brown fox jumped over the lazy dog");
      console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));