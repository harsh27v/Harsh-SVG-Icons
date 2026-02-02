console.log("JS file is attached");

document.getElementById("apple").addEventListener("click", () => {
  console.log("You clicked Apple");
});

document.getElementById("carrot").addEventListener("click", () => {
  console.log("You clicked Carrot");
});

document.querySelector(".watermelon-icon").addEventListener("click", () => {
  console.log("You clicked Watermelon");
});

document.querySelector(".lemon-icon").addEventListener("click", () => {
  console.log("You clicked Lemon");
});

document.querySelector(".nut-icon").addEventListener("click", () => {
  console.log("You clicked Nut");
});

document.querySelector(".grapes-icon").addEventListener("click", () => {
  console.log("You clicked Grapes");
});
