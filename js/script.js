const txt_listen = document.getElementById('color_input');
const colour_listen = document.getElementById('color_input_2');

pal_1_start = localStorage.getItem('Pallete_1_lcolor');
pal_2_start = localStorage.getItem('Pallete_2_lcolor');
pal_3_start = localStorage.getItem('Pallete_3_lcolor');
pal_4_start = localStorage.getItem('Pallete_4_lcolor');
pal_5_start = localStorage.getItem('Pallete_5_lcolor');
pal_6_start = localStorage.getItem('Pallete_6_lcolor');
background_start = localStorage.getItem('Background_lcolor');
font_start = localStorage.getItem('Font_lcolor');
title_start = localStorage.getItem('Title_lcolor');
header_start = localStorage.getItem('Header_lcolor');
border_left_start = localStorage.getItem('Border_L_lcolor');
border_right_start = localStorage.getItem('Border_R_lcolor');
border_bottom_start = localStorage.getItem('Border_B_lcolor');
border_top_start = localStorage.getItem('Border_T_lcolor');

target_pal_1_start = document.getElementsByClassName('Color_1');
for (var i = 0; i < target_pal_1_start.length; i++) {
  target_pal_1_start[i].style.backgroundColor = pal_1_start;
}
target_pal_2_start = document.getElementsByClassName('Color_2');
for (var i = 0; i < target_pal_2_start.length; i++) {
  target_pal_2_start[i].style.backgroundColor = pal_2_start;
}
target_pal_3_start = document.getElementsByClassName('Color_3');
for (var i = 0; i < target_pal_3_start.length; i++) {
  target_pal_3_start[i].style.backgroundColor = pal_3_start;
}
target_pal_4_start = document.getElementsByClassName('Color_4');
for (var i = 0; i < target_pal_4_start.length; i++) {
  target_pal_4_start[i].style.backgroundColor = pal_4_start;
}
target_pal_5_start = document.getElementsByClassName('Color_5');
for (var i = 0; i < target_pal_5_start.length; i++) {
  target_pal_5_start[i].style.backgroundColor = pal_5_start;
}
target_pal_6_start = document.getElementsByClassName('Color_6');
for (var i = 0; i < target_pal_6_start.length; i++) {
  target_pal_6_start[i].style.backgroundColor = pal_6_start;
}
target_background_start = document.getElementsByClassName('content');
for (var i = 0; i < target_background_start.length; i++) {
  target_background_start[i].style.backgroundColor = background_start;
}
target_font_start = document.getElementsByClassName('Text');
for (var i = 0; i < target_font_start.length; i++) {
  target_font_start[i].style.color = font_start;
}
target_title_start = document.getElementsByClassName('Title');
for (var i = 0; i < target_title_start.length; i++) {
  target_title_start[i].style.color = title_start;
}
target_header_start = document.getElementsByClassName('Header');
for (var i = 0; i < target_header_start.length; i++) {
  target_header_start[i].style.backgroundColor = header_start;
}
target_border_l_start = document.getElementsByClassName('Borders');
for (var i = 0; i < target_border_l_start.length; i++) {
  target_border_l_start[i].style.borderLeftColor = border_left_start;
}
target_border_r_start = document.getElementsByClassName('Borders');
for (var i = 0; i < target_border_r_start.length; i++) {
  target_border_r_start[i].style.borderRightColor = border_right_start;
}
target_border_t_start = document.getElementsByClassName('Borders');
for (var i = 0; i < target_border_t_start.length; i++) {
  target_border_t_start[i].style.borderTopColor = border_top_start;
}
target_border_b_start = document.getElementsByClassName('Borders');
for (var i = 0; i < target_border_b_start.length; i++) {
  target_border_b_start[i].style.borderBottomColor = border_bottom_start;
}

color_input.addEventListener('keyup', Update_picker);
color_input_2.addEventListener('mouseup', Update_text);
function Update_picker(){
  update_pick = color_input.value;
  color_input_2.value = update_pick;
}
function Update_text(){
  update_txt = color_input_2.value;
  color_input.value = update_txt;
}

