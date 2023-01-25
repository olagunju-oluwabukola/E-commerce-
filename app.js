function openNav() {
  document.getElementById("navbar").style.display = "block";
}
function onclick() {
  document.getElementsByClassName("bugger").style.display="";
}
function closeNav() {document.getElementById("navbar").style.display= "none";
}


function desc(){
  window.open('desc.html');
}

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}
