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




    
    $(document).on('turbolinks:load', ()=> {
      // 画像用のinputを生成する関数
      const buildFileField = (num)=> {
        const html = `<div data-index="${num}" class="js-file_group">
                        <input class="js-file" type="file"
                        name="product[images_attributes][${num}][src]"
                        id="product_images_attributes_${num}_src"><br>
                        <div class="js-remove">削除</div>
                      </div>`;
        return html;
      }
      // プレビュー用のimgタグを生成する関数
      const buildImg = (index, url)=> {
        const html = `<img data-index="${index}" src="${url}" width="100px" height="100px">`;
        return html;
      }
    
      // file_fieldのnameに動的なindexをつける為の配列
      let fileIndex = [1,2,3,4,5,6,7,8,9,10];
      // 既に使われているindexを除外
      lastIndex = $('.js-file_group:last').data('index');
      fileIndex.splice(0, lastIndex);
    
      $('.hidden-destroy').hide();
    
      $('#image-box').on('change', '.js-file', function(e) {
        const targetIndex = $(this).parent().data('index');
        // ファイルのブラウザ上でのURLを取得する
        const file = e.target.files[0];
        const blobUrl = window.URL.createObjectURL(file);
    
        // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
        if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
          img.setAttribute('src', blobUrl);
        } else {  // 新規画像追加の処理
          $('#previews').append(buildImg(targetIndex, blobUrl));
          // fileIndexの先頭の数字を使ってinputを作る
          $('#image-box').append(buildFileField(fileIndex[0]));
          fileIndex.shift();
          // 末尾の数に1足した数を追加する
          fileIndex.push(fileIndex[fileIndex.length - 1] + 1);
        }
      });
    
      $('#image-box').on('click', '.js-remove', function() {
        const targetIndex = $(this).parent().data('index');
        // 該当indexを振られているチェックボックスを取得する
        const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
        // もしチェックボックスが存在すればチェックを入れる
        if (hiddenCheck) hiddenCheck.prop('checked', true);
    
        $(this).parent().remove();
        $(`img[data-index="${targetIndex}"]`).remove();
    
        // 画像入力欄が0個にならないようにしておく
        if ($('.js-file').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
      });
    });
  });
});



