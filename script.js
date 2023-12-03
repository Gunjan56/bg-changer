const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const rest = document.querySelector(".reset");

//EventListener click
box1.addEventListener(
  "click",
  function () {
    console.log("box 1 red is clicked");
    document.body.style.background = "red";
  },
  false
);

box2.addEventListener(
  "click",
  () => {
    console.log("box 2 blue is clicked");
    document.body.style.background = "blue";
  },
  false
);

box3.addEventListener(
  "click",
  () => {
    console.log("box 3 green is clicked");
    document.body.style.background = "green";
  },
  false
);

box4.addEventListener(
  "click",
  () => {
    console.log("box 4 yellow is clicked");
    document.body.style.background = "yellow";
  },
  false
);

rest.addEventListener("click", () => {
  console.log("rest is clicked");
  document.body.style.backgroundColor = "#fffbf5";
});
