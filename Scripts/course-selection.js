
<script>
let course_inv = [];
let hidden = false; 
  
jQuery(document).ready(function () {

	//course field
	let course_field = document.getElementById("course-field");
	course_field.placeholder = "LEED v4 Project Management,LEED for Homes Workshop: Part2,...";

	jQuery(".wpcf7").wrap('<div id="form-container"/>');

	//add tag container
	jQuery(".wpcf7").before('<p class="tag-label">Selected Course<span style="font-size: 18px">(s)</span><span style="color:red;">*</span></p><div id="course-tag-container"><p id="preview-text" style="color: #ababab; font-size: 15px;">Press The Plus Icon to Add a Course</p></div>');

	jQuery("#submit-button").before('<button id="fake-submit" type="button">Send</button>');

	jQuery("#fake-submit").click((event) => {

		jQuery("#course-field").val("");
		jQuery("#course-field").val(course_inv.join(","));
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

		if (!jQuery(".tag:contains('" + course_name + "')").length) {
      
      if(!hidden){
        jQuery("#preview-text").addClass('hide');
        hidden= true;
        window.onbeforeunload = function() {
    			return true;
				}
      }
      
      let tagsNum = jQuery(".tag").length;
      let radioNum = tagsNum * 3;
      let btn = (tagsNum)? "btn": "btn-"+tagsNum;
      let radio1 = (tagsNum)? "raido": "raido-"+tagsNum -3;
      let radio2 = "raido-"+tagsNum-2;
      let radio3 = "raido-"+tagsNum-1;

			jQuery("#course-tag-container").append('<nav class="tag"> <label for="'+btn+'" class="button bold-me" onclick="rotate(event)">'+course_name+'<span class="fas fa-caret-down arrow" ></span> </label><input type="checkbox" id="'+btn+'"> <ul class="menu"> <li> <label for="" class="title course">Express Program Preference:</label> <label for="'+raido1+'" class="radio"> <input type="radio" name="'+course_name+'" id="'+raido1+'" class="radio__input"> <div class="radio__radio"></div> A Must </label> <label for="'+raido2+'" class="radio"> <input type="radio" name="'+course_name+'" id="'+raido2+'" class="radio__input"> <div class="radio__radio"></div> Would Like </label> <label for="'+raido3+'" class="radio"> <input type="radio" name="'+course_name+'" id="'+raido3+'" class="radio__input" checked> <div class="radio__radio"></div> No Preference </label> </li> <li> <div class="divider"></div> </li> <li> <label for="" class="course-title">Expected Party Size:</label> <i class="fas fa-user"></i><input type="number" name="" value="1" min="1" class="people" id="total"> <button onclick="minus()" class="a">-</button> <button onclick="add()" class="b">+</button> </li> <li> <div class="divider"></div> </li> <li> <button onclick="tagDelete(event)" class="remove-course">Remove Course</button> </li> </ul></nav>');

		} else {
			jQuery(".tag:contains('" + course_name + "'),.tag:contains('" + course_name + "') .menu").addClass('animate')
      
			jQuery(".tag:contains('" + course_name + "'),.tag:contains('" + course_name + "') .menu").on("animationend", () => {
				jQuery(".tag:contains('" + course_name + "'),.tag:contains('" + course_name + "') .menu").removeClass('animate');
			});
		}
	})
  
  

});

function tagDelete(event) {

	event.target.closest(".tag").remove();

  
  if(hidden && course_inv.length===0){
        jQuery("#preview-text").removeClass('hide');
    		hidden= false;
    		window.onbeforeunload = null;
      }

}
  
			function rotate(event){
        
        event.target.classList.toggle("highlight");
        jQuery(event.target).find(".arrow").toggleClass("rotate");
        
        
      }

      function add(){
      var sign = document.getElementById("total").value;
      var sum = sign - (-1);
      document.getElementById("total").value = sum;
      }

      function minus(){
      var sign = document.getElementById("total").value;
      if(sign > 1) {
        var sum = sign - 1;
        document.getElementById("total").value = sum;
      }
      }
  
</script>

<style>

label.button {
  position: relative; /* <-- causes the label to act as a container */
  padding-right: 20px;
}

.fa-caret-down {
  position: absolute;
  right: 0;
  bottom: 0;
}

nav.tag {
  background: #DBDBDB;
  width: 100%;
  line-height: 40px;
  padding: 5px 0px 5px;
  border-radius: 5px 5px 5px 5px;
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Old versions of Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  margin-bottom: 5px;
  margin-top: 5px;
}

label.button {
  line-height: 130%
}

.button {
  padding-left: 20px;
}

.tag input[type='checkbox'] {
  display: none;
}

nav label {
  font-size: 20px;
  display: block;
  cursor: pointer;
}

.button span {
  float: right;
  line-height: 130%;
  margin-right: 20px;
  margin-top: 0px;
}

nav ul label:nth-child(1) {
  font-weight: bold;
  font-size: 20px;
}

nav.tag ul {
  background: #DBDBDB;
  list-style: none;
  width: 100%;
  border-radius: 0px 0px 5px 5px;
  padding-bottom: 5px;
  display: none;
}

.bold-me {
  transition: 30ms;
}

.highlight {
  font-weight: bold;
  color: #005DA4;
  font-size: 21px;
}

[id^=btn]:checked+ul {
  display: block;
}

nav.tag ul li {
  line-height: 40px;
  padding 8px 20px;
  cursor: pointer;
  margin-top: 10px;
}

nav.tag ul li:nth-child(5) {
  margin-top: 0px;
}

.divider {
  width: 80%;
  height: 2px;
  background-color: #BBBBBB;
}

.course-title {
  font-size: 24px;
}
  
.people{
  border: solid 1px #BBBBBB;
  height: 32px;
  width: 50px;
  padding: 0px 0px 0px 20px;
  font-size: 17px;
  outline: none;
  border: none;
  transition: 100ms;
  border-radius: 5px;
  transform: translateY(-1.5px);
}

.people:focus{
  box-shadow: 0 0 3pt 1pt cornflowerblue;

}

.radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;

}

.radio__input {
  display: none;

}
.radio__radio{
  width: 25px;
  height: 25px;
  border: 3px solid rgb(103, 103, 103);
  border-radius: 50%;
  margin-right: 10px;
  box-sizing: border-box;
  padding: 2px;
  transition: 150ms;
  background: #f4f4f4

}

.a,.b{
  border: none;
  border-radius: 5px;
  font-size: 23px;
  font-weight: lighter;
  width: 30px;
  outline:none;
  cursor: pointer;
  transition: 120ms;
}
.a{
  padding-bottom: 2px;
}

.a:active,.b:active{
  background-color: #3382BE;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}


.radio__radio:hover{
  box-shadow: 0 0 3pt 1pt cornflowerblue;
}
.radio__radio::after {
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  background:#3382BE;
  border-radius: 50%;

  transform: scale(0);
  transition: transform 150ms;
}

.radio__input:checked + .radio__radio::after{

  transform: scale(1);

}

.remove-course{
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #535353;
  font-size: 17px;
  font-weight: bold;
  border-radius: 5px;
  transition: 150ms;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: underline;
  outline: none;
}

.remove-course:hover{
  
  color: #3382BE;
  outline: none;
}
#btn{
  display: none;
}
.arrow{
  transition: 250ms ease-out;
}
.rotate{
  
}
.button span.rotate{
  transform: rotate(-180deg);
}
.fa-user{
  margin-right: 10px;
  font-size: 24px;
  transform: translateY(3px);
}

</style>
