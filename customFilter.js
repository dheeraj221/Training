var arr = [
  {
    fname : "A", 
    Status : "active"
  },
  {
    fname : "B",
    Status : "inactive"
  },
  {
    fname : "C",
    Status : "active"
  },
  {
    fname : "D",
    Status : "active"
  },
  {
    fname : "E",
    Status : "inactive"
  }
];

Array.prototype.customFilter = function(func) {
  var filteredArray = []; 
  console.log(this);  
  for (let indexx = 0; indexx < this.length; indexx++) {
    if (func(this[indexx])) {
      filteredArray.push(this[indexx]);
    }  
  }
  return filteredArray;
}
var filtered  = arr.customFilter( check => {
  return check.Status == "active";
})

console.log(filtered);
