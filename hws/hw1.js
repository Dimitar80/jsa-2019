// console.log("HW-01-18.06.2019");

var students = [
    {ime:"Cvetan", prezime:"Cvetkov", prosek: 8.27},
    {ime:"Blagoja", prezime:"Spasevski", prosek: 9.20},
    {ime:"Ivana", prezime:"Janeva", prosek: 7.60},
    {ime:"Jane", prezime:"Mankovski", prosek: 8.80},
    {ime:"Maja", prezime:"Desoska", prosek: 7.70},
    {ime:"Ana", prezime:"Veleva", prosek: 8.90},
    {ime:"Marko", prezime:"Terzievski", prosek: 8.65},
  ]
  
  

  
    console.log("Najgolem prosek")
  
    var maxProsek = students.reduce(function(acc, curr) {
      return curr.prosek > acc.prosek ? curr.prosek  : acc;
  });
  console.log(maxProsek);
   
  console.log(" ");
  
  console.log("Najmal prosek")
  
  var minProsek = students.reduce(function(acc, curr) {
    return curr.prosek < acc.prosek ? curr.prosek : acc;
  });
  console.log(minProsek);
  
  console.log(" ");
     var sum = 0;
     for( var i = 0; i < students.length; i++){
     
      sum += students[i].prosek
      // console.log(students[i].prosek)
      // console.log(students[i])
  }
  console.log(" ");
  var result = sum / students.length
  console.log("Prosek od site proseci");
  console.log(result);
  
  
  
  
  
  // function average (students) {
  //   var sum = 0;
  //   for (var i = 0; i < students.length; i++){
  //       sum += students[i].prosek;
  //   }
  //   return sum / students.length;
  // }
  
  // console.log(average(students));
  
  
  
  
  
 
  
    
  
    
   
  
 
  
  
 
  

  
  
  
  
  
  
  
  
  
 
  