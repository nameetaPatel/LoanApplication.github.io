var x = localStorage.getItem("Username");
var y = localStorage.getItem("Email");

const btn = document.getElementById("submit")
const card = document.getElementById("panCard");
const mail = document.getElementById("mail");
const Username = document.getElementById("name");

let na ;
function username(){
let arr = Username.value.split(" ")
    if (arr.length <  2) {
        alert("Please enter your Full name")
        return false
    }else{
for( let i = 0  ; i< arr.length ; i++){
    if(arr[i].length < 4){
        alert("Not a valid username")
        return false
    }
    else{
na = true
    }
}
    }
}
let email ;
function valid (){
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    if(mail.value.match(pattern)){
email = true
return true;}
    else{
        alert("Enter the valid Email Id")
        return false;}
}
let pan
function alphanumeric(){
    var regEx = /^[0-9A-Z]+$/;
    if(card.value.match(regEx)){
 pan = true;
        return true;}
    else{
        alert("Enter the correct Pan Card Number")
        return false;}
}

var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function inWords(num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}
document.getElementById('amount').onkeyup =function () {
    document.getElementById('num').innerHTML = inWords(document.getElementById('amount').value);
};

function submit(){
        username()
        valid();
        alphanumeric();
     localStorage.setItem("Username" ,Username.value )
     localStorage.setItem("Email" ,mail.value )
    
     if( ( email && pan == true )){
    }
    // console.log('WORKING');
    
    location.href ="confirm.html";
     }
     btn.addEventListener("click" , submit)
