var name  = " Văn Học "
var tuoi = 21
/*
alert(" something just message")
confirm(" this function can be yes or no ")
prompt(" this function have the input bar ")
*/
//prompt(" Mấy tuổi rồi bro?? ")
// setTimeout(function(){
//     alert("somthing")
// }, 1000)
// setInterval(function(){
//     console.log("ahii"+ Math.random())
// }, 1000)
function myFunction() {
  var getID = document.getElementById("drop-hidden");
  var x = getID.className.indexOf("list-appear");
  if (x == -1) {
    getID.className += "list-appear";
  } else {
    getID.className = getID.className.replace("list-appear", "");
  }
}
