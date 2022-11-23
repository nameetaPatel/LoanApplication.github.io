console.log(x);
console.log(y);
let check=document.getElementById("valid") 
let otp=document.getElementById("otp") 
let arr =x.split(" ")
document.querySelector("#random").innerHTML=`Dear,  ${arr[0]}. Thank you for your Enquiry. <br> A 4 digit validation number has been sent to your email`;
random()
function random(){
 let x=Math.floor((1000+  Math.random() * 9000)).toFixed();
 console.log(x)
 let count=0;
 check.onclick=function(){
     if(otp.value==x && count<3){
         alert("Validation Successfull");
     }
     else if(count==3){
         alert("Validation Failed");
         random();
     }else{
         alert("oopss ....... Re-enter");
         count++
         console.log(count)
     }
 }
}
