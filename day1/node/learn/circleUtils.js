const title = "Circle Utility";
const pi = 3.14159;

const calcCircleArea = function (radius) {
  return pi * radius * radius;
};

module.exports.pi = pi;
module.exports.title = title
module.exports.calcCircleArea = calcCircleArea;

//  //==================== spot-check 1 ====================
//  const dataBase = require('./consts.js')  
//  console.log(dataBase.dbName);
