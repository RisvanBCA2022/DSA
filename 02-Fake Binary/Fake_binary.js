function fakeBin(x){
//    return x.split('').map((num)=>num<5?0:1).join()
// return x.replace(/\d/g,(d)=>d>5?0:1)


// a.filter(a=>{
//         if(a<5){
//             console.log(0)
//         }else{
//             console.log(1);
//         }
//     })  

const num=x.split('')
let numbers=""
// num.forEach((i)=> {
//     if(i<5){
//        data+= i=0
//     }else{
//         data+= i=1
//     }
// })
// for(x of num){
//     if(x<5){
//         numbers+=0
//     }else{
//         numbers+=1
//     }
// }
// for(x in num){
//   if(num[x]<5){
//     numbers+=0
//   }else{
//     numbers+=1
//   }
  
// }
for(var i=0;i<num.length;i++){
    if(num[i]<5){
        numbers+=0
    }else{
        numbers+=1
    }
}
return numbers
 }


  console.log(fakeBin("5555"))