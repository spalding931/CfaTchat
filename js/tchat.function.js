
function getGif(word, cb) {
    var url = 'https://api.giphy.com/v1/gifs/search?q='+word+'&api_key=dc6zaTOxFJmzC';
    console.log(url);
    $.getJSON(url, function(data){
        var result;
        if(navigator.userAgent.search("Safari") >= 0){
        
             result = data.data[0].images.fixed_height.mp4;
        }else{
        
             result = data.data[0].images.looping.mp4;    
            
        }
        
        result = '<div gif=1 url="'+result+'"></div>'
        console.log('result',data.data[0],result);
        cb(result);
   });
}
 





function recupMessage(){
        $.post('ajax/recup.php',function(data){
            //on fous le truc tel quel
            $('.messages-box').html(data);
            // ensuite, on reparse
  
            $('.message').each(function(idx, elt){
            processMessage(elt);
            });


        }); 
    }   
        function processMessage(elt) {
            console.log("elt",elt);
            var html_msg = $(elt).html();
            console.log("MSG",html_msg);
            var foundurl = RegExp('http.*//(.*)"').exec(html_msg);
            console.log("foundurl",foundurl);
            if (foundurl != null ) {console.log("NULL");
            $(elt).html('<div style="height:5px;background-color:pink;display:none;"></div>');
            $(elt).html('<div class="message message-membre" style="display:block;width:auto; display:none;"></div>');
            var url = foundurl[0];
            if(navigator.userAgent.search("Safari") >= 0){
        
            $('<video width="auto" height="100" autoplay loop style="display:block""></video>')
            .append('<source src="'+url+'" type="video/mp4" />')
            .appendTo(elt);
            }else{
        
            $('<video width="auto" height="100" autoplay loop style="display:block""></video>')
            .append('<source src="'+url+'" type="video/mp4" />')
            .appendTo(elt);
            }
           
}

}


function send_message(msg) {
    $.post('ajax/post.php',{'message':msg});
}



$(document).ready(function() {

    recupMessage();

    $('.field-inputMessage').focus(function () {
        $(this).parent().addClass('is-focused has-label');
    });

    $('.field-inputMessage').blur(function () {
        $parent = $(this).parent();
        if ($(this).val() == '') {
            $parent.removeClass('has-label');
        }
        $parent.removeClass('is-focused');
    });

   
    $('.field-inputMessage').each(function () {
        if ($(this).val() != '') {
            $(this).parent().addClass('has-label');
        }
    });
    
    
    $('.field-inputGif').focus(function () {
        $(this).parent().addClass('is-focused has-label');
    });

    $('.field-inputGif').blur(function () {
        $parent = $(this).parent();
        if ($(this).val() == '') {
            $parent.removeClass('has-label');
        }
        $parent.removeClass('is-focused');
    });

   
    $('.field-inputGif').each(function () {
        if ($(this).val() != '') {
            $(this).parent().addClass('has-label');
        }
    });
    
    
    
    
    $('#message').keydown(function (event) {
    var keypressed = event.keyCode || event.which;
    var message = $('#message').val();
    if (keypressed == 13) {
                if(message != ''){
            $.post('ajax/post.php',{message:message},function(){
                recupMessage();
                $('#message').val('');
            });
        }
    }
    });
    
    
        $('#gifinput').keydown(function (event) {
    var keypressed = event.keyCode || event.which;
    var search = $('#gifinput').val();
    if (keypressed == 13) {
                if(search != ''){
                var search =$('#gifinput').val();
                $('#gifinput').val('');
                getGif(search,send_message);
        }
    }
    });


    $('#send').click(function(){
        var message = $('#message').val();

        if(message != ''){
            $.post('ajax/post.php',{message:message},function(){
                recupMessage();
                $('#message').val('');
            });
        }
    });

    
    $('#sendgif').on('click', function(){
        var search =$('#gifinput').val();
        getGif(search,send_message);
        
    });
    



    
    
setInterval(recupMessage,3000);

});

    



