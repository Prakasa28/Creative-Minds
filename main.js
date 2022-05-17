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

  window.addEventListener('load' ,() =>{

    const introh1 = localStorage.getItem('INTROH1');
    const introp1 = localStorage.getItem('INTROP1');

    document.getElementById('introtext').innerHTML = introh1 ;
    document.getElementById('intropara').innerHTML = introp1;
  })