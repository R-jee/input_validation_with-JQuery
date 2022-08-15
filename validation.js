$("#close___model__btn__id_1").on('click', function() {
            location.reload();
});
$("#close___model__btn__id_2").on('click', function() {
            location.reload();
});
jQuery('#feed-name-input-id').keyup(function() {
            this.value = this.value.replace(/[^0-9a-zA-Z\-\_]/g, '');
});
jQuery('#name').keyup(function() {
            this.value = this.value.replace(/[^0-9a-zA-Z\s\_]/g, '');
});
jQuery('#phone').keyup(function() {
            this.value = this.value.replace(/^\d{5}$/g, '');
});



jQuery('#email').on("input", function() {
        var email = $('#email').val();
        if(IsEmail(email)==false){
          $('#invalid_email').show();
          return false;
        }else{
            $('#invalid_email').hide();
        }
    });
    
    jQuery('#phone').on("input", function() {
        var phone = $('#phone').val();
        if(phone == ''){
          $('#invalid_phone').show();
          return false;
        }else{
            $('#invalid_phone').hide();
        }
        if(phone.length == 9){
            $('#invalid_phone').hide();
        }else{
            $('#invalid_phone').show();
            return false;
        }
    });


//   create span in input field like this --->   <span class="error" id="invalid_name">Name is invalid</span>
jQuery('#name').on("input",function() {
        if( $(this).length != 0 ){
            $('#invalid_name').hide();
        }
        if( $(this).length == 0 ){
            $('#invalid_name').show();
        }
        this.value = this.value.replace(/[^0-9a-zA-Z\s\_]/g, '');
    });
    jQuery('#email').on("input", function() {
        var email = $('#email').val();
        if(IsEmail(email)==false){
          $('#invalid_email').show();
          return false;
        }else{
            $('#invalid_email').hide();
        }
    });
    
    jQuery('#phone').on("input", function() {
        var phone = $('#phone').val();
        if(phone == ''){
          $('#invalid_phone').show();
          return false;
        }else{
            $('#invalid_phone').hide();
        }
        if(phone.length == 9){
            $('#invalid_phone').hide();
        }else{
            $('#invalid_phone').show();
            return false;
        }
    });
    

    $("#contact100-form-btn_id").on('click', function(){

        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();

        if(name== ''){
          $('#invalid_name').show();
          return false;
        }else{
            $('#invalid_name').hide();
        }
        
        

        if(email== ''){
            $('#invalid_email').show();
            return false;
        }else{
            $('#invalid_email').hide();
        }

        if(IsEmail(email)==false){
          $('#invalid_email').show();
          return false;
        }else{
            $('#invalid_email').hide();
        }

        if(phone == ''){
          $('#invalid_phone').show();
          return false;
        }else{
            $('#invalid_phone').hide();
        }
        if(phone.length == 9){
            $('#invalid_phone').hide();
        }else{
            $('#invalid_phone').show();
            return false;
        }
        
        //     $("#contact100-form__id").submit(function(e){
        //         e.preventDefault();
        $.ajax({
            'url': "https://adonisgear.com.au/wp-content/klaviyo_integration.php",
            'method': "post",
            'data':{
                    'name' : $("#name").val(),
                    'email' : $("#email").val(),
                    'phone' : window.intlTelInputGlobals.getInstance(input).getNumber()
                }
        });
        //         // $("#contact100-form__id").submit();
    
        //     });
    });



    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
            return false;
        }else{
            return true;
        }
    }
    
