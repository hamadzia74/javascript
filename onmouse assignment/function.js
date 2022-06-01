// JavaScript Document
function first_fun(x){
x.src="pics/lexus_icon.jpeg";
document.getElementById('first_fun_text').innerHTML="Lexus";
document.getElementById('first_fun_text').style.display="block";
document.getElementById('second_fun_text').style.display="none";


document.getElementById('first_inner_text').innerHTML="\nfunction first_fun(x){\nx.src='pics/lexus_icon.jpeg';\ndocument.getElementById('first_fun_text').innerHTML='Lexus';\ndocument.getElementById('first_fun_text').style.display='block';\ndocument.getElementById('second_fun_text').style.display='none';}\n";
document.getElementById('first_inner_text').style.display="block";
document.getElementById('second_inner_text').style.display="none";

}
function second_fun(x){
	x.src="pics/range_rover_icon.png";
	document.getElementById('first_fun_text').style.display="none"
	document.getElementById('second_fun_text').innerHTML="Ranger Rover";
	document.getElementById('second_fun_text').style.display="block";
	document.getElementById('first_inner_text').style.display="none";
	
document.getElementById('second_inner_text').innerHTML="\nfunctionsecond_fun(x){x.src='pics/range_rover_icon.png';document.getElementById('first_fun_text').style.display='none'document.getElementById('second_fun_text').innerHTML='Ranger Rover';document.getElementById('second_fun_text').style.display='block';document.getElementById('first_inner_text').style.display='none';}";
document.getElementById('second_inner_text').style.display="block";
}
