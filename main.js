// Duplicate menu item
var TTi = 0;
var TToriginal = document.getElementById("duplicate");
function copy() {
  var TTclone = TToriginal.cloneNode(true);
  TTclone.id = "duplicate" + ++TTi;
  TToriginal.parentNode.appendChild(TTclone);
  localStorage.setItem("wasPageRefreshed", true);
}
if (localStorage.getItem("wasPageRefreshed")) {
  copy();
}

function myFunction() {
  const element = document.getElementById("duplicate1");
  localStorage.removeItem("wasPageRefreshed");
  element.remove();
}

//Change text
/*window.addEventListener("load", () => {
  if (localStorage.getItem('INTROH1') !== null) {
    const introh1 = localStorage.getItem("INTROH1");
    const introp1 = localStorage.getItem("INTROP1");
  
    document.getElementById("introtext").innerHTML = introh1;
    document.getElementById("intropara").innerHTML = introp1;
  } else {
    console.log("its not there");
  }

});*/

// upload logo
document.querySelector("#logoUpload").addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    localStorage.setItem("logo-image", reader.result);
  });

  reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", () => {
  const logoImageDataUrl = localStorage.getItem("logo-image");

  if (logoImageDataUrl) {
    document
      .querySelector("#logoPreview")
      .setAttribute("src", logoImageDataUrl);
  }
});

//Menu sortable

/*$(function () {
  $("#sortable").sortable();
});*/

function dragdrop() {
  var list = document.getElementsByClassName("Sidebar_menu")[0].outerHTML;
  localStorage.setItem("dragdropmenu", list);
}

function app() {
  var app = document.getElementById("app").outerHTML;
  localStorage.setItem("app", app);
}




$("#sortable").sortable({
  cancel: ".fixed",
  update: function (event, ui) {
      var data = [];
      $('#sortable').find('li').each(function(i) {
          data.push($(this).data('arrange'));
      });
      localStorage.setItem('sort',data); //to set
      }
});


if(localStorage.getItem('sort')){
	var array = localStorage.getItem('sort').split(',');
      map = {},
      el = $('ul');
  
  $('ul > li').each(function() { 
      var el = $(this);
      map[el.data('arrange')] = el;
  });
  $('ul').html('');
  for (var i = 0; i <= array.length; i++) {
    if (array[i]) {
        $('ul').append(map[array[i]]);
    }
  }
}; //to get.


//Font size

function changeTextSize()  {
  var input = document.getElementById('input').value;

  var output =
  document.getElementById('introtext').style.fontSize = input + "px";
    localStorage.setItem('output', output);
}

window.addEventListener("load", () => {


if(localStorage.getItem('output')) {
  var storedSize = localStorage.getItem('output');
 document.getElementById("introtext").style.fontSize =  storedSize;
}
});

function changeTextSizep()  {
  var input = document.getElementById('inputp').value;

  var outputp =
  document.getElementById('intropara').style.fontSize = input + "px";
    localStorage.setItem('outputp', outputp);
}

SmartBlock.Extensions.push(new SmartBlock.CustomBlock({
  tagName: 'div',
  className: 'acms-alert',
  customName: 'alert',
  icon: '!'
}));

SmartBlock.Editor('#app', {
  html: '<h2>Hello World</h2><p>hello</p>',
  extensions: SmartBlock.Extensions,
  onChange: function(result) {
    console.log(result.json, result.html);
  }
});

function changeFunc() {
  var selectBox = document.getElementById("selecth1FontFamily");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  asd.style.fontFamily = selectedValue;
  localStorage.font = selectedValue;
 }

var selector = document.getElementById('selecth1FontFamily');
var asd = document.getElementById('edit');

if (localStorage.length != 0) {
    asd.style.fontFamily = localStorage.font;
    asd.value = localStorage.font;
}else{
    localStorage.setItem('font', '');
}


var text = document.getElementById('duplicate');
var myData;
var postData = window.localStorage.getItem("save");
// if no data
if (postData == null || postData == '') {
    myData = text.innerHTML;
    // store default value
    window.localStorage.setItem("save", myData);
    // make it placeholder style
    text.classList.remove('changed');
} else {
    // if there is a value post it
    text.innerHTML = postData;
    // make dark text
    text.classList.add('changed');
}

function saveChanges() {
    // store the current value
    myData = text.innerHTML;
    // local store the value
    window.localStorage.setItem("save", myData);
    text.classList.add('changed');
}

// target_borders = document.getElementsByClassName('Borders');
// var count = 0;
// function hide_border(){
//   // var boxvalue = document.getElementById('hideborder').value;
//   if (count == 0){
//     count ++;
//     for (var i = 0; i < target_borders.length; i++) {
//       target_borders[i].style.border = "solid";
//       return;
      
//     }
//     if (count ==1){
//       count --;
//       for (var i = 0; i < target_border_l_start.length; i++) {
//         target_borders[i].style.border = "hidden";
//         return;
//       }      
//     }


//   }
//   console.log(count);
// }


/*document.querySelector("#imageUpload").addEventListener("change",function(){
  const reader1 = new FileReader();

  reader1.addEventListener("load",() => {
    localStorage.setItem("brand-image",reader1.result);
  });

  reader1.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", () => {
  const recentImageDataUrl1 = localStorage.getItem("brand-image");

  if (recentImageDataUrl1){
      document
      .querySelector("#imagePreview")
      .setAttribute("scr", recentImageDataUrl1);
  }
});*/









