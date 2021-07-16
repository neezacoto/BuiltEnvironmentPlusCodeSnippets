<script>
let course_inv = [];
jQuery(document).ready(function () {

	//course field
	let course_field = document.getElementById("course-field");
	course_field.placeholder = "LEED v4 Project Management,LEED for Homes Workshop: Part2,...";

	jQuery(".wpcf7").wrap('<div id="form-container"/>');

	//add tag container
	jQuery(".wpcf7").before('<p class="tag-label">Selected Course<span style="font-size: 18px">(s)</span><span style="color:red;">*</span></p><div id="course-tag-container"/>');

	jQuery("#form-container").append('<button id="fake-submit" type="button">Send</button>');

	jQuery("#fake-submit").click((event) => {

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

	//adding button functionality   
	jQuery(".add-button").click((event) => {
		let course_name = jQuery(event.target).closest(".course-wrapper").find(".entry-title").text();

		if (course_inv.indexOf(course_name) === -1) {

			course_inv.push(course_name);


			jQuery("#course-tag-container").append('<div class="tag"><div class="course-wrap"><p class="course">' + course_name + '</p><div class="input-wrapper"><input type="image" name="removeButton"    src="http://builtenvironmentplus.org/wp-content/uploads/2021/07/course_remove.svg" alt="remove button" class="remove-button" onclick="tagDelete(event)"> </div></div></div>');

		} else {
			jQuery(".tag:contains('" + course_name + "')").addClass('animate')
			jQuery(".tag:contains('" + course_name + "')").on("animationend", () => {
				jQuery(".tag:contains('" + course_name + "')").removeClass('animate');
			});
		}
	})

});

function tagDelete(event) {

	console.log(jQuery(event.target).closest(".tag").find(".course").text());
	//find course text    
	course_inv.splice(course_inv.indexOf(jQuery(event.target).closest(".tag").find(".course").text()), 1);

	event.target.closest(".tag").remove();

}
</script>
