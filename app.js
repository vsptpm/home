const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const photo = document.querySelector(".photo img");
const description = document.querySelector(".info p");
const social = document.querySelector(".social");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Pop out
  title.style.transform = "translateZ(150px)";
  photo.style.transform = "translateZ(150px) ";
  description.style.transform = "translateZ(125px)";
  social.style.transform = "translateZ(100px)";
  });
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Pop back
  title.style.transform = "translateZ(0px)";
  photo.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  social.style.transform = "translateZ(0px)";
  
});
