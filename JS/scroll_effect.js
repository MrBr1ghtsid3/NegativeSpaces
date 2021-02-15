// Hides navbar & footer based on user scrolling up/down the page

let prevScrollPosTop = window.pageYOffset;
window.onscroll = function() {
let currentScrollPosTop = window.pageYOffset;
  if (prevScrollPosTop > currentScrollPosTop) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("footer").style.bottom = "-1100px";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("footer").style.bottom = "0px";
  }
  prevScrollPosTop = currentScrollPosTop;
};
