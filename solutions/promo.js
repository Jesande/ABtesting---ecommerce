// select the a element and style it
$("[data-element-id='X_X_MainNav_Promo']").css("padding-right", "25px");
$("[data-element-id='X_X_MainNav_Promo']").removeClass( "rb-red-fg" );


//add the red circle with number inside
$("[data-element-id='X_X_MainNav_Promo']").parent().css("position", "relative");
$("[data-element-id='X_X_MainNav_Promo']").after(" <style> .spd-red-circle {position: absolute; background: #e91a00; width: 15px; height: 15px;  top: 19px;  left: 50px;  border-radius: 50%;  font-size: 10px;  font-weight: bolder;  color: white;  display: flex;  justify-content: center;  align-items: center;  line-height: 15px; </style> <span class='spd-red-circle'> 3 </span> ");

//add the red circle with dot inside
$("[data-element-id='X_X_MainNav_Promo']").parent().css("position", "relative");
$('[data-element-id="X_X_MainNav_Promo"]').after('<span style="position: absolute; background: #e91a00; width: 15px; height: 15px;  top: 19px;  left: 51px;  border-radius: 50%;  font-size: 10px;  font-weight: bolder;  color: white;  display: flex;  justify-content: center;  align-items: center;  line-height: 15px; border: 2px solid white;"> <span style="width: 2px; height: 4px; background-color: white; border-radius: 2px;"></span> </span>');

//remove promo banner
$("#ctStripe").remove();
