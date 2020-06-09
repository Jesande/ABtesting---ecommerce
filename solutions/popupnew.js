D_PDP_Prod_SizeDropdownBtn

//add the popup
$('#pdp_page').prepend('<style>.wcs-quick-buy-lightbox {top: 4% !important;}</style><div class="sizeGuideOverlay"></div><style>.sizeGuideOverlay {  display:none; position: absolute;      opacity: 0.8;  width: 100vw;    height: 100vh;    background: rgba(0,0,0,0.8);    z-index: 3;</style>');
      $('body').append(' html  '); /*html code for the popup*/

//adds a link in the drop down menu
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