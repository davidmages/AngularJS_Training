var nbs = [2,3,4];

//Array.prototype.forEach (ES5, IE9)
nbs
.filter((elt) => elt % 2 ===0)
.map((elt) => elt ** 2)
.forEach(function cb(elt) {
  console.log('Hello');
  console.log(elt);

});

console.log ('fin');
