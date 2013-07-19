$(document).ready(function() {
  
  $('.box_container').each(function(index) {
         $(this).delay(300*index).fadeIn(800);
      });

   $("#overlay").delay(1400).overlay({
      top: 100,
      mask: {
         color: '#aaa', 
         loadSpeed: 3500,
         opacity: 0.4   
      },
       load: true 
    }); 

   $('.box_container').hover(
      function(){
         $(this).find('.caption').fadeIn(200);
         $(this).find('.content').animate({opacity: ".6"}, 200);
      },
      function(){
         $(this).find('.caption').fadeOut(200);
         $(this).find('.content').animate({opacity: "1"}, 200);
      }); 
   
});
