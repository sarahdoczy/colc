$(document).ready(function() {
  
     $("ul[class*=selectLetter] li").click(function () {
                var letter = $(this).text(); // gets text contents of clicked li
                $('.dynamicContent').load('alphabetLetters/'+letter+'.html');
            });

            
    $('select#alphabet').change(function () {
        var letter = $('#alphabet option:selected').val();
        $('.dynamicContent').load('alphabetLetters/'+letter+'.html');
        
    }); 

    //$('.alphabetContent').fadeIn(800);


});

    