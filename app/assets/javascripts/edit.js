$(document).ready(function(){
  // 画像用のinputを生成する関数
  const buildFileField2 = (num)=> {
    const html = `<div data-index="${num}" class="js-file_group4">
                    <input class="js-file2" type="file"
                    name="product[images_attributes][${num}][src]"
                    id="product_images_attributes_${num}_src"><br>
                  </div>`;
    return html;
  }
  // プレビュー用のimgタグを生成する関数
  const buildImg2 = (index, url)=> {
    const html = `<li class="adsaf">
                    <img data-index="${index}" src="${url}" class="edit_img_${index}">
                    <div data-index="${index}" class="js-remove" name="[edit_remove][${index}]">削除</div>
                  </li>
                  <input data-index="${index}" value="0" class="delete_img_${index}" type="hidden"
                  name="product[images_attributes][${index}][_destroy]" id="product_images_attributes_${index}__destroy">`;
    return html;
  }

  // file_fieldのnameに動的なindexをつける為の配列
  let fileIndex2 = [1,2,3,4,5,6,7,8,9,10];
  // 既に使われているindexを除外
  lastIndex2 = $('.js-file_group3:last').data('index');
  fileIndex2.splice(0, lastIndex2);

  $('.hidden-destroy').hide();

  $('#image-box2').on('change', '.js-file2', function(e) {
    const targetIndex2 = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);

    // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
    if (img2 = $(`img[data-index="${targetIndex2}"]`)[0]) {
      img2.setAttribute('src', blobUrl);
    } else {  // 新規画像追加の処理
      $('#previews2').append(buildImg2(targetIndex2, blobUrl));
      // fileIndexの先頭の数字を使ってinputを作る
      $('#image-box2').append(buildFileField2(fileIndex2[0]));
      fileIndex2.shift();
      // 末尾の数に1足した数を追加する
      fileIndex2.push(fileIndex2[fileIndex2.length - 1] + 1);
    }
    var count = $('.adsaf').length;
    var abcde = $('#dropArea2')
    var bbcde = $('pre')
    if (count == 5) {
      abcde.fadeOut();
      bbcde.fadeOut();
    }
  });

  $('.js-file_group3:first').on('click', function() {
    $('.js-file2:last').trigger('click');
    return false;
  });



  //画像削除した時の処理//
  $('#image-box2').on('click', '.js-remove', function() {
    var number = Number($(this).data('index'));
    //削除ボタンを押すと該当の画像が消える
    const edit_img_btn = $(`.edit_img_${number}`);
    if(edit_img_btn) edit_img_btn.remove();
    //削除ボタンを押すと削除ボタンの表記が消える
    $(this).parent().remove();
    //削除ボタンを押すと該当のinputfileが消える
    const file_field_btn = $(`#product_images_attributes_${number}_src`);
    if(file_field_btn) file_field_btn.remove(); // アップロードボタンが存在すれば削除
    //_destoryのvalue0を1に変える
    $(`.delete_img_${number}`).val('1');

    var count = $('.adsaf').length;
    var abcde = $('#dropArea2')
    var bbcde = $('pre')
    if (count == 4) {
      abcde.show();
      bbcde.show();
    }
    // 画像入力欄が0個にならないようにしておく
    if ($('.js-file2').length == 0) $('#image-box2').append(buildFileField2(fileIndex[0]));
  });



  $('#image-box2').on('change', '.js-file3', (e)=>{
    let file = e.target.files[0]
    let file_url = window.URL.createObjectURL(file);

    const getImageIndex = $('.js-file3').prev().data('index');
    const buildImg2 = (getImageIndex, url)=> {
      const html = `<li class="adsaf">
      <img data-index="${getImageIndex}" src="${file_url}" class="edit_img_${getImageIndex}">
                    <div data-index="${getImageIndex}" class="js-remove" name="[edit_remove][${getImageIndex}]">削除</div>
                  </li>
                  <input data-index="${getImageIndex}" value="0" class="delete_img_${getImageIndex}" type="hidden"
                  name="product[images_attributes][${getImageIndex}][_destroy]" id="product_images_attributes_${getImageIndex}__destroy">`;
      return html;
    }
    var html = buildImg2(getImageIndex, file_url)

    $("#previews2").append(html)
    $('.js-file3').prev().remove()
  });
});





$(document).ready(function() {
  var count = $('.adsaf').length;
  var abcde = $('#dropArea2')
  var bbcde = $('pre')
  if (count == 5) {
    abcde.hide();
    bbcde.hide();
  }
  if (count < 5) {
    abcde.show();
    bbcde.show();
  }
});
