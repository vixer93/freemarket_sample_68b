window.addEventListener("load", function(){
  $(function(){
    $( '#address_ship_family_name' ).on('click',function(){
      let address_ship_family_name = $(this).val();
      console.log(address_ship_family_name)
      if(address_ship_family_name == 0){
        $('#address_ship_family_name').css('border-color','red')
        $('.add_address_ship_family_name').text('姓を入力してください')
      }else{
        $('#address_ship_family_name').css('border-color','')
        $('.add_address_ship_family_name').text('')
      }
    });
    $( '#address_ship_family_name' ).on('change',function(){
      let address_ship_family_name = $(this).val();
      console.log(address_ship_family_name)
      if(address_ship_family_name == 0){
        $('#address_ship_family_name').css('border-color','red')
        $('.add_address_ship_family_name').text('姓を入力してください')
      }else{
        $('#address_ship_family_name').css('border-color','')
        $('.add_address_ship_family_name').text('')
      }
    });


    $( '#address_ship_first_name' ).on('click',function(){
      let address_ship_first_name = $(this).val();
      console.log(address_ship_first_name)
      if(address_ship_first_name == 0){
        $('#address_ship_first_name').css('border-color','red')
        $('.add_address_ship_first_name').text('名を入力してください')
      }else{
        $('#address_ship_first_name').css('border-color','')
        $('.add_address_ship_first_name').text('')
      }
    });
    $( '#address_ship_first_name' ).on('change',function(){
      let address_ship_first_name = $(this).val();
      console.log(address_ship_first_name)
      if(address_ship_first_name == 0){
        $('#address_ship_first_name').css('border-color','red')
        $('.add_address_ship_first_name').text('名を入力してください')
      }else{
        $('#address_ship_first_name').css('border-color','')
        $('.add_address_ship_first_name').text('')
      }
    });


    $( '#address_ship_family_name_kana' ).on('click',function(){
      let address_ship_family_name_kana = $(this).val();
      console.log(address_ship_family_name_kana)
      if(address_ship_family_name_kana == 0){
        $('#address_ship_family_name_kana').css('border-color','red')
        $('.add_address_ship_family_name_kana').text('姓カナを入力してください')
      }else{
        $('#address_ship_family_name_kana').css('border-color','')
        $('.add_address_ship_family_name_kana').text('')
      }
    });
    $( '#address_ship_family_name_kana' ).on('change',function(){
      let address_ship_family_name_kana = $(this).val();
      console.log(address_ship_family_name_kana)
      if(address_ship_family_name_kana == 0){
        $('#address_ship_family_name_kana').css('border-color','red')
        $('.add_address_ship_family_name_kana').text('姓カナを入力してください')
      }else{
        $('#address_ship_family_name_kana').css('border-color','')
        $('.add_address_ship_family_name_kana').text('')
      }
    });


    $( '#address_ship_first_name_kana' ).on('click',function(){
      let address_ship_first_name_kana = $(this).val();
      console.log(address_ship_first_name_kana)
      if(address_ship_first_name_kana == 0){
        $('#address_ship_first_name_kana').css('border-color','red')
        $('.add_address_ship_first_name_kana').text('名カナを入力してください')
      }else{
        $('#address_ship_first_name_kana').css('border-color','')
        $('.add_address_ship_first_name_kana').text('')
      }
    });
    $( '#address_ship_first_name_kana' ).on('change',function(){
      let address_ship_first_name_kana = $(this).val();
      console.log(address_ship_first_name_kana)
      if(address_ship_first_name_kana == 0){
        $('#address_ship_first_name_kana').css('border-color','red')
        $('.add_address_ship_first_name_kana').text('名カナを入力してください')
      }else{
        $('#address_ship_first_name_kana').css('border-color','')
        $('.add_address_ship_first_name_kana').text('')
      }
    });


    $( '#address_postal_code' ).on('click',function(){
      let address_postal_code = $(this).val();
      console.log(address_postal_code)
      if(address_postal_code == 0){
        $('#address_postal_code').css('border-color','red')
        $('.add_address_postal_code').text('郵便番号を入力してください')
      }else{
        $('#address_postal_code').css('border-color','')
        $('.add_address_postal_code').text('')
      }
    });
    $( '#address_postal_code' ).on('change',function(){
      let address_postal_code = $(this).val();
      console.log(address_postal_code)
      if(address_postal_code == 0){
        $('#address_postal_code').css('border-color','red')
        $('.add_address_postal_code').text('郵便番号を入力してください')
      }else{
        $('#address_postal_code').css('border-color','')
        $('.add_address_postal_code').text('')
      }
    });


    $( '#address_prefecture_id' ).on('click',function(){
      let address_prefecture_id = $(this).val();
      console.log(address_prefecture_id)
      if(address_prefecture_id == 0){
        $('#address_prefecture_id').css('border-color','red')
        $('.add_address_prefecture_id').text('都道府県を選択してください')
      }else{
        $('#address_prefecture_id').css('border-color','')
        $('.add_address_prefecture_id').text('')
      }
    });
    $( '#address_prefecture_id' ).on('change',function(){
      let address_prefecture_id = $(this).val();
      console.log(address_prefecture_id)
      if(address_prefecture_id == 0){
        $('#address_prefecture_id').css('border-color','red')
        $('.add_address_prefecture_id').text('都道府県を選択してください')
      }else{
        $('#address_prefecture_id').css('border-color','')
        $('.add_address_prefecture_id').text('')
      }
    });


    $( '#address_municipality' ).on('click',function(){
      let address_municipality = $(this).val();
      console.log(address_municipality)
      if(address_municipality == 0){
        $('#address_municipality').css('border-color','red')
        $('.add_address_municipality').text('市区町村を入力してください')
      }else{
        $('#address_municipality').css('border-color','')
        $('.add_address_municipality').text('')
      }
    });
    $( '#address_municipality' ).on('change',function(){
      let address_municipality = $(this).val();
      console.log(address_municipality)
      if(address_municipality == 0){
        $('#address_municipality').css('border-color','red')
        $('.add_address_municipality').text('市区町村を入力してください')
      }else{
        $('#address_municipality').css('border-color','')
        $('.add_address_municipality').text('')
      }
    });


    $( '#address_block_number' ).on('click',function(){
      let address_block_number = $(this).val();
      console.log(address_block_number)
      if(address_block_number == 0){
        $('#address_block_number').css('border-color','red')
        $('.add_address_block_number').text('番地を入力してください')
      }else{
        $('#address_block_number').css('border-color','')
        $('.add_address_block_number').text('')
      }
    });
    $( '#address_block_number' ).on('change',function(){
      let address_block_number = $(this).val();
      console.log(address_block_number)
      if(address_block_number == 0){
        $('#address_block_number').css('border-color','red')
        $('.add_address_block_number').text('番地を入力してください')
      }else{
        $('#address_block_number').css('border-color','')
        $('.add_address_block_number').text('')
      }
    });
  });
});