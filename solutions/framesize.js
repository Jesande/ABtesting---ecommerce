$("#wcs-framesize").append(' <a id="framesize-question" style="margin: 0 5px; background: #E2E2E5; width: 15px; height: 15px; border-radius: 50%;  font-size: 11px;  font-weight: bolder;  color: #666666;  display: flex;  justify-content: center;  align-items: center;  line-height: 15px; cursor: pointer"> ? </a> <img id="framesize-info"class="frame-hover-off" src="https://raw.githubusercontent.com/spd-master-web/Rain---E-commerce-design/master/img/frame-hover.png" alt=""> ');

//make the parent flex
$("#wcs-framesize").parent().css("display","flex");
$("#wcs-framesize").css("display","flex");
$("#wcs-framesize").css("margin","0 5px");

//add class to info img
$('head').append(' <style> .frame-hover-on {  width: 350px;  display: inline;  position: absolute;  top:258px;  left:165px;} .frame-hover-off {  width: 350px;  display: none;}</style>');
$(".frame-hover-on").css("width","350px");
$(".frame-hover-on").css("position","absolute");
$(".frame-hover-on").css("top","258px");
$(".frame-hover-on").css("left","-165px");

// the hover
var frameBtn = document.getElementById("framesize-question");
var frameHover = document.getElementById("framesize-info");

frameBtn.addEventListener("mouseenter", openInfo);
frameHover.addEventListener("mouseleave", openInfo);
function openInfo() {
  frameHover.classList.toggle("frame-hover-off");
  frameHover.classList.toggle("frame-hover-on");
}