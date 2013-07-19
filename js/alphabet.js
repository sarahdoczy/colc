$(document).ready(function() {
  
     $("ul[class*=selectLetter] li").click(function () {
          var letter = $(this).text(); // gets text contents of clicked li
          $('.dynamicContent').fadeOut(0).load('alphabetLetters/'+letter+'.html').fadeIn(800);
     });
  

    $('select#alphabet').change(function () {
          var letter = $('#alphabet option:selected').val();
          $('.dynamicContent').fadeOut(0).load('alphabetLetters/'+letter+'.html').fadeIn(800);
        
    }); 

});
