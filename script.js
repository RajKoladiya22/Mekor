var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + 1 + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x - 200 + "px";
  cursorBlur.style.top = dets.y - 200 + "px";
});

// Cursor Hover Effects on Navigation
var navh4 = document.querySelectorAll("#nav h6");
navh4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    (cursor.style.scale = 3), (cursor.style.border = "1px solid white");
    cursor.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    (cursor.style.scale = 1), (cursor.style.border = "0px solid #95c11e ");
    cursor.style.backgroundColor = "#95c11e";
  });
});

// Background change on scroll
gsap.to("#main", {
  backgroundColor: "white",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -40%",
    end: "top -80%",
    scrub: 5,
  },
});

// Sections animating into view on scroll
gsap.from("#about, #aboutus img", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#aboutus ",
    scroller: "body",
    start: "top 60%",
    end: "top  55%",
    scrub: 2,
  },
});
