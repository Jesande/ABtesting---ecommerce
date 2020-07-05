//add the popup overlay
$('#pdp_page').prepend('<style>.wcs-quick-buy-lightbox {top: 4% !important;}</style><div class="sizeGuideOverlay"></div> <style>.sizeGuideOverlay { display:none; position: absolute; opacity: 0.8;  width: 100vw; height: 100vh; background: rgba(0,0,0,0.8); z-index: 3;</style>');

//html code for the popup
$("body").append("<div class='wcs-hidden wcs-quick-buy-lightbox' id='size-guide-overlay' style='padding: 30px; width:820px; left: 50%; margin-left: -410px; "> <span class='wcs-close-btn'>  </span> <h3 >SIZE GUIDE</h3> <p>Choose the right sunglasses or eyeglasses size by simply using your credit card and a mirror.</p> <h3>FIND YOUR FIT:</h3> <div style='border: 1px red solid; width: 700px; display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;'>  <section style='padding: 0 15px 0 0;'>    <header style='display: flex; justify-content: flex-start; align-items: center;'>       <span style='width: 22px; height: 22px; border-radius: 50%; font-weight: bold; background-color:#eed596; display: inline-block; color: white; text-align: center; line-height: 22px;'>1</span>      <p style='margin: 10px;'>Take a credit card</p> </header>    <article style='display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start;'>      <img src=//assets.ray-ban.com/is/image/RayBan/Size-guide_credit-card?$jpeg-full$ alt=''>      <p>This is the approximate width of a Standard Size lens. </p>    </article>  </section>  <section style='padding: 0 15px 0;'>          <header style='display: flex; justify-content: flex-start; align-items: center;'>       <span style='width: 22px; height: 22px; border-radius: 50%; font-weight: bold; background-color:#eed596; display: inline-block; color: white; text-align: center; line-height: 22px;'>2</span>      <p style='margin: 10px;'>Stand in front of the mirror</p>    </header>    <article>       <img src=//assets.ray-ban.com/is/image/RayBan/Size-guide_face?$jpeg-full$ alt=''>      <p>In front of a mirror or a webcam, place one edge of the credit card at the center of your nose. Where does the other edge end?</p>    </article>  </section>  <section style='padding: 0 0 0 15px;'>       <header style='display: flex; justify-content: flex-start; align-items: center;'> <span style='width: 22px; height: 22px; border-radius: 50%; font-weight: bold; background-color:#eed596; display: inline-block; color: white; text-align: center; line-height: 22px;'>3</span>    <p style='margin: 10px;'>What is your Ray-Ban size?</p>    </header>    <div style='display: grid; grid-template-columns: repeat(3, 1fr); '>      <article>        <img src='/img/size-credit-card_a.png' alt='' width='115px'>        <p>A</p>        <p>If the edge of the credit card ends at the end of the eye your fit should be Standard Size</p>      </article>      <article>        <img src='/img/size-credit-card_b.png' alt='' width='115px'>        <p>B</p>        <p>If it extends well beyond the end of the eye you should get a Small Size</p>      </article>      <article>        <img src='/img/size-credit-card_c.png' alt='' width='115px'>        <p>C</p>        <p>If instead the credit card does not reach the end of the eye then go for a Large Size.</p>      </article>    </div>  </section></div></div>");


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