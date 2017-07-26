// // function aRose() {
// //   console.log("Sweet!");
// // }
// // var anotherName = aRose;
// // typeof(anotherName); //"function"
// // anotherName();        //"Sweet!"
// //
// // setTimeout(aRose, 2000);
// //
// // function multiplyBy3(num){
// //   return num*3;
// // }
// // function multiplyBy6(num){
// //   return num*6;
// // }
// // function transformNumberWith(num, transformer){
// //   return transformer(num);
// // }
// //
// // console.log(transformNumberWith(3, multiplyBy6));
// // console.log(transformNumberWith(3, multiplyBy3));
//
//
// // function countDown(time){
// //   for (var i = time; i >= 0; i--){
// //     setTimeout(function(){
// //       var t = time;
// //       t--;
// //       if (t>0){
// //         setTimeout(countDown, 1000)
// //       }
// //       console.log(t);
// //       }
// //       , 1000);
// //   }
// // }
// // countDown(5);
// // function countDown(){
// //   setTimeout(function(){
// //
// //   }, 1000)
// // }
//
// setTimeout(countDown,1000);
//
// function countDown(){
//     var n = 5;
//     n--;
//     if(n > 0){
//       setTimeout(countDown,1000);
//     }
//     console.log(n);
//   }
//
//
// function createWebsiteCounter(){
//   var numberOfVisitor = 0;
//
//   function getNumberOfVisitor(){
//     return numberOfVisitor;
//   }
//
//   function setNumberOfVisitor(num){
//     if (num > 0) numberOfVisitor = num;
//   }
//
//   return{
//     getNumberOfVisitor  : getNumberOfVisitor,
//     setNumberOfVisitor  : setNumberOfVisitor
//   }
// }
//
// var myWebsite = createWebsiteCounter();
