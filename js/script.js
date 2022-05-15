function Change_Color(){
  color_picked = color_input.value;
  if (Selector.value == "Pallete_1") {
    target = document.querySelector('.Color_1');
    target.style.backgroundColor = color_picked; //the only thing that needs to be chagned is that this should target the value in the database, not the value of the css
    return;
  }
  else if (Selector.value == "Pallete_2") {
    target = document.querySelector('.Color_2');
    target.style.backgroundColor = color_picked;
    return;
  }
  else if (Selector.value == "Pallete_3") {
    target = document.querySelector('.Color_3');
    target.style.backgroundColor = color_picked;
    return;
  }
  else if (Selector.value == "Pallete_4") {
    target = document.querySelector('.Color_4');
    target.style.backgroundColor = color_picked;
    return;
  }
  else if (Selector.value == "Pallete_5") {
    target = document.querySelector('.Color_5');
    target.style.backgroundColor = color_picked;
    return;
  }
  else if (Selector.value == "Pallete_6") {
    target = document.querySelector('.Color_6');
    target.style.backgroundColor = color_picked;
    return;
  }
  else if (Selector.value == "Background") {
    target = document.getElementsByClassName('content')
    for (var i = 0; i < target.length; i++) {
      target[i].style.backgroundColor = color_picked;
    }
    return;
  }
  else if (Selector.value == "Font") {
    target = document.getElementsByClassName('Text')
    for (var i = 0; i < target.length; i++) {
      target[i].style.color = color_picked;
    }
    return;
  }
  else if (Selector.value == "Title") {
    target = document.getElementsByClassName('Title')
    for (var i = 0; i < target.length; i++) {
      target[i].style.color = color_picked;
    }
    return;
  }
  else if (Selector.value == "Header") {
    target = document.querySelector('.Header');
    target.style.backgroundColor = color_picked;
    return;
  }
}




function Show_Intro(){
   const Intro = document.querySelector('.Introduction');
   const Color = document.querySelector('.ColorPallete');
   Color.style.visibility = 'hidden';
   Intro.style.visibility = 'visible';

 }
 function Show_Color(){
     const Color = document.querySelector('.ColorPallete');
     const Intro = document.querySelector('.Introduction');
     Intro.style.visibility = 'hidden';
     Color.style.visibility = 'visible';
 }
//
// function Change_Pallete_1(){
//   color_picked = Pallete_1_id.value;
//   target = document.querySelector('.Color_1');
//   target.style.backgroundColor = color_picked;
// }
// function Change_Pallete_2(){
//   color_picked = Pallete_2_id.value;
//   target = document.querySelector('.Color_2');
//   target.style.backgroundColor = color_picked;
// }
// function Change_Pallete_3(){
//   color_picked = Pallete_3_id.value;
//   target = document.querySelector('.Color_3');
//   target.style.backgroundColor = color_picked;
// }
// function Change_Pallete_4(){
//   color_picked = Pallete_4_id.value;
//   target = document.querySelector('.Color_4');
//   target.style.backgroundColor = color_picked;
// }
// function Change_Pallete_5(){
//   color_picked = Pallete_5_id.value;
//   target = document.querySelector('.Color_5');
//   target.style.backgroundColor = color_picked;
// }
// function Change_Pallete_6(){
//   color_picked = Pallete_6_id.value;
//   target = document.querySelector('.Color_6');
//   target.style.backgroundColor = color_picked;
//   console.log(color_picked);
// }
//
// function Change_Background_Color(){
//   color_picked = Background_Color_id.value;
//
//   target = document.getElementsByClassName('content')
//   for (var i = 0; i < target.length; i++) {
//     target[i].style.backgroundColor = color_picked;
//   }
// }
//
// function Change_Font_Color(){
//   color_picked = Font_Color_id.value;
//
//   target = document.getElementsByClassName('Text')
//   for (var i = 0; i < target.length; i++) {
//     target[i].style.color = color_picked;
//   }
// }
//
// function Change_Title_Color(){
//   color_picked = Title_Color_id.value;
//
//   target = document.getElementsByClassName('Title')
//   for (var i = 0; i < target.length; i++) {
//     target[i].style.color = color_picked;
//   }
// }
//
// function Change_Header_Color(){
//   color_picked = Header_Color_id.value;
//   target = document.querySelector('.Header');
//   target.style.backgroundColor = color_picked;
// }
