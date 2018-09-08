//Jquery used to animate website

//title
$(document).ready(function() {
    $('.landing').fadeIn(1000);
});

//navbar

window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};
