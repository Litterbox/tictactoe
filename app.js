var marker = function() {
  return moves % 2 === 0 ? "X" : "O"
}

var moves = 0;

window.onload = function() {
  var el = document.getElementsByClassName('box');
  for (var i=0;i<el.length; i++) {
      el[i].onclick = function(event){
        this.innerHTML= marker() ;
        this.classList.add(marker())
        moves++
      };
  }
}