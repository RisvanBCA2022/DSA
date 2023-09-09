function isIsogram(str){

  const newstrset= new Set(str.toLowerCase())

  if(str.length == newstrset.size || str.length==0)
  return true
else{
  return false
}
}

console.log(isIsogram(""));