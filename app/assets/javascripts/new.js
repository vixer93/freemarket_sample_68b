window.addEventListener("load", function(){
  $(function(){
    $( '#user_nickname' ).on('click', function(){
      let nickname = $(this).val();

      if(nickname == 0){
        $('#user_nickname').css('border-color','red')
        $('.add_nickname').text('ニックネームを入力してください')
      }else{
        $('#user_nickname').css('border-color','')
        $('.add_nickname').text('')
      }
    });
    $( '#user_nickname' ).on('change',function(){
      let nickname = $(this).val();
      if(nickname == 0){
        $('#user_nickname').css('border-color','red')
        $('.add_nickname').text('姓を入力してください')
      }else{
        $('#user_nickname').css('border-color','')
        $('.add_nickname').text('')
      }
    });

    $( '#user_email' ).on('click',function(){
      let email = $(this).val();
      if(email == 0){
        $('#user_email').css('border-color','red')
        $('.add_email').text('メールアドレスを入力してください')
      }else{
        $('#user_email').css('border-color','')
        $('.add_email').text('')
      }
    });
    $( '#user_email' ).on('change',function(){
      let email = $(this).val();
      if(email == 0){
        $('#user_email').css('border-color','red')
        $('.add_email').text('メールアドレスを入力してください')
      }else{
        $('#user_email').css('border-color','')
        $('.add_email').text('')
      }
    });

    $( '#user_password' ).on('click',function(){
      let password = $(this).val();
      if(password == 0){
        $('#user_password').css('border-color','red')
        $('.add_password').text('パスワードを入力してください')
      }else{
        $('#user_password').css('border-color','')
        $('.add_password').text('')
      }
    });
    $( '#user_password' ).on('change',function(){
      let password = $(this).val();
      if(password == 0){
        $('#user_password').css('border-color','red')
        $('.add_password').text('パスワードを入力してください')
      }else{
        $('#user_password').css('border-color','')
        $('.add_password').text('')
      }
    });

    $( '#user_password_confirmation' ).on('click',function(){
      let password_confirmation = $(this).val();
      if(password_confirmation == 0){
        $('#user_password_confirmation').css('border-color','red')
        $('.add_password-confirmation').text('確認用パスワードを入力してください')
      }else{
        $('#user_password_confirmation').css('border-color','')
        $('.add_password-confirmation').text('')
      }
    });
    $( '#user_password_confirmation' ).on('change',function(){
      let password_confirmation = $(this).val();
      if(password_confirmation == 0){
        $('#user_password_confirmation').css('border-color','red')
        $('.add_password-confirmation').text('確認用パスワードを入力してください')
      }else{
        $('#user_password_confirmation').css('border-color','')
        $('.add_password-confirmation').text('')
      }
    });

    $( '#user_last_name' ).on('click',function(){
      let last_name = $(this).val();
      if(last_name == 0){
        $('#user_last_name').css('border-color','red')
        $('.add_last_name').text('姓を入力してください')
      }else{
        $('#user_last_name').css('border-color','')
        $('.add_last_name').text('')
      }
    });
    $( '#user_last_name' ).on('change',function(){
      let last_name = $(this).val();
      if(last_name == 0){
        $('#user_last_name').css('border-color','red')
        $('.add_last_name').text('姓を入力してください')
      }else{
        $('#user_last_name').css('border-color','')
        $('.add_last_name').text('')
      }
    });

    $( '#user_first_name' ).on('click',function(){
      let first_name = $(this).val();
      if(first_name == 0){
        $('#user_first_name').css('border-color','red')
        $('.add_first_name').text('名前を入力してください')
      }else{
        $('#user_first_name').css('border-color','')
        $('.add_first_name').text('')
      }
    });
    $( '#user_first_name' ).on('change',function(){
      let first_name = $(this).val();
      if(first_name == 0){
        $('#user_first_name').css('border-color','red')
        $('.add_first_name').text('名前を入力してください')
      }else{
        $('#user_first_name').css('border-color','')
        $('.add_first_name').text('')
      }
    });

    $( '#user_last_name_kana' ).on('click',function(){
      let last_name_kana = $(this).val();
      if(last_name_kana == 0){
        $('#user_last_name_kana').css('border-color','red')
        $('.add_last_name_kana').text('姓カナを入力してください')
      }else{
        $('#user_last_name_kana').css('border-color','')
        $('.add_last_name_kana').text('')
      }
    });
    $( '#user_last_name_kana' ).on('change',function(){
      let last_name_kana = $(this).val();
      if(last_name_kana == 0){
        $('#user_last_name_kana').css('border-color','red')
        $('.add_last_name_kana').text('姓カナを入力してください')
      }else{
        $('#user_last_name_kana').css('border-color','')
        $('.add_last_name_kana').text('')
      }
    });

    $( '#user_first_name_kana' ).on('click',function(){
      let first_name_kana = $(this).val();
      if(first_name_kana == 0){
        $('#user_first_name_kana').css('border-color','red')
        $('.add_first_name_kana').text('名カナを入力してください')
      }else{
        $('#user_first_name_kana').css('border-color','')
        $('.add_first_name_kana').text('')
      }
    });
    $( '#user_first_name_kana' ).on('change',function(){
      let first_name_kana = $(this).val();
      if(first_name_kana == 0){
        $('#user_first_name_kana').css('border-color','red')
        $('.add_first_name_kana').text('名カナを入力してください')
      }else{
        $('#user_first_name_kana').css('border-color','')
        $('.add_first_name_kana').text('')
      }
    });

    $( '#user_birthday_1i' ).on('click',function(){
      let user_birthday_1i = $(this).val();
      if(user_birthday_1i == 0){
        $('#user_birthday_1i').css('border-color','red')
        $('.add_user-1').text('生年月日を入力してください')
      }else if('#user_birthday_1i' != 0 && '#user_birthday_2i' != 0 && '#user_birthday_3i' != 0){
        $('.add_user-1').text('')
        $('#user_birthday_1i').css('border-color','')
      }else{
        alert("error")
      }
    });
    $( '#user_birthday_1i' ).on('change',function(){
      let user_birthday_1i = $(this).val();
      if(user_birthday_1i == 0){
        $('#user_birthday_1i').css('border-color','red')
        $('.add_user-1').text('生年月日を入力してください')
      }else if('#user_birthday_1i' != 0 && '#user_birthday_2i' != 0 && '#user_birthday_3i' != 0){
        $('.add_user-1').text('')
        $('#user_birthday_1i').css('border-color','')
      }else{
        alert("error")
      }
    });

    $( '#user_birthday_2i' ).click(function(){
      let user_birthday_2i = $(this).val();
      if(user_birthday_2i == 0){
        $('#user_birthday_2i').css('border-color','red')
        $('.add_user-2').text('生年月日を入力してください')
      }else if('#user_birthday_1i' != 0 && '#user_birthday_2i' != 0 && '#user_birthday_3i' != 0){
        $('.add_user-2').text('')
        $('#user_birthday_2i').css('border-color','')
      }else{
        alert("error")
      }
    });
    $( '#user_birthday_2i' ).on('change',function(){
      let user_birthday_2i = $(this).val();
      if(user_birthday_2i == 0){
        $('#user_birthday_2i').css('border-color','red')
        $('.add_user-2').text('生年月日を入力してください')
      }else if('#user_birthday_1i' != 0 && '#user_birthday_2i' != 0 && '#user_birthday_3i' != 0){
        $('.add_user-2').text('')
        $('#user_birthday_2i').css('border-color','')
      }else{
        alert("error")
      }
    });

    $( '#user_birthday_3i' ).on('click',function(){
      let user_birthday_3i = $(this).val();
      if(user_birthday_3i == 0){
        $('#user_birthday_3i').css('border-color','red')
        $('.add_user-3').text('生年月日を入力してください')
      }else if('#user_birthday_1i' != 0 && '#user_birthday_2i' != 0 && '#user_birthday_3i' != 0){
        $('.add_user-3').text('')
        $('#user_birthday_3i').css('border-color','')
      }else{
        alert("error")
      }
    });
    $( '#user_birthday_3i' ).on('change',function(){
      let user_birthday_3i = $(this).val();
      if(user_birthday_3i == 0){
        $('#user_birthday_3i').css('border-color','red')
        $('.add_user-3').text('生年月日を入力してください')
      }else if('#user_birthday_1i' != 0 && '#user_birthday_2i' != 0 && '#user_birthday_3i' != 0){
        $('.add_user-3').text('')
        $('#user_birthday_3i').css('border-color','')
      }else{
        alert("error")
      }
    });
  });
});