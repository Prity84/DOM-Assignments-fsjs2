const Title = document.getElementById("title1");
Title.style.color = "red";

const Cart = document.getElementById("cart");
Cart.addEventListener("mouseover", function () {
  Cart.style.backgroundColor = "red";
});
Cart.addEventListener("mouseout", function () {
  Cart.style.backgroundColor = "hsl(158, 36%, 37%)";
});
