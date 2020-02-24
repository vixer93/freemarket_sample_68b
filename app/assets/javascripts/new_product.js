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

      var num = $('.item-image').length + 1 + i
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
                        <img src=${src} width="150" height="100" >
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
      $('#image-box__container').attr('class', `item-num-${num}`)
    });
  });
  //削除ボタンをクリックすると発火するイベント
  $(document).on("click", '.item-image__operetion--delete', function(){
    //プレビュー要素を取得
    var target_image = $(this).parent().parent()
    //プレビューを削除
    target_image.remove();
    //inputタグに入ったファイルを削除
    file_field.val("")
  })
});


// window.addEventListener("load", function(){
//   $(function(){
//     //商品名
//     $( '.input-default' ).on('click', function(){
//       let name = $(this).val();
//       if(name == 0){
//         $('.input-default').css('border-color','red')
//         $('.no-product-name').text('入力してください')
//       }else{
//         $('.input-default').css('border-color','')
//         $('.no-product-name').text('')
//       }
//     });
//     $( '.input-default' ).on('change',function(){
//       let name = $(this).val();
//       if(name == 0){
//         $('.input-default').css('border-color','red')
//         $('.no-product-name').text('入力してください')
//       }else{
//         $('.input-default').css('border-color','')
//         $('.no-product-name').text('')
//       }
//     });
//     //商品の説明
//     $('.textarea-default').on('click',function(){
//       let description = $(this).val();
//       if(description == 0){
//         $('.textarea-default').css('border-color','red')
//         $('.no-product2').text('入力してください')
//       }else{
//         $('textarea-default').css('border-color','')
//         $('.no-product2').text('')
//       }
//     });
//     $('.textarea-default').on('change',function(){
//       let description = $(this).val();
//       if(description == 0){
//         $('.textarea-default').css('border-color','red')
//         $('.no-product2').text('入力してください')
//       }else{
//         $('.textarea-default').css('border-color','')
//         $('.no-product2').text('')
//       }
//     });
//       // カテゴリー
//     $('.select-default').on('click',function(){
//       let category = $(this).val();
//       if(category == 0){
//         $('.default01').css('border-color','red')
//         $('.no-product3').text('入力してください')
//       }else{
//         $('default01').css('border-color','')
//         $('.no-product3').text('')
//       }
//     });
//     $('.default01').on('change',function(){
//       let category = $(this).val();
//       if(category == 0){
//         $('.default01').css('border-color','red')
//         $('.no-product3').text('入力してください')
//       }else{
//         $('.default01').css('border-color','')
//         $('.no-product3').text('')
//       }
//     });
//     //商品の状態
//     $('.default02').on('click',function(){
//       let status = $(this).val();
//       if(status == 0){
//         $('.default02').css('border-color','red')
//         $('.no-product4').text('選択してください')
//       }else{
//         $('.default02').css('border-color','')
//         $('.no-product4').text('')
//       }
//     });
//     $('.default02').on('change',function(){
//       let status = $(this).val();
//       if(status == 0){
//         $('.default02').css('border-color','red')
//         $('.no-product4').text('選択してください')
//       }else{
//         $('.default02').css('border-color','')
//         $('.no-product4').text('')
//       }
//     });
//     //配送料の負担
//     $('.default03').on('click',function(){
//       let send_price = $(this).val();
//       if(send_price == 0){
//         $('.default03').css('border-color','red')
//         $('.no-product5').text('選択してください')
//       }else{
//         $('.default03').css('border-color','')
//         $('.no-product5').text('')
//       }
//     });
//     $('.default03').on('change',function(){
//       let send_price = $(this).val();
//       if(send_price == 0){
//         $('.default03').css('border-color','red')
//         $('.no-product5').text('選択してください')
//       }else{
//         $('.default03').css('border-color','')
//         $('.no-product5').text('')
//       }
//     });
//     //発送元の地域
//     $('.signup-main__prefecture').on('click',function(){
//       let shipping = $(this).val();
//       if(shipping == 0){
//         $('.signup-main__prefecture').css('border-color','red')
//         $('.no-product6').text('選択してください')
//       }else{
//         $('.signup-main__prefecture').css('border-color','')
//         $('.no-product6').text('')
//       }
//     });
//     $('.signup-main__prefecture').on('change',function(){
//       let shipping = $(this).val();
//       if(shipping == 0){
//         $('.signup-main__prefecture').css('border-color','red')
//         $('.no-product6').text('選択してください')
//       }else{
//         $('.signup-main__prefecture').css('border-color','')
//         $('.no-product6').text('')
//       }
//     });
//     //発送までの日数
//     $('.default05').on('click',function(){
//       let ship_day = $(this).val();
//       if(ship_day == 0){
//         $('.default05').css('border-color','red')
//         $('.no-product7').text('選択してください')
//       }else{
//         $('.default05').css('border-color','')
//         $('.no-product7').text('')
//       }
//     });
//     $('.default05').on('change',function(){
//       let ship_day = $(this).val();
//       if(ship_day == 0){
//         $('.default05').css('border-color','red')
//         $('.no-product7').text('選択してください')
//       }else{
//         $('.default05').css('border-color','')
//         $('.no-product7').text('')
//       }
//     });
// //販売価格
//     $( '.tk-price' ).on('click', function(){
//       let price = $(this).val();
//       if( price == 0){
//         $('.tk-price').css('border-color','red')
//         $('.no-product2').text('300以上9999999以下で入力してください')
//       }else{
//         $('.tk-price').css('border-color','')
//         $('.no-product2').text('')
//       }
//     });  
//   });
//   // $(document).on('turbolinks:load', ()=> {
//   //   // 画像用のinputを生成する関数
//   //   const buildFileField = (num)=> {
//   //     const html = `<div data-index="${num}" class="sell-upload-drop-box">
//   //                     <input class="sell-upload-drop-file" type="file"
//   //                     name="product[images_attributes][${num}][name]"
//   //                     id="product_images_attributes_${num}_"><br>
//   //                     <div class="js-remove">削除</div>                      
//   //                   </div>`;
//   //     return html;
//   //   }
//   //   // プレビュー用のimgタグを生成する関数
//   //   const buildImg = (index, url)=> {
//   //     const html = `<img data-index="${index}" name="${url}" width="100px" height="100px">`;
//   //     return html;
//   //   }
    
