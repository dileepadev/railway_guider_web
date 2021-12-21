/*
   ------------------------------------------------------------------
       Developed by 
       Dileepa Bandara
       https://dileepabandara.github.io/F45K-8J09M21B3L-785DX-PI5AC
       ©dileepabandara.dev
       contact.dileepabandara@gmail.com
       2020
   ------------------------------------------------------------------
*/

$('#play').on('click', function (e) {
  e.preventDefault();
  $("#player")[0].src += "?autoplay=1";
  $('#player').show();
  $('#video-cover').hide();
});

$('#modal1').on('hidden.bs.modal', function (e) {
  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});