//786

var kthSmallestPrimeFraction = function(arr, k) {
    const fractions=[]

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            fractions.push([arr[i],arr[j]])
        }
    }

    fractions.sort((a,b)=>a[0]/a[1]-b[0]/b[1])
    return fractions[k-1]
};

console.log(kthSmallestPrimeFraction([1,2,3,5],3))
console.log(kthSmallestPrimeFraction([1,7],1))