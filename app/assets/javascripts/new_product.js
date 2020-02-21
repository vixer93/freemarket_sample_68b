window.addEventListener("load", function(){
  $(function(){
    //商品名
    $( '.input-default' ).on('click', function(){
      let name = $(this).val();
      if(name == 0){
        $('.input-default').css('border-color','red')
        $('.no-product-name').text('入力してください')
      }else{
        $('.input-default').css('border-color','')
        $('.no-product-name').text('')
      }
    });
    $( '.input-default' ).on('change',function(){
      let name = $(this).val();
      if(name == 0){
        $('.input-default').css('border-color','red')
        $('.no-product-name').text('入力してください')
      }else{
        $('.input-default').css('border-color','')
        $('.no-product-name').text('')
      }
    });
    //商品の説明
    $('.textarea-default').on('click',function(){
      let description = $(this).val();
      if(description == 0){
        $('.textarea-default').css('border-color','red')
        $('.no-product2').text('入力してください')
      }else{
        $('textarea-default').css('border-color','')
        $('.no-product2').text('')
      }
    });
    $('.textarea-default').on('change',function(){
      let description = $(this).val();
      if(description == 0){
        $('.textarea-default').css('border-color','red')
        $('.no-product2').text('入力してください')
      }else{
        $('.textarea-default').css('border-color','')
        $('.no-product2').text('')
      }
    });
      // カテゴリー
    $('.select-default').on('click',function(){
      let category = $(this).val();
      if(category == 0){
        $('.default01').css('border-color','red')
        $('.no-product3').text('入力してください')
      }else{
        $('default01').css('border-color','')
        $('.no-product3').text('')
      }
    });
    $('.default01').on('change',function(){
      let category = $(this).val();
      if(category == 0){
        $('.default01').css('border-color','red')
        $('.no-product3').text('入力してください')
      }else{
        $('.default01').css('border-color','')
        $('.no-product3').text('')
      }
    });
    //商品の状態
    $('.default02').on('click',function(){
      let status = $(this).val();
      if(status == 0){
        $('.default02').css('border-color','red')
        $('.no-product4').text('選択してください')
      }else{
        $('.default02').css('border-color','')
        $('.no-product4').text('')
      }
    });
    $('.default02').on('change',function(){
      let status = $(this).val();
      if(status == 0){
        $('.default02').css('border-color','red')
        $('.no-product4').text('選択してください')
      }else{
        $('.default02').css('border-color','')
        $('.no-product4').text('')
      }
    });
    //配送料の負担
    $('.default03').on('click',function(){
      let send_price = $(this).val();
      if(send_price == 0){
        $('.default03').css('border-color','red')
        $('.no-product5').text('選択してください')
      }else{
        $('.default03').css('border-color','')
        $('.no-product5').text('')
      }
    });
    $('.default03').on('change',function(){
      let send_price = $(this).val();
      if(send_price == 0){
        $('.default03').css('border-color','red')
        $('.no-product5').text('選択してください')
      }else{
        $('.default03').css('border-color','')
        $('.no-product5').text('')
      }
    });
    //発送元の地域
    $('.signup-main__prefecture').on('click',function(){
      let shipping = $(this).val();
      if(shipping == 0){
        $('.signup-main__prefecture').css('border-color','red')
        $('.no-product6').text('選択してください')
      }else{
        $('.signup-main__prefecture').css('border-color','')
        $('.no-product6').text('')
      }
    });
    $('.signup-main__prefecture').on('change',function(){
      let shipping = $(this).val();
      if(shipping == 0){
        $('.signup-main__prefecture').css('border-color','red')
        $('.no-product6').text('選択してください')
      }else{
        $('.signup-main__prefecture').css('border-color','')
        $('.no-product6').text('')
      }
    });
    //発送までの日数
    $('.default05').on('click',function(){
      let ship_day = $(this).val();
      if(ship_day == 0){
        $('.default05').css('border-color','red')
        $('.no-product7').text('選択してください')
      }else{
        $('.default05').css('border-color','')
        $('.no-product7').text('')
      }
    });
    $('.default05').on('change',function(){
      let ship_day = $(this).val();
      if(ship_day == 0){
        $('.default05').css('border-color','red')
        $('.no-product7').text('選択してください')
      }else{
        $('.default05').css('border-color','')
        $('.no-product7').text('')
      }
    });
//販売価格
    $( '.tk-price' ).on('click', function(){
      let price = $(this).val();
      if( price == 0){
        $('.tk-price').css('border-color','red')
        $('.no-product2').text('300以上9999999以下で入力してください')
      }else{
        $('.tk-price').css('border-color','')
        $('.no-product2').text('')
      }
    });
  });
});