
$(document).ready(function(){
   
    $('#fade').fadeOut(1500);
   
   
    $('#spring').hover(function(){
       
       $('#the-spring-discription').show(2000);
        $('#slide-bar-spring').slideToggle(500);
        $('#fade').hide();
        $('#fade').css('z-index','-100');
        $('#fade').css('background','#FFEBEB');
        $('#fade').fadeIn(500);
       
        },function(){$('#the-spring-discription').hide(0),$('#the-spring-discription').finish(),
        $('#slide-bar-spring').hide()});

    $('#summer').hover(function(){
      
        $('#the-summer-discription').show(2000);
        $('#slide-bar-summer').slideToggle(500);
         $('#fade').hide();
         $('#fade').css('z-index','-100');
         $('#fade').css('background','#A1EAFB');
         $('#fade').fadeIn(1500);
                                   
        },function(){$('#the-summer-discription').hide(0),$('#the-summer-discription').finish(),
        $('#slide-bar-summer').hide()});

    $('#autumn').hover(function(){
        
        $('#the-autumn-discription').show(2000);
        $('#slide-bar-autumn').slideToggle(500);
        $('#fade').hide();
        $('#fade').css('z-index','-100');
        $('#fade').css('background','#FF7A5A');
        $('#fade').fadeIn(1500);
                                   
        },function(){$('#the-autumn-discription').hide(0),$('#the-autumn-discription').finish(),
        $('#slide-bar-autumn').hide()});

    $('#winter').hover(function(){
        
        $('#the-winter-discription').show(2000);
        $('#slide-bar-winter').slideToggle(500);
        $('#fade').hide();
        $('#fade').css('z-index','-100');
        $('#fade').css('background','#F2F9F1');
        $('#fade').fadeIn(1500);
                                    }, 
        function(){$('#the-winter-discription').hide(0),$('#the-winter-discription').finish(),
        $('#slide-bar-winter').hide()});


    });








