// JavaScript Document/*  .style.align="center"  */
function buy(){
/*document.write('<h1 align="center">Nike BackPack</h1>');
document.write('<p align="center">- The new stylish backpack has room to carry it all.</p>');
document.write('<p align="center">- Bag weight 0.60 Kgs</p>');
document.write('<p align="center">- AED 52.25 , Available: Black/Yellow - Black/white - Jeans Blue, Bag Size: W: 14cmxL: 28cmxH: 48cm</p>');
document.write('<img src="pics/nike_bag.jpg" />').style.display="block";*/
document.getElementById('NikeBackPack').style.display="block";
document.getElementById('buy_btn').style.display="none";
document.getElementById('cancel_btn').style.display="block";
document.getElementById('second_buy_btn').style.display="block";
}

function cancel(){
document.getElementById('NikeBackPack').style.display="none";
document.getElementById('buy_btn').style.display="block";
document.getElementById('cancel_btn').style.display="none";
document.getElementById('second_buy_btn').style.display="none";
}