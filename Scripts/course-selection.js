<script>
  
	jQuery(document).on('ready ajaxComplete', function () {
    
    //course field
    let course_field = document.getElementById("course-field");
    course_field.placeholder = "LEED v4 Project Management,LEED for Homes Workshop: Part2,...";
    
    jQuery(".wpcf7").wrap('<div id="form-container"/>');
    
    //add tag container
    jQuery(".wpcf7").before('<div class="padder"><div id="course-tag-container"/></div>');
    
    //add mockup thing
    jQuery("#course-tag-container").append('<div class="tag"><div class="course-wrap"><p class="course">bruh</p><div class="input-wrapper"><input type="image" name="removeButton" src="http://builtenvironmentplus.org/wp-content/uploads/2021/07/course_remove.svg" alt="remove button" class="remove-button"> </div></div></div>');
    
    jQuery(".remove-button").click((event)=>{
      event.target.closest(".tag").remove();
    });
    
    
    
    //add new fake submit button
    jQuery("#form-container").append('<div class="padder"><button id="fake-submit" type="button">Send</button></div>');
    
		//add button functionality
    jQuery(".et_pb_post").wrap('<div class="course-wrapper" />');      
    jQuery(".et_pb_post").after('<input type="image" name="addButton" src="http://builtenvironmentplus.org/wp-content/uploads/2021/07/course_add.svg" width="100px" height="auto" alt="add button" class="add-button">');  
    jQuery(".add-button").wrap('<div/>');
    
    //adding button functionality   
    jQuery(".add-button").click(()=>{    
     	let course_name = jQuery(this).closest(".course-wrapper").find(".entry-title").text();
      console.log(course_name);
      //add course
      jQuery("#course-tag-container").append('<div class="tag"><div class="course-wrap"><p class="course">'+course_name+'</p><div class="input-wrapper"><input type="image" name="removeButton" src="http://builtenvironmentplus.org/wp-content/uploads/2021/07/course_remove.svg" alt="remove button" class="remove-button"> </div></div></div>');
      
      jQuery(".remove-button").click((event)=>{
      event.target.closest(".tag").remove();
    });
       
    })
    
    
		
	}); 
</script>
