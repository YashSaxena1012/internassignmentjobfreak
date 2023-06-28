var homebtn = document.querySelector(".homebtn");
var contactbtn = document.querySelector(".contactbtn");
var infobtn = document.querySelector(".informationbtn");
var guidebtn = document.querySelector(".guidebtn");

var homedisp = document.querySelector(".homedata");
var contactdisp = document.querySelector(".contactdata");
var infodisp = document.querySelector(".informationdata");
var guidedisp = document.querySelector(".guidedata");

function handlehome() {
  homedisp.style.display = "block";
  contactdisp.style.display = "none";
  infodisp.style.display = "none";
  guidedisp.style.display = "none";
}
function handlecontact() {
  homedisp.style.display = "none";
  contactdisp.style.display = "block";
  infodisp.style.display = "none";
  guidedisp.style.display = "none";
}
function handleinfo() {
  homedisp.style.display = "none";
  contactdisp.style.display = "none";
  infodisp.style.display = "block";
  guidedisp.style.display = "none";
}
function handleguide() {
  homedisp.style.display = "none";
  contactdisp.style.display = "none";
  infodisp.style.display = "none";
  guidedisp.style.display = "block";
}
