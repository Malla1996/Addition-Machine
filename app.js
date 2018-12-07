const result=document.getElementById('results');
const ip1=document.getElementById('ip1');
const ip２=document.getElementById('ip２');
const calc=document.getElementById('calc');
const rand=document.getElementById('rand');
const clr=document.getElementById('clr');


//EVENT LISTENER FOR THE CALC BUTTON

calc.addEventListener('click',function(){
    //CREATED TWO NEW VARAIBLES THAT USE PARSEFLOAT TO CONVERT A STRING TO A NUMBER
   const firstNUm=parseFloat(ip1.value);
   const secondNum=parseFloat(ip2.value);
   //SET THE INNER HTML TO THE SUM OF THE TWO INPUTS 
   result.innerHTML=firstNUm+secondNum;
});
//EVENT LISTENER FOR THE CLEAR BUTTON
clr.addEventListener('click',function(){
    //RESET THE THREE AREAS TO AN EMPTY STRING
ip1.value='';
ip2.value='';
result.innerHTML='';

});




//A FUNCTION THAT GENERATES A RANDOM NUMBER BETWEEN 0 AND 1000
function randomNumberGenerator(){
return Math.floor(Mayh.random()*1000);

}
console.log(randomNumberGenerator()):
//EVENT LISTENER FOR THE rand BUTTON
rand.addEventListener('click',function(){
    //RESET THE THREE AREAS TO AN EMPTY STRING
ip1.value=randomNumberGenerator();
ip2.value=randomNumberGenerator();

});