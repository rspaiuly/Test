function compareArrays(arr1, arr2) {

  if(arr1.length != arr2.length) return false
  
  return arr1.filter(function(item, index) {
      return !(arr2[index] === item)
  }).length === 0

}

function advancedFilter(arr) {
  
  return arr.filter(item => item > 0).map(item => item*10)

}
