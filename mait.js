
let name =prompt("Your Name")
let bornDate=+prompt("Год РОждения ")
let currentYear=+prompt("Текущий год")
function age(){
let sum=currentYear-bornDate;

return " Ваше имя "+ name  + " , "+"  Ваш возраст "+ sum
} 
alert(age())
