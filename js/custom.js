$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({full_width: true});
    $('.collapsible').collapsible({
       accordion:true
    });
  
  $('.button-collapse-1').sideNav({
      menuWidth: 300, 
        closeOnClick: false 
    });

  $('.button-collapse-2').sideNav({
        menuWidth: 300, 
        closeOnClick: false,
        edge:"right",
    });
  
  $('.button-collapse-3').sideNav({
        menuWidth: 300, 
        closeOnClick: false,
        edge:"right",
    });
 
    $(".close-1").sideNav('hide');

    $(".close-2").sideNav('hide');
      $(".close-3").sideNav('hide');
  });
      
  setInterval(function(){
      $('.carousel').carousel('next');
  }, 5000);

 