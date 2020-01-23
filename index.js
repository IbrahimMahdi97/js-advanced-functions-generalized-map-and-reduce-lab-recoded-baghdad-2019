// Add your functions here

function map(val, cd) {
let v = []

for (let i = 0; i < val.length; i++) {
  let theElement = val[i]
  v.push(cd(theElement))
}

return r;
}

function reduce(val, cd, starting){
let v = (!!starting) ? starting : val[0]
let i = (!!starting) ? 0 : 1

for (let i = 0; i < val.length; i++) {
  v = cd(val[i], v)
}

return v;
}
