var selector = document.getElementById('selecth1FontFamily');
var asd = document.getElementById('edit');

if (localStorage.length != 0) {
    asd.style.fontFamily = localStorage.font;
    asd.value = localStorage.font;
}else{
    localStorage.setItem('font', '');
}


selector.onchange = function(){
    var family = this.value;
    asd.style.fontFamily = family;
    localStorage.font = family;
}
