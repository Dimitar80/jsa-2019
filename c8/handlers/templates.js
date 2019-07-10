// var First = (req, res) => {
//     var data = {
//         ime: 'Dimitar', 
//         prezime: 'Pavlov',
//         studenti: [
//             {ime: 'Pero', prezime: 'Perovski'},
//             {ime: 'Janko', prezime: 'Jankovski'},
//             {ime: 'Stanko', prezime: 'Stankovski'}
//         ]
//     };
//     res.render('first', data);
// }

//HomeWork
// var Second = (req, res) => {
//     var ime = {
//         hw: 'First hbs Home Work',
//         nl: 'Dimita P',
           
//   };
//  res.render('first', ime);
// }

// var Second = (req, res) => {
//     var food = {
//         foods: [{id: 1, name: 'Pizza', price: 320, calories: 3500},
//                 {id: 2, name: 'Burger', price: 240, calories: 1700},
//                 {id: 3, name: 'Burek', price: 60, calories: 5000},
//                 {id: 4, name:"Mekica", price:50, calories:500},
//                 {id: 5, name: 'BBQ', price: 450, calories: 2500},
//                 {id: 6, name: 'English Breakfast', price: 200, calories: 1800},
//                 {id: 7, name: 'турли тава', price: 100, calories: 200}
//               ]
//     };
//     res.render('first', food);
// }


var fs = require('fs');

var Second = (req, res) => {
        fs.readFile('./food_list.json', 'utf8', (err, data) => {
        if(err){
            res.send('Could not read file');
            return;
        }
        else {
            jData = JSON.parse(data);
            var obj = {};
            obj.prop = jData;
            //console.log(jData)
            res.render('first', obj)
            }
        });
    }
        

module.exports = {
    // First,
    Second
}
