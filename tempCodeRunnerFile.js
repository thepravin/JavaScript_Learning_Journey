function deepCopy(obj) {
  let newObj = { ...obj, balls: { ...obj.balls } };
  return newObj;
}

let ritikRun = { name: "ritik", total: 0, balls: { type: "leader" } };
let otherRun = deepCopy(ritikRun);
otherRun.balls.type = "tennis";
otherRun.total = 70;

console.log(ritikRun);
console.log(otherRun);