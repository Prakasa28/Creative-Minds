var TTi = 0;
var TToriginal = document.getElementById("duplicate");
function copy() {
    var TTclone = TToriginal.cloneNode(true);
    TTclone.id = "duplicate" + ++TTi;
    TToriginal.parentNode.appendChild(TTclone);
}


function myFunction() {
    const element = document.getElementById("duplicate1");
    element.remove();
  }