console.log("Listener loaded");

setTimeout(function() {
  function checkIsMail(){
  if($('#canvas_frame').contents().find('span.hP').length > 0) {
    console.log('you are looking at mail');
    if($('#canvas_frame').contents().find('div.hq.gt').length > 0) {
      console.log('you have an attachment');
    }
    return;
  }
  else {
    setTimeout(checkIsMail, 2000);
  }
  }
  checkIsMail();
}, 6000);
