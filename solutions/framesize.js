//Select the li and add the (?)
$("#wcs-framesize").append(' <a id="framesize-question" style="margin: 0 5px; background: #E2E2E5; width: 15px; height: 15px; border-radius: 50%;  font-size: 11px;  font-weight: bolder;  color: #666666;  display: flex;  justify-content: center;  align-items: center;  line-height: 15px; cursor: pointer"> ? </a> <img id="framesize-info"class="frame-hover-off" src="/img/frame-hover.png" alt=""> ');

//make the parent flex
$("#wcs-framesize").parent().css("display","flex");
$("#wcs-framesize").css("display","flex");
$("#wcs-framesize").css("margin","0 5px");

// the hover
var frameBtn = document.getElementById("framesize-question");
var frameHover = document.getElementById("framesize-info");

frameBtn.addEventListener("click", openInfo);
function openInfo() {
  frameHover.classList.toggle("frame-hover-off")
}