<script>
  
  
	jQuery(document).on('ready ajaxComplete', function () {
    
    //course field
    let course_field = document.getElementById("course-field");
    course_field.placeholder = "LEED v4 Project Management,LEED for Homes Workshop: Part2,...";
    
		//add button functionality
    jQuery(".et_pb_post").wrap('<div class="course-wrapper" />');      
    jQuery(".et_pb_post").after('<input type="image" name="addButton" src="http://builtenvironmentplus.org/wp-content/uploads/2021/07/course_add.svg" width="100px" height="auto" alt="add button" class="add-button">');  
    jQuery(".add-button").wrap('<div/>');
    
    //adding button functionality   
    jQuery(".add-button").click(function(){    
      let course_name = jQuery(this).parent().parent().find("h2.entry-title").text();
       course_field.value += (course_field.value =='')? course_name : ", " + course_name;     
    })
    
    //remove button functionality
		
	}); 
</script>
