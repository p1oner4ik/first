



///Сообщения
  $(function () {
    var asideUlHeight = window.screen.height;
asideUlHeight = asideUlHeight -110;
$('section').css('height', asideUlHeight - 60);
$('aside').css('height', asideUlHeight - 60);
$(' aside ul').css('height', asideUlHeight - 200);
$('.notes').css('height', asideUlHeight - 260);
$('.notes ul').css('height', asideUlHeight - 230);

$('.avaChage i').on('click' ,function(){
  var avaImages = $('.avaImages').css('display');
  if (avaImages = 'none') {
    $('.avaImages').css('display', 'flex');
  }
});
var avaSrc = "img/users/user1.jpg";
var avaServ = "img/users/user1.jpg";
$('.avaImages img').on('click', function(){
  avaSrc = $(this).attr('src');
  $(this).parent().css('display', 'none');
});

    var socket = io();
    $('form').submit(function(){
      ///отправка никнейма и сообщения
      var nickname = $('#nickname').val();
      var massage = $('#massageId').val();
      socket.emit('nickname', $('#nickname').val());
      socket.emit('chat message', $('#massageId').val());
      socket.emit('chat avaSrc', avaSrc);
      $('#massageId').val('');
      return false;
    });
    var nickname = "";
    socket.on('nickname', function(msg){
    nickname = msg;
    });
    socket.on('chat avaSrc', function(msg){
        avaServ = msg; 
    });
    socket.on('chat message', function(msg){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = "0"+minutes
    }
    var audio = true;
      $('.notes ul').append($('<li>').html(`
            <div class="massage">
                            <div class="massage-user">
                                <img src="`+avaServ+`" alt="user1">
                                <h3>`+nickname+`</h3>
                            </div>
                            <div class="massage-text">
                                `+msg+` 
                            </div>
                            <div class="date">`+hours+`:`+minutes+`</div>
                            <audio src="Sound_08537.mp3" autoplay="`+audio+`"></audio>
                            </div>
                         `));
      $('.notes').scrollTop( 999999 );
    });
  });

$('.notes').scrollTop( 999999 );


