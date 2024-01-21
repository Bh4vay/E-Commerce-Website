const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
if(bar){
  bar.addEventListener("click",()=>{
    nav.classList.add("active");
  })
}
if(close){
  close.addEventListener("click",()=>{
    nav.classList.remove("active");
  })
}




var MainImg = document.getElementById("MainImage");
var smallImg = document.getElementsByClassName("small-img");
var price = document.querySelector(".single-pro-det h2");
var det = document.getElementById("detail");
var naam = document.getElementById("shirtname");

smallImg[0].onclick = function () {
  MainImg.src = smallImg[0].src;
  price.innerHTML = "&#8377;600";
  det.innerHTML =
    "Discover comfort in simplicity with our Cotton Classic T-Shirt. Made from 100% natural cotton, it offers a soft, breathable feel for your everyday adventures. Choose enduring quality and style in a variety of colors. Your essential go-to, perfected.";
  naam.innerHTML = "Cartoon Astronaut";
};
smallImg[1].onclick = function () {
  MainImg.src = smallImg[1].src;
  price.innerHTML = "&#8377;900";
  det.innerHTML =
    "Elevate your casual style with our Floral Cotton T - Shirt.Made from 100 % cotton, it offers comfort with a touch of elegance through vibrant floral patterns.Perfect for everyday wear, this T - shirt merges fashion and comfort effortlessly.";
  naam.innerHTML = "Floral";
};
smallImg[2].onclick = function () {
  MainImg.src = smallImg[2].src;
  price.innerHTML = "&#8377;899";
  det.innerHTML =
    "Upgrade your wardrobe with our Cotton T - Shirt adorned with delicate roses.Made from 100 % cotton, this piece combines comfort with a touch of floral elegance.Versatile and timeless, it's an essential addition to your collection, bringing a hint of sophistication to your casual style.";
  naam.innerHTML = "FeatherTouch Tunic";
};
smallImg[3].onclick = function () {
  MainImg.src = smallImg[3].src;
  price.innerHTML = "&#8377;699";
  det.innerHTML =
    "Refine your wardrobe with our White Cotton T-Shirt. Crafted from 100% cotton, this versatile piece provides comfort and a clean, timeless look. An essential for any casual occasion, it pairs effortlessly with various styles, ensuring a classic and understated aesthetic.";
  naam.innerHTML = "Pure Cotton Classic";
};



        
