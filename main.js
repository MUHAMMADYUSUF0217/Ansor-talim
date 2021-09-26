


// allnews.addEventListener('click', (event) => {
// 	let element = document.getElementById("secondSectionnews")
//     element.style.display = "block"
// })


function myFunction() {
  let x = document.getElementById("secondSectionnews");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function allCourseFunction() {
  let y = document.getElementById("secondCourses");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

function sliderFunction1() {
  let i = document.getElementById("secondTeacherinfo");
  let l = document.getElementById("teacherInfo");
  let t = document.getElementById("thirdTeacherinfo");

  if (l.style.display === "flex") {
    l.style.display = "flex"; 
  } else if (l.style.display = "flex") {
   		t.style.display = "none";
   } 
	  
}
function sliderFunction2() {
  let i = document.getElementById("secondTeacherinfo");
  let l = document.getElementById("teacherInfo");
  let t = document.getElementById("thirdTeacherinfo");

  if (i.style.display === "none") {
    i.style.display = "flex"; 
  } else if (i.style.display = "flex") {
   		l.style.display = "none";
   } 
	  
}
function sliderFunction3() {
  let i = document.getElementById("secondTeacherinfo");
  let l = document.getElementById("teacherInfo");
  let t = document.getElementById("thirdTeacherinfo");

  if (t.style.display === "none") {
    t.style.display = "flex"; 
  } else if (t.style.display = "flex") {
   		i.style.display = "none";
   } 
	  
}




function commentFunction1() {
  let i = document.getElementById("secondCommentSection");
  let l = document.getElementById("parentComment");
  let t = document.getElementById("thirdCommentSection");

  if (l.style.display === "flex") {
    l.style.display = "flex"; 
  } else if (l.style.display = "flex") {
   		t.style.display = "none";
   } 
	  
}
function commentFunction2() {
  let i = document.getElementById("secondCommentSection");
  let l = document.getElementById("parentComment");
  let t = document.getElementById("thirdCommentSection");

  if (i.style.display === "none") {
    i.style.display = "flex"; 
  } else if (i.style.display = "flex") {
   		l.style.display = "none";
   } 
	  
}
function commentFunction3() {
  let i = document.getElementById("secondCommentSection");
  let l = document.getElementById("parentComment");
  let t = document.getElementById("thirdCommentSection");

  if (t.style.display === "none") {
    t.style.display = "flex"; 
  } else if (t.style.display = "flex") {
   		i.style.display = "none";
   } 
	  
}






function classFunction() {
  let i = document.getElementById("secondClass");
  let l = document.getElementById("parentClass");
  let t = document.getElementById("fifthClass");

  if (l.style.display === "flex") {
    l.style.display = "flex"; 
  } else if (l.style.display = "flex") {
   		t.style.display = "none";
   } 
	  
}
	function classFunction2() {
  let i = document.getElementById("secondClass");
  let l = document.getElementById("parentClass");

  if (i.style.display === "none") {
    i.style.display = "flex"; 
  } else if (i.style.display = "flex") {
   		l.style.display = "none";
   } 
	  
}

function classFunction3() {
  let i = document.getElementById("secondClass");
  let l = document.getElementById("parentComment");
  let t = document.getElementById("thirdClass");

  if (t.style.display === "none") {
    t.style.display = "flex"; 
  } else if (t.style.display = "flex") {
   		i.style.display = "none";
   } 
	  
}

function classFunction4() {
  let t = document.getElementById("thirdClass");
  let b = document.getElementById("fourthClass");

  if (b.style.display === "none") {
    b.style.display = "flex"; 
  } else if (b.style.display = "flex") {
   		t.style.display = "none";
   } 
	  
}
function classFunction5() {
  let b = document.getElementById("fourthClass");
  let d = document.getElementById("fifthClass");

  if (d.style.display === "none") {
    d.style.display = "flex"; 
  } else if (d.style.display = "flex") {
   		b.style.display = "none";
   } 
	  
}










let modal = document.getElementById("buyCourse");

// Get the button that opens the modal
let btn = document.getElementById("buybtn");
let btn2 = document.getElementById("buybtn2");
let btn3 = document.getElementById("buybtn3");
let btn4 = document.getElementById("buybtn4");
let btn5 = document.getElementById("buybtn5");
let btn6 = document.getElementById("buybtn6");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
btn3.onclick = function() {
  modal.style.display = "block";
}
btn4.onclick = function() {
  modal.style.display = "block";
}
btn5.onclick = function() {
  modal.style.display = "block";
}
btn6.onclick = function() {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// // Get the <span> element that closes the modal
// let span = document.getElementsByClassName("shut")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }