let p1 = (document.getElementById("p1").className = "visually-hidden");
let p2 = (document.getElementById("p2").className = "visually-hidden");
let p3 = (document.getElementById("p3").className = "visually-hidden");
let p4 = (document.getElementById("p4").className = "visually-hidden");

let p1Link = document.querySelector("#parg1");
p1Link.addEventListener("click", showParg1);

let p2Link = document.querySelector("#parg2");
p2Link.addEventListener("click", showParg2);

let p3Link = document.querySelector("#parg3");
p3Link.addEventListener("click", showParg3);

let p4Link = document.querySelector("#parg4");
p4Link.addEventListener("click", showParg4);

let pAllLink = document.querySelector("#pargAll");
pAllLink.addEventListener("click", showAll);

function showParg1() {
  p1Link.className = "nav-link active";
  document.getElementById("p1").className = "";
  p2Link.className = "nav-link";
  document.getElementById("p2").className = "visually-hidden";
  p3Link.className = "nav-link";
  document.getElementById("p3").className = "visually-hidden";
  p4Link.className = "nav-link";
  document.getElementById("p4").className = "visually-hidden";
  pAllLink.className = "nav-link";
}

function showParg2() {
  p1Link.className = "nav-link";
  document.getElementById("p1").className = "visually-hidden";
  p2Link.className = "nav-link active";
  document.getElementById("p2").className = "";
  p3Link.className = "nav-link";
  document.getElementById("p3").className = "visually-hidden";
  p4Link.className = "nav-link";
  document.getElementById("p4").className = "visually-hidden";
  pAllLink.className = "nav-link";
}

function showParg3() {
  p1Link.className = "nav-link";
  document.getElementById("p1").className = "visually-hidden";
  p2Link.className = "nav-link";
  document.getElementById("p2").className = "visually-hidden";
  p3Link.className = "nav-link active";
  document.getElementById("p3").className = "";
  p4Link.className = "nav-link";
  document.getElementById("p4").className = "visually-hidden";
  pAllLink.className = "nav-link";
}

function showParg4() {
  p1Link.className = "nav-link";
  document.getElementById("p1").className = "visually-hidden";
  p2Link.className = "nav-link";
  document.getElementById("p2").className = "visually-hidden";
  p3Link.className = "nav-link";
  document.getElementById("p3").className = "visually-hidden";
  p4Link.className = "nav-link active";
  document.getElementById("p4").className = "";
  pAllLink.className = "nav-link";
}

function showAll() {
  p1Link.className = "nav-link";
  document.getElementById("p1").className = "";
  p2Link.className = "nav-link";
  document.getElementById("p2").className = "";
  p3Link.className = "nav-link";
  document.getElementById("p3").className = "";
  p4Link.className = "nav-link";
  document.getElementById("p4").className = "";
  pAllLink.className = "nav-link active";
}
