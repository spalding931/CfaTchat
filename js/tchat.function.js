
function getGif(word, cb) {
    var url = 'https://api.giphy.com/v1/gifs/search?q='+word+'&api_key=dc6zaTOxFJmzC';
    console.log(url);
    $.getJSON(url, function(data){
        var result = data.data[0].images.looping.mp4;
        result = '<div gif=1 url="'+result+'"></div>'
        console.log('result',data.data[0],result);
        cb(result);
   });
}


    function getGif(word, cb) {
    var url = 'https://api.giphy.com/v1/gifs/search?q='+word+'&api_key=dc6zaTOxFJmzC';
    console.log(url);
    $.getJSON(url, function(data){
        var result = data.data[0].images.looping.mp4;
        result = '<div gif=1 url="'+result+'"></div>'
        console.log('result',data.data[0],result);
        cb(result);
    
   });
    }   



    function add_vid(url) {
    var video = $('<video width="640" height="264" autoplay loop></video>')
            .append('<source src="'+url+'" type="video/mp4" />')
            .appendTo($('.messages-box'));
            alert('coucou');
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
           $('<video width="auto" height="100" autoplay loop style="display:block""></video>')
            .append('<source src="'+url+'" type="video/mp4" />')
            .appendTo(elt);
}

}


function send_message(msg) {
    $.post('ajax/post.php',{'message':msg});
}



$(document).ready(function() {

    recupMessage();

    $('.field-input').focus(function () {
        $(this).parent().addClass('is-focused has-label');
    });

    // à la perte du focus
    $('.field-input').blur(function () {
        $parent = $(this).parent();
        if ($(this).val() == '') {
            $parent.removeClass('has-label');
        }
        $parent.removeClass('is-focused');
    });

    // si un champs est rempli on rajoute directement la class has-label
    $('.field-input').each(function () {
        if ($(this).val() != '') {
            $(this).parent().addClass('has-label');
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
    



    
    
setInterval(recupMessage,1500);

});

    



