window.addEventListener("load", function(){
  $(function(){

    var buildPrompt = `<option value>---</option>`
    var buildHtmlOption = function(parent) {
        var option = `<option value ="${parent.id}">${parent.name}</option>`
        return option
    }
    $( '.input-default' ).on('click', function(){
      let name = $(this).val();
      if(name == 0){
        $('.input-default').css('border-color','red')
        $('.no-product-name').text('入力してください')
      }else{
        $('.input-default').css('border-color','')
        $('.no-product-name').text('')
$(function(){
  //DataTransferオブジェクトで、データを格納する箱を作る
  let dataBox = new DataTransfer();
  //querySelectorでfile_fieldを取得
  let file_field = document.querySelector('input[type=file]')
  //fileが選択された時に発火するイベント
  $('#img-file').change(function(){
    //選択したfileのオブジェクトをpropで取得
    let files = $('input[type="file"]').prop('files')[0];
    $.each(this.files, function(i, file){
      //FileReaderのreadAsDataURLで指定したFileオブジェクトを読み込む
      let fileReader = new FileReader();
      //DataTransferオブジェクトに対して、fileを追加
      dataBox.items.add(file)
      //DataTransferオブジェクトに入ったfile一覧をfile_fieldの中に代入
      file_field.files = dataBox.files
       //lengthで要素の数を取得
      let num = $('.item-image').length + 1 + i
      fileReader.readAsDataURL(file);
      //画像が10枚になったら超えたらドロップボックスを削除する
      if (num == 10){
        $('#image-box__container').css('display', 'none')   
      }
      fileReader.onloadend = function() {
        let src = fileReader.result
        let html= `<div class='item-image' data-image="${file.name}">
                    <div class=' item-image__content'>
                      <div class='item-image__content--icon'>
                        <img src=${src} width="114" height="80" >
                      </div>
                    </div>
                    <div class='item-image__operetion'>
                      <div class='item-image__operetion--delete'>削除</div>
                    </div>
                  </div>`
        //image_box__container要素の前にhtmlを差し込む
        $('#image-box__container').before(html);
      };
      //image-box__containerのクラスを変更し、CSSでドロップボックスの大きさを変えてやる。
      $('#image-box__container').attr('class', `item-box item-num-${num}`)
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
      // カテゴリーのjs実装
    // $('.select-default').on('click',function(){
    //   let description = $(this).val();
    //   console.log("aaa")
    //   if(description == 0){
    //     $('.textarea-default').css('border-color','red')
    //     $('.no-product2').text('入力してください')
    //   }else{
    //     $('textarea-default').css('border-color','')
    //     $('.no-product2').text('')
    //   }
    // });
    // $('.textarea-default').on('change',function(){
    //   let description = $(this).val();
    //   if(description == 0){
    //     $('.textarea-default').css('border-color','red')
    //     $('.no-product2').text('入力してください')
    //   }else{
    //     $('.textarea-default').css('border-color','')
    //     $('.no-product2').text('')
    //   }
    // });
    
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
    // $('.default03').on('click',function(){
    //   let send_price = $(this).val();
    //   if(send_price == 0){
    //     $('.default03').css('border-color','red')
    //     $('.no-product5').text('選択してください')
    //   }else{
    //     $('.default03').css('border-color','')
    //     $('.no-product5').text('')
    //   }
    // });
    // $('.default03').on('change',function(){
    //   let send_price = $(this).val();
    //   if(send_price == 0){
    //     $('.default03').css('border-color','red')
    //     $('.no-product5').text('選択してください')
    //   }else{
    //     $('.default03').css('border-color','')
    //     $('.no-product5').text('')
    //   }
    // });
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
    $( '.tk-price' ).on('change',function(){
      let price = $(this).val();
      if( price == 0){
        $('.tk-price').css('border-color','red')
        $('.no-product2').text('300以上9999999以下で入力してください')
      }else{
        $('.tk-price').css('border-color','')
        $('.no-product2').text('')
      }
    });

    // カテゴリ選択
    $('#parent').change(function() {
      let parent_id = $(this).val();
      $.ajax({
        type: 'GET',
        url: '/products/new/mid_category',
        data: {big_category_id: parent_id},
        dataType: 'json'
      })
      .done(function(parent) {
        $('.child').css('display', 'block');
        $('#child').empty();
        $('.grand_child').css('display', 'none');
        $('#child').append(buildPrompt);

        parent.forEach(function(child) {
          var html_option = buildHtmlOption(child);
          $('#child').append(html_option);
        });
        
      })
      .fail(function() {
        alert('aaaa')
      });
  });
  
  $(this).on("change", "#child", function() {
    let parent_id = $("#parent").val();  
    let child_id = $("#child").val();
    
    $.ajax({
        type: 'GET',
        url: '/products/new/small_category',
        data: {
          big_category_id: parent_id,
          mid_category_id: child_id
        },
        dataType: 'json'
    })
    .done(function(parent) {
        $('.grand_child').css('display', 'block');
        $('#grand_child').empty();
        $('#grand_child').append(buildPrompt);

        parent.forEach(function(child) {
          var html_option = buildHtmlOption(child);
          $('#grand_child').append(html_option);
        });
      })
      .fail(function() {
        alert('bbbbbb')
      });
  });

  });
  //削除ボタンをクリックすると発火するイベント
  $(document).on("click", '.item-image__operetion--delete', function(){
    //プレビュー要素を取得
    let target_image = $(this).parent().parent()
    //削除を押されたプレビューimageのfile名を取得
    let target_name = $(target_image).data('image')
    //プレビューがひとつだけの場合、file_fieldをクリア
    if(file_field.files.length==1){
      //inputタグに入ったファイルを削除
      $('input[type=file]').val(null)
      dataBox.clearData();
      console.log(dataBox)
    }else{
      //プレビューが複数の場合
      $.each(file_field.files, function(i,input){
        //削除を押された要素と一致した時、index番号に基づいてdataBoxに格納された要素を削除する
        if(input.name==target_name){
          dataBox.items.remove(i) 
        }
      })
      //DataTransferオブジェクトに入ったfile一覧をfile_fieldの中に再度代入
      file_field.files = dataBox.files
    }
    //プレビューを削除
    target_image.remove()
    //image-box__containerクラスをもつdivタグのクラスを削除のたびに変更
    let num = $('.item-image').length
    $('#image-box__container').show()
    $('#image-box__container').attr('class', `item-box item-num-${num}`)
  });
});