function Change_Color(){
  color_picked = color_input_2.value;
  if (Selector.value == "Pallete_1") {
    localStorage.removeItem('Pallete_1_lcolor');
    localStorage.setItem('Pallete_1_lcolor', color_picked);
    const newcolor = localStorage.getItem('Pallete_1_lcolor');
    for (var i = 0; i < target_pal_1_start.length; i++) {
      target_pal_1_start[i].style.backgroundColor = color_picked;
    }
    return;
  }
  else if (Selector.value == "Pallete_2") {
    localStorage.removeItem('Pallete_2_lcolor');
    localStorage.setItem('Pallete_2_lcolor', color_picked);
    const newcolor = localStorage.getItem('Pallete_2_lcolor');
    for (var i = 0; i < target_pal_2_start.length; i++) {
      target_pal_2_start[i].style.backgroundColor = color_picked;
    }
    return;
  }
  else if (Selector.value == "Pallete_3") {
    localStorage.removeItem('Pallete_3_lcolor');
    localStorage.setItem('Pallete_3_lcolor', color_picked);
    const newcolor = localStorage.getItem('Pallete_3_lcolor');
    for (var i = 0; i < target_pal_3_start.length; i++) {
      target_pal_3_start[i].style.backgroundColor = color_picked;
    }
    return;
  }
  else if (Selector.value == "Pallete_4") {
    localStorage.removeItem('Pallete_4_lcolor');
    localStorage.setItem('Pallete_4_lcolor', color_picked);
    const newcolor = localStorage.getItem('Pallete_4_lcolor');
    for (var i = 0; i < target_pal_4_start.length; i++) {
      target_pal_4_start[i].style.backgroundColor = color_picked;
    }
    return;
  }
  else if (Selector.value == "Pallete_5") {
    localStorage.removeItem('Pallete_5_lcolor');
    localStorage.setItem('Pallete_5_lcolor', color_picked);
    const newcolor = localStorage.getItem('Pallete_5_lcolor');
    for (var i = 0; i < target_pal_5_start.length; i++) {
      target_pal_5_start[i].style.backgroundColor = color_picked;
    }
    return;
  }
  else if (Selector.value == "Pallete_6") {
    localStorage.removeItem('Pallete_6_lcolor');
    localStorage.setItem('Pallete_6_lcolor', color_picked);
    const newcolor = localStorage.getItem('Pallete_6_lcolor');
    for (var i = 0; i < target_pal_6_start.length; i++) {
      target_pal_6_start[i].style.backgroundColor = color_picked;
    }
    return;
  }
  else if (Selector.value == "Background") {
    localStorage.removeItem('Background_lcolor');
    localStorage.setItem('Background_lcolor', color_picked);
    const newcolor = localStorage.getItem('Background_lcolor');
    for (var i = 0; i < target_background_start.length; i++) {
      target_background_start[i].style.backgroundColor = color_picked;
    }
    return;
  }
  else if (Selector.value == "Font") {
    localStorage.removeItem('Font_lcolor');
    localStorage.setItem('Font_lcolor', color_picked);
    const newcolor = localStorage.getItem('Font_lcolor');
    for (var i = 0; i < target_font_start.length; i++) {
      target_font_start[i].style.color = color_picked;
    }
    return;
  }
  else if (Selector.value == "Title") {
    localStorage.removeItem('Title_lcolor');
    localStorage.setItem('Title_lcolor', color_picked);
    const newcolor = localStorage.getItem('Title_lcolor');
    for (var i = 0; i < target_title_start.length; i++) {
      target_title_start[i].style.color = color_picked;
    }
    return;
  }
  else if (Selector.value == "Header") {
    localStorage.removeItem('Header_lcolor');
    localStorage.setItem('Header_lcolor', color_picked);
    const newcolor = localStorage.getItem('Header_lcolor');
    for (var i = 0; i < target_header_start.length; i++) {
      target_header_start[i].style.backgroundColor = color_picked;
    }
    return;
  }
  else if (Selector.value == "Border Left") {
    localStorage.removeItem('Border_L_lcolor');
    localStorage.setItem('Border_L_lcolor', color_picked);
    const newcolor = localStorage.getItem('Border_L_lcolor');
    for (var i = 0; i < target_border_l_start.length; i++) {
      target_border_l_start[i].style.borderLeftColor = color_picked;
    }
    return;
  }
  else if (Selector.value == "Border Right") {
    localStorage.removeItem('Border_R_lcolor');
    localStorage.setItem('Border_R_lcolor', color_picked);
    const newcolor = localStorage.getItem('Border_R_lcolor');
    for (var i = 0; i < target_border_r_start.length; i++) {
      target_border_r_start[i].style.borderRightColor = color_picked;
    }
    return;
  }
  else if (Selector.value == "Border Top") {
    localStorage.removeItem('Border_T_lcolor');
    localStorage.setItem('Border_T_lcolor', color_picked);
    const newcolor = localStorage.getItem('Border_T_lcolor');
    for (var i = 0; i < target_border_t_start.length; i++) {
      target_border_t_start[i].style.borderTopColor = color_picked;
    }
    return;
  }
  else if (Selector.value == "Border Bottom") {
    localStorage.removeItem('Border_B_lcolor');
    localStorage.setItem('Border_B_lcolor', color_picked);
    const newcolor = localStorage.getItem('Border_B_lcolor');
    for (var i = 0; i < target_border_b_start.length; i++) {
      target_border_b_start[i].style.borderBottomColor = color_picked;
    }
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
