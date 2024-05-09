
happiness = [1,2,3], k = 2
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b)=>b-a)
    let happy=0
    for(let i=0;i<k;i++){
        const adhappiness=happiness[i]-i
        if(adhappiness <= 0) break
        happy+=adhappiness
    }
    return happy
};

console.log(maximumHappinessSum(happiness,k))