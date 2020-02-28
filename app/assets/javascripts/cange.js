window.addEventListener("load", function(){
  $(function(){
    $(".left-man").on('click',function(){
      $('.buy__third').css('display' , 'block')
      $('.buy__fifth').css('display' , 'none')
      $('.left-man').css('backgroundColor' , '#fafafa')
      $('.left-man').css('border-top' , '3px solid red')
      $('.right-man').css('backgroundColor' , '#eee')
      $('.right-man').css('border-top' , 'none')
    });
    $(".right-man").on('click',function(){
      $('.buy__third').css('display' , 'none')
      $('.buy__fifth').css('display' , 'block')
      $('.right-man').css('backgroundColor' , '#fafafa')
      $('.right-man').css('border-top' , '3px solid red')
      $('.left-man').css('backgroundColor' , '#eee')
      $('.left-man').css('border-top' , 'none')
    });
  });
});