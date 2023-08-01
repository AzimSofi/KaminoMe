var mybutton = document.getElementById("myBtn");


scrollFunction();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var dissapear_y = 150;
  if (document.body.scrollTop > dissapear_y || document.documentElement.scrollTop > dissapear_y) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
}

function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
