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
window.addEventListener("load", () => {
  if (localStorage.getItem('INTROH1') !== null) {
    const introh1 = localStorage.getItem("INTROH1");
    const introp1 = localStorage.getItem("INTROP1");
  
    document.getElementById("introtext").innerHTML = introh1;
    document.getElementById("intropara").innerHTML = introp1;
  } else {
    console.log("its not there");
  }

});

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