//   //   // file_fieldのnameに動的なindexをつける為の配列
//   //   let fileIndex = [1,2,3,4,5,6,7,8,9,10];
//   //   // 既に使われているindexを除外
//   //   lastIndex = $('.sell-upload-drop-file:last').data('index');
//   //   fileIndex.splice(0, lastIndex);
  
//   //   $('.hidden-destroy').hide();
  
//   //   $('#image-box').on('change', '.sell-upload-drop-file', function(e) {
//   //     const targetIndex = $(this).parent().data('index');
//   //     // ファイルのブラウザ上でのURLを取得する
//   //     const file = e.target.files[0];
//   //     const blobUrl = window.URL.createObjectURL(file);
  
//   //     // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
//   //     if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
//   //       img.setAttribute('name', blobUrl);
//   //     } else {  // 新規画像追加の処理
//   //       $('#previews').append(buildImg(targetIndex, blobUrl));
//   //       // fileIndexの先頭の数字を使ってinputを作る
//   //       $('#image-box').append(buildFileField(fileIndex[0]));
//   //       fileIndex.shift();
//   //       // 末尾の数に1足した数を追加する
//   //       fileIndex.push(fileIndex[fileIndex.length - 1] + 1);
//   //     }
//   //   });
  
//   //   $('#image-box').on('click', '.js-remove', function() {
//   //     const targetIndex = $(this).parent().data('index');
//   //     // 該当indexを振られているチェックボックスを取得する
//   //     const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
//   //     // もしチェックボックスが存在すればチェックを入れる
//   //     if (hiddenCheck) hiddenCheck.prop('checked', true);
  
//   //     $(this).parent().remove();
//   //     $(`img[data-index="${targetIndex}"]`).remove();
  
//   //     // 画像入力欄が0個にならないようにしておく
//   //     if ($('.sell-upload-drop-file').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
//   //   });
//   // });
// });



