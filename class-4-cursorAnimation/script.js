const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out(1.7)",
  });
});

imageDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More";
  cursor.style.backgroundColor = "#aba7a78e";
  gsap.to(cursor, {
    scale: 2,
  });
});

imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  cursor.style.backgroundColor = "";
  gsap.to(cursor, {
    scale: 1,
  });
});
