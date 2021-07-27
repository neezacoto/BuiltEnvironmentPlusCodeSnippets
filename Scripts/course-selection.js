<style>

 .show-testimonial {
visibility: visible !important;
opacity: 1 !important;
top: 0 !important;
}
 
.testimonial-active {
transform: translateX(-10%);
}
 
[id*="testimonial-person"]{
-webkit-transition: all 0.5s ease;
-moz-transition: all 0.5s ease;
-o-transition: all 0.5s ease;
-ms-transition: all 0.5s ease;
transition: all 0.5s ease;
 
cursor: context-menu;
}
 
[id*="testimonial-copy"] {
-webkit-transition: all 0.3s ease;
-moz-transition: all 0.3s ease;
-o-transition: all 0.3s ease;
-ms-transition: all 0.3s ease;
transition: all 0.3s ease;
 
position: absolute!important;
top: -100px;
bottom: auto;
left: 0;
right: auto;
 
visibility: hidden;
opacity: 0;
}
  
</style>

<script>

 jQuery(function($){
$(document).ready(function(){
 
$('#testimonial-person-1').addClass('testimonial-active');
 
$('[id*="testimonial-person"]').hover(function() {
 
var $selector = $(this).attr('id').replace('person', 'copy');
var $testimonial = $('#' + $selector);
 
$('[id*="testimonial-copy"]').removeClass('show-testimonial');
$testimonial.addClass('show-testimonial');
 
$('[id*="testimonial-person"]').removeClass('testimonial-active');
$(this).addClass('testimonial-active');
 
});
 
});
});

</script>
