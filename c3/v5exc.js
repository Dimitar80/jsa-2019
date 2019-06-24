// function factorial(num) {
//     var result = 1;
//         for(var i = num; i > 0; i--){
//             result *= i;
//             // console.log(result)
//     }
//     return result;
// }

// factorial(6);
// console.log(factorial(6));

//  function sum(sum){
//      res = 0;
//      for(var i = sum; i <= 5; i++){
//        res +=  i;
//     //    console.log(i)
//     //    console.log(res)
//      }
//      return res;
//  }

//    sum(1);
//    console.log(sum(1));

//    function dif(dif){
//     res = 0;
//     for(var i = dif; i <= 5; i++){
//       res +=  i;
//       if( res === 3){
//           break
          
//       }
   //    console.log(i)
   //    console.log(res)
//     }
//     return res;
// }

//   dif(1);
//   console.log(dif(1));

//   function raz(red){
//     res = 0;
//     for(var i = red; i <= 5; i++){
//       res +=  i  ;
//       console.log(i)
//     //   console.log(res)
//       if( res === 3){
//           break
          
//       }
      
//    //    console.log(res)
//     }
//     return res;
// }

//   raz(1);
//   console.log(raz(1));

// var r = [7, 2, 3, 5]
//   for(var i = 0; i < r.length; i++){
//     console.log(r[i])
    
//   }
  
//   console.log(i)
  
// var result = 1;
// for(var i = 5; i > 0; i--){
//     result *= i;
//     console.log(i)
//     console.log(result)
    
// }

// console.log(result);

// for( var  i = 0; i < 5; i++){
//     // i += 1
//     console.log(i)
// }
// console.log(i)

// printReverse start

// function printReverse(arr){
//     for(var i = arr.length - 1; i >=0; i-- ){
//         console.log(arr[i]);
//     }
// }

// printReverse([3, 5, 8]);
//     console.log(printReverse[3, 5, 8])

    // printReverse end



    // isUniform() start
function isUniform(arr){
    var first = arr[0];
    for( var i = 1; i < arr.length; i++){
        if(arr[i] !== first){
            return false;
            }
        }
    return true
}

isUniform([1, 1, 1]);
console.log(isUniform([1, 1, 1]));





var fib = (a,b) => {
    if(a > 200) {
      return a + b;
    }else {
   console.log("a= " + a);
       console.log("b= " + b);
      console.log("zbir a + b = " + (a+b));
       
       fib(b, a+b);
    }
   }
   
   fib(0,1);

// var fib = (a,b) => {
//     if(a > 100) {
//       return a + b;
//     }else {
//     //   console.log(a+b);
//       return fib(b, a+b);
     
//     }
//    }
//    fib(0,1);
//    console.log(fib(0,1));
//    epa b stanuva a, oti e staveno na mestoto na a

// 0+1 = 1, b = 1
// return (1, 1+1)
// (1,2)

// b = 3
// return (3, 3+2)
// b = 5




// var fibonacci_series = function (n) 
// {
//   if (n===1) 
//   {
//     return [0, 1];
//   } 
//   else 
//   {
//     var s = fibonacci_series(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };

//  console.log(fibonacci_series(9));



// console.log(" ")
// // sumArray start
//  function sumArray(arr){
//      var total = 0;
//      arr.forEach(function(el){
//          total +=el;
//      });
//      return total
//  }

//  sumArray([2,3,7])
//  console.log(sumArray([2,3,7]))
// sumArray end

// max()

// function max(arr){
//     var max = arr[0]
//     for(var i =0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//             // console.log(max)
//              console.log(arr[i])
//         }
//         // console.log(arr[i])
        
//     }
//     // console.log(max)
//     return max
     
// }
// max([4,2,6,3,14])
// console.log(max([4,2,6,3,14]))

// function dime(name){
//     console.log(name + 13 *3 + " years old")
    
// }

// dime(9)
// dime("Dimitar is ")

// function volcube(l, w, h){
//     console.log("volume is " + (l* w * h) +"m3")
// }
// volcube(6,4,3,)

function volcube(l){
    // return l + 2;
    return (l + l)
}
volcube(5)
console.log(volcube(5) + " Ova korista na return")
var result = volcube(7)
console.log(result)




// function jas(a, b){
//     return ((a = a+b) + a + 3) - result;
// }

// jas(3,5)
// console.log(jas(3,5))

// function capitalize(str){
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// var city = "paris";
// var city2 = "skopje";
// var capital = capitalize(city + " and " + capitalize(city2) + " and " + result)
// console.log(capital)

// function pav(a, b){
//     return  a + b 
// }

// var c = pav(6,9)
// console.log(c)


// function capitalize(str){
//     if( typeof str === "number"){
//         return str
//     }
//     return str.charAt(0).toUpperCase() + str.slice(1) + " Not always f should have return";
// }
// var city = "london";
// var capital = capitalize(city)
// console.log(capital)

// var num = 37;
// var capital = capitalize(num +"and"+(num+5))
// console.log(capital)

// var num = 37;
// var capital = capitalize(num +"and"+(num+5) + ", " + (num  + 5)+ " is sum of " + num + " and 5" );
// console.log(capital)


// console.log(typeof 42);
// console.log(typeof "Dimitar");
