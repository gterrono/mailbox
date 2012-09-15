console.log("Listener loaded");

setTimeout(function() {
  function checkIsMail(){
  if($('#canvas_frame').contents().find('span.hP').length > 0) {
    console.log('you are looking at mail');
    var $attachments = $('#canvas_frame').contents().find('div.hq.gt');
    if($attachments.length > 0) {
      console.log('you have an attachment');
      var url = $attachments.find('span > a.e').attr('href');
      console.log(url);
      $.get(url, function(response, status, xhr) {
        console.log(response);
        console.log("xhr", xhr);
      }).error(function(e, s){console.log('error', e.status);});
    }
    return;
  }
  else {
    setTimeout(checkIsMail, 2000);
  }
  }
  checkIsMail();
}, 6000);
