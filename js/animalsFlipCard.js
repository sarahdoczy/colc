$(document).ready(function(){

       // $('.hover').hover(function(){
       //         $(this).addClass('flip');
       // },function(){
       //         $(this).removeClass('flip');
       // });
       

    $(".front").hover(function() {
      $(".caption").slideDown(300).delay(800).slideUp(400);
    });
    
});