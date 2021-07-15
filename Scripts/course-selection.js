<script>
  	let course_inv = [];
  jQuery( document ).ready(function() {
    
    jQuery(".wpcf7").wrap('<div id="form-container"/>');
    
    //add tag container
    jQuery("#form-container").prepend('<label class="tag-label">Selected Course<span style="font-size: 18px">(s)</span><span style="color:red;">*</span><div id="tags-container"/></label>');
     
    jQuery("#form-container").append('<button id="fake-submit" type="button">Send</button>');
    
    jQuery("#fake-submit").click((event)=>{
      
      jQuery("#course-field").val("");
      jQuery("#course-field").val(course_inv.join(", "));
      jQuery("#submit-button").click();
      
    })
    
});
  
	jQuery(document).on('ready ajaxComplete', function () {
    
		//add button functionality
    jQuery(".et_pb_post").wrap('<div class="course-wrapper" />');      
    jQuery(".et_pb_post").after('<input type="image" name="addButton" src="http://builtenvironmentplus.org/wp-content/uploads/2021/07/course_add.svg" width="100px" height="auto" alt="add button" class="add-button">');  
    jQuery(".add-button").wrap('<div/>');
    
    //add button functionality   
    jQuery(".add-button").click((event)=>{    
     	let course_name = jQuery(event.target).closest(".course-wrapper").find(".entry-title").text();
      
      if(course_inv.indexOf(course_name) === -1){
        
        course_inv.push(course_name);
        
        
       jQuery("#tags-container").append('<div class="tag"><div class="tag-content-wrap"><p class="tag-course-name">'+course_name+'</p><button class="tag-remove-button"><img class="remove-icon"src="http://builtenvironmentplus.org/wp-content/uploads/2021/07/course_remove.svg"></button><div></div>');
      
      jQuery(".tag-remove-button").on('click', (event)=>{
        
        //find course text
						course_inv.splice(
        		course_inv.indexOf(jQuery(event.target).closest(".tag").find(".course").text()), 1
                           );
       
      		event.target.closest(".tag").remove();
        	
    	});  
      }else{
        jQuery(".tag:contains('"+course_name+"')").addClass('animate')
          jQuery(".tag:contains('"+course_name+"')").on("animationend", ()=>{
      		jQuery(".tag:contains('"+course_name+"')").removeClass('animate');
    		});
      }
    })

	}); 

</script>
