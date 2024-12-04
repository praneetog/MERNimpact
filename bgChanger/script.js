const btn = document.getElementById("btn");
const parent = document.getElementById("parent");

btn.addEventListener("click", () => {
  if (parent.style.backgroundColor === "white") {
    parent.style.backgroundColor = "black";
  } else {
    parent.style.backgroundColor = "white";
  }
});

btn.addEventListener("mouseenter", () => {
    parent.style.backgroundColor = "pink";
});