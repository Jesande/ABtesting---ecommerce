//add the popup overlay
$('#pdp_page').prepend('<style>.wcs-quick-buy-lightbox {top: 4% !important;}</style><div class="sizeGuideOverlay"></div> <style>.sizeGuideOverlay { display:none; position: absolute; opacity: 0.8;  width: 100vw; height: 100vh; background: rgba(0,0,0,0.8); z-index: 3;</style>');

//html code for the popup
$('body').append('<div class="wcs-hidden wcs-quick-buy-lightbox" id="size-guide-overlay" style="padding: 30px; width:820px; left: 50%; margin-left: -410px; "><span class="wcs-close-btn"></span><h3 style="font-size: 40px"  class=wcs-sub-heading>SIZE GUIDE</h3>  <p>Choose the right sunglasses or eyeglasses size by simply using your credit card and a mirror. </br> For more than 90% of our customers, Standard Size is the correct one. It’s very likely it’s going to be the correct size for you too.</p> <h3 style="margin-top:20px">FIND YOUR FIT:</h3><div id=SG_findYourFit class=clearfix><div id=SG_findYourFitStep1 class=ukStep_1><p class=stepNumber>1<p class=stepDesc>Take a credit card</p><img src=//assets.ray-ban.com/is/image/RayBan/Size-guide_credit-card?$jpeg-full$ alt=""><p style="font-weight:bold">This is the approximate width of a Standard Size lens.</div><div id=SG_findYourFitStep2 class=ukStep_2><p class=stepNumber>2<p class=stepDesc>Stand in front of the mirror</p><img src=//assets.ray-ban.com/is/image/RayBan/Size-guide_face?$jpeg-full$ alt=""><p style="font-weight:bold">In front of a mirror or a webcam, place one edge of the credit card at the center of your nose. Where does the other edge end?</div><div id=SG_findYourFitStep3 class=ukStep_3><p class=stepNumber>3<p class=stepDesc>What is your Ray-Ban size?</p><img src=//assets.ray-ban.com/is/image/RayBan/Size-guide_face-guide?$jpeg-full$ style="max-width: 250px;"><dl id=SG_findYourFitStepList style="margin-top:30px"><dt>A<dd>If the edge of the credit card ends at the end of the eye your fit should be Standard Size<dt>B<dd>If it extends well beyond the end of the eye you should get a Small Size<dt>C<dd>If instead the credit card does not reach the end of the eye then go for a Large Size.</dl></div></div><p style="margin-top:45px">If you would like to find out more about how to read the numbers on sunglasses and eyeglasses here’s our <a href="https://www.ray-ban.com/usa/size-guide" target="_blank" style="text-decoration:underline">full size guide</a>.</p></div>');


//adds a Size Guide link in the drop down menu
$('#D_PDP_Prod_SizeDropdownBtn .dd-options').append('<li><a class="dd-option" id="D-size-guide-option"><label class="dd-option-text wcs-capitalize wcs-border-top-size-guide">Size Guide</label></a></li>');


//adds a click event to the link - shows and hides the overlay
$('#D-size-guide-option').click(function () {

  $('.sizeGuideOverlay').show();

  $('.wcs-fadeout-full-overlay').fadeIn(200, function () {
    $(this).css('height', '100%');
  });
  $('#size-guide-overlay').fadeIn(200, function () {
    var top = 24;
    $(this).css({ top: top });
    $(window).scrollTop(0);
  });

  $('#size-guide-overlay .wcs-close-btn').click(function () {

    $('.sizeGuideOverlay').hide();

    $('#size-guide-overlay').fadeOut(200);

  });

});

//style the popup
$('head').append('<style>.wcs-border-top-size-guide{cursor:pointer;border-top:1px solid #ccc;margin-top:5px;padding-top:8px;}</style>');		

$('#SG_findYourFit .stepNumber').css({"height":"30px","width":"30px","background-color":"#eed596","-moz-border-radius":"17px","-webkit-border-radius":"17px","border-radius":"17px","text-align":"center","color":"#fff","font-size":"23px","line-height":"30px","float":"left"});

$('#SG_findYourFit .stepDesc').css({"line-height":"2.3","margin-left":"35px","font-weight":"bold","font-size":"14px"});

$('#SG_findYourFit .ukStep_1 ').css({"float":"left","width":"25%"});
$('#SG_findYourFit .ukStep_2 ').css({"float":"left","width":"27%", "margin-left":"5%"});
$('#SG_findYourFit .ukStep_3 ').css({"float":"left","width":"35%", "margin-left": "5%"});

$('#SG_findYourFit #SG_findYourFitStep3 dt').css({"float":"left","width":"18px", "background-color": "#ec1e24", "-moz-border-radius":"14px","-webkit-border-radius":"14px","border-radius":"14px", "font-size":"14px", "text-align": "center", "color": "#fff", "line-height": "18px"});

$('#SG_findYourFit #SG_findYourFitStep3 dd').css({"font-family":"Helvetica", "font-weight":"bold", "margin-left": "25px"});

$('#SG_findYourFit img').css({"margin":"0 auto", "display":"block"});