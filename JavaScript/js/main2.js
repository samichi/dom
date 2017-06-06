
function myFunction() {
  var x = document.getElementsByTagName("P").length;
  var wordOn = "<span class='on'>W3Schools</span>";
  for(var j = 0; j < x; j++){
    for(var i = 0; i < x; i++){
      var str = document.getElementsByTagName("P")[i].innerHTML; 
      var res = str.replace("Microsoft", wordOn);
      document.getElementsByTagName("P")[i].innerHTML = res;
    }
  }
  
  
  
  var y = document.getElementsByTagName("P").length;
  var wordOff = "<span class='off'>W3Schools</span>";
  for(var j = 0; j < x; j++){
    for(var i = 0; i < x; i++){
      var str = document.getElementsByTagName("P")[i].innerHTML; 
      var res = str.replace("Microsoft", wordOff);
      document.getElementsByTagName("P")[i].innerHTML = res;
    }
  }
  
  
}





