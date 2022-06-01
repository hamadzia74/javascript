// JavaScript Document
function pro(){
document.getElementById('text').innerHTML="You will View this Page Only when PASSWORD & LOGIN is Correct.";
var log1="demo";
var log2="DEMO";
var log3="Demo";

var pass1="password";
var pass2="PASSWORD";
var pass3="Password";
password=prompt('Password',' ');
login = prompt ('login:', ' ');
if(password==" " || login==" "){
	document.getElementById('text').innerHTML="Kindly insert something";
	}
else if ((password==pass1 || password==pass2 || password==pass3) && (login==log1 || login==log2 || login==log3)){
alert('Password and Login Accepted: Click OK to enter'); <!-- this allows page to continue loading--!>
	document.getElementById('password').innerHTML="Your Password is: "+password;
	document.getElementById('login').innerHTML="Your Login is: "+login;
	}
else
{
alert('Password or Login Incorrect: Click OK to try again');
window.location="first.html"; <!-- this reloads page lockout --!>
}

}