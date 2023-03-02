// Go to Top
let mybutton = document.getElementById("toTopButton");

window.onscroll = function () {
  scrollFunction();
};

//Scroll to Top
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//Member Name Animation
let animate = {};
animate.opacityIn = [0, 1];
animate.scaleIn = [0.2, 1];
animate.scaleOut = 3;
animate.durationIn = 600;
animate.durationOut = 500;
animate.delay = 300;

anime
  .timeline({ loop: true })
  .add({
    targets: ".animate .member-1",
    opacity: animate.opacityIn,
    scale: animate.scaleIn,
    duration: animate.durationIn,
  })
  .add({
    targets: ".animate .member-1",
    opacity: 0,
    scale: animate.scaleOut,
    duration: animate.durationOut,
    easing: "easeInExpo",
    delay: animate.delay,
  })
  .add({
    targets: ".animate .member-2",
    opacity: animate.opacityIn,
    scale: animate.scaleIn,
    duration: animate.durationIn,
  })
  .add({
    targets: ".animate .member-2",
    opacity: 0,
    scale: animate.scaleOut,
    duration: animate.durationOut,
    easing: "easeInExpo",
    delay: animate.delay,
  })
  .add({
    targets: ".animate .member-3",
    opacity: animate.opacityIn,
    scale: animate.scaleIn,
    duration: animate.durationIn,
  })
  .add({
    targets: ".animate .member-3",
    opacity: 0,
    scale: animate.scaleOut,
    duration: animate.durationOut,
    easing: "easeInExpo",
    delay: animate.delay,
  })
  .add({
    targets: ".animate .member-4",
    opacity: animate.opacityIn,
    scale: animate.scaleIn,
    duration: animate.durationIn,
  })
  .add({
    targets: ".animate .member-4",
    opacity: 0,
    scale: animate.scaleOut,
    duration: animate.durationOut,
    easing: "easeInExpo",
    delay: animate.delay,
  })
  .add({
    targets: ".animate .member-5",
    opacity: animate.opacityIn,
    scale: animate.scaleIn,
    duration: animate.durationIn,
  })
  .add({
    targets: ".animate .member-5",
    opacity: 0,
    scale: animate.scaleOut,
    duration: animate.durationOut,
    easing: "easeInExpo",
    delay: animate.delay,
  })
  .add({
    targets: ".animate .member-6",
    opacity: animate.opacityIn,
    scale: animate.scaleIn,
    duration: animate.durationIn,
  })
  .add({
    targets: ".animate .member-6",
    opacity: 0,
    scale: animate.scaleOut,
    duration: animate.durationOut,
    easing: "easeInExpo",
    delay: animate.delay,
  })
  .add({
    targets: ".animate .member-7",
    opacity: animate.opacityIn,
    scale: animate.scaleIn,
    duration: animate.durationIn,
  })
  .add({
    targets: ".animate  .member-7",
    opacity: 0,
    scale: animate.scaleOut,
    duration: animate.durationOut,
    easing: "easeInExpo",
    delay: animate.delay,
  })
  .add({
    targets: ".animate  .member-8",
    opacity: animate.opacityIn,
    scale: animate.scaleIn,
    duration: animate.durationIn,
  })
  .add({
    targets: ".animate  .member-8",
    opacity: 0,
    scale: animate.scaleOut,
    duration: animate.durationOut,
    easing: "easeInExpo",
    delay: animate.delay,
  })
  .add({
    targets: ".animate ",
    opacity: 0,
    duration: 500,
    delay: 500,
  });

//Collapse Content
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
