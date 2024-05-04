
var people = [1,2,3]
var limit = 3

var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>a-b)
    
    let boats=0
    let light=0;
    let heavy=people.length-1

    for(let i = heavy;i>=light;i--){
        if(people[light]+people[i] <= limit){
            light++
        }
        boats++
    }
    return boats;
    
};

console.log(numRescueBoats(people,limit))
