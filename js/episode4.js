var bbody = document.querySelector('body');
window.onhashchange = function(e){
  openTarget(e);
}

function openTarget(e){
  if(window.location.hash) {
    if(window.location.hash == '#why-does-this-page-look-like-this%3F') {
      var ttarget = document.getElementById('why-does-this-page-look-like-this%3F');
      ttarget.parentNode.setAttribute('open','open');
      ttarget.scrollIntoView();
    }
    if(window.location.hash == '#body') {
      var ddetails = document.querySelectorAll('details');
      var i = 0;
      while(i < ddetails.length) {
        ddetails[i].setAttribute('open','open');
        i++;
      }
    }
  }
}
openTarget();
