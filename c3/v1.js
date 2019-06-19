

var students = [
    {ime:"Cvetan", prezime:"Cvetkov", prosek: 8.27},
    {ime:"Blagoja", prezime:"Spasevski", prosek: 9.20},
    {ime:"Ivana", prezime:"Janeva", prosek: 7.60},
    {ime:"Jane", prezime:"Mankovski", prosek: 8.80},
    {ime:"Maja", prezime:"Desoska", prosek: 7.70},
    {ime:"Ana", prezime:"Veleva", prosek: 8.90},
    {ime:"Marko", prezime:"Terzievski", prosek: 8.65},
    
  ]


  
    function studentsDetails(s) {
        console.log(s);
        
    var sorted = s.sort((a, b) => a.prosek - b.prosek);
        console.log(sorted);

    console.log(`Student so najnizok prosek ${sorted[0].ime} ${sorted[0].prezime}
        so prosek ${sorted[0].prosek}`);

        console.log(`Student so najnizok prosek ${sorted[sorted.length -1].ime} ${sorted[sorted.length -1].prezime}
        so prosek ${sorted[sorted.length -1].prosek}`);

        var avg = sorted.map((v) => v.prosek).reduce((a,b)=>a+b) / sorted.length;
        console.log(`Sreden prosek na generacijata e ${avg}`);
  }

  studentsDetails(students);


  


//   function studentsDetails(s) {

//     var sorted = s.sort((a, b) => a.prosek -b.prosek);
//     console.log("Student so najnizok prosek"sorted);

//   }

//   studentsDetails(students);