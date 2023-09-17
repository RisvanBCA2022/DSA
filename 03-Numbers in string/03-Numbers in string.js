function solve(s){
    let numb=[]
    let currentnumber=''
    let maxnumber=-Infinity
    
    const arrayofstr=s.split('')
    for(let i=0;i<arrayofstr.length;i++){
            if(!isNaN(arrayofstr[i])){
                currentnumber+=arrayofstr[i]
                // numb.push(arrayofstr[i])
               }else {
                if(currentnumber !=''){
                   numb.push(parseInt(currentnumber))
                   if(currentnumber>maxnumber){
                    maxnumber=parseInt(currentnumber)
                   }
                   currentnumber=''
                }
               }
    }

   if(maxnumber!==''){
    numb.push(parseInt(currentnumber))
    if(parseInt(currentnumber)>maxnumber){
        maxnumber=parseInt(currentnumber)
    }
   }
    
return maxnumber
}
console.log(solve("ghaoghaogh7898afafjalf090"))