$(document).ready(function(){
    $('.place').on("change keyup paste", function(){
      if($(this).val()){
        $('.icon-search').addClass("next");
      } else {
        $('.icon-search').removeClass("next");
      }
    });
  
    $('.next-button').hover(function(){
      $(this).css('cursor', 'pointer');
    });
  
    $('.next-button.place').click(function(){
      console.log("Place Searched");
      $('.place-section').addClass("fold-up");
      $('.success').css("marginTop", 0);
    });
  });
  