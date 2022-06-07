function solveEquation(a, b, c) {
  let d = b**2 - 4*a*c
  console.log(d)
  return d > 0? [(-b - Math.sqrt(d))/2*a, (-b + Math.sqrt(d))/2*a].sort() :
         d == 0? [-b/2*a]: []
}








