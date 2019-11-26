var temp = 20;
var speed = 10;

var exp = Math.pow(speed, 0.16);

var f = 35.74 + (0.6215 * temp) - (35.75 * exp) + (0.4275 * temp * exp);


document.getElementById("windchill").innerHTML = f.toFixed(2);


console.log(f);
