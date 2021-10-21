$('.owl-carousel').owlCarousel({
   loop:false,
   dots:false,
   nav:true,
   slideBy: 3,
   responsive:{
       0:{
           items:1,
           slideBy: 1
       },
       600:{
           items:3,
           slideBy: 2
       },
       1000:{
           items:4
       },
       1440:{  
         items:5,
         slideBy:4
     },
   }
});


