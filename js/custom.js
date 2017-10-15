$(document).ready(function(){
      
      $('.carousel.carousel-slider').carousel({full_width: true});

  $('.collapsible').collapsible({
  	accordion:true
  });
$('.button-collapse-1').sideNav({
      menuWidth: 300, // Default is 240
      closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );

$('.button-collapse-2').sideNav({
      menuWidth: 300, // Default is 240
      closeOnClick: false,
      edge:"right", // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
 
  		 $(".close-1").sideNav('hide');

   $(".close-2").sideNav('hide');


      
      });
      



      

setInterval(function(){
  $('.carousel').carousel('next');
}, 5000);

 