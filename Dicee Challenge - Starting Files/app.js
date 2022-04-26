var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;
var value1 = 'images/dice'+num1+".png";
var value2 = 'images/dice'+num2+".png";
document.querySelector(".img1").setAttribute('src', value1);
document.querySelector(".img2").setAttribute('src', value2);
