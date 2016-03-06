// put your javascript code here

// variables for the templates
var categories_template, animals_template, details_template;

// variables for the current category and animal
var current_category = animals_data.category[0];

// helper function to instantiate the templates
function showTemplate(template, data){
	var html = template(data);
	$('#content').html(html);
}

// document ready function for rendering the templates
$(document).ready(function() {
	var source = $("#categories_template").html();
	categories_template = Handlebars.compile(source);

	source = $("#animals_template").html();
	animals_template = Handlebars.compile(source);

	source = $("#details_template").html();
	details_template = Handlebars.compile(source);

	// make click functionality for categories tab
	$("#nav-categories").click(function() {
		// show categories template
		showTemplate(categories_template, animals_data);

		// deactivate current nav tab
		$(".nav-tabs .active").removeClass("active");

		// set the categories nav tab to active
		$("#nav-categories").addClass("active");

		// add click functionality to each category thumbnail to go to the corresponding animals template
		$(".category-view").click(function() {
			var index = $(this).data("id");

			// set current category variable to this category
			current_category = animals_data.category[index];

			// show animals template
			showTemplate(animals_template, current_category);

			// deactivate current nav tab
			$(".nav-tabs .active").removeClass("active");
	
			// set the animals nav tab to active
			$("#nav-animals").addClass("active");
			// add click functionality to animal thumbnails to show details
			$(".details-view").click(function() {
			
				// get index for clicked animal
				var index = $(this).data("id");
	
				// set current_animal to this animal
				current_animal = current_category.animals[index];
	
				// display animal detail template
				showTemplate(details_template, current_animal);
	
			});		// end click function for animals thumbnail
		});		// end click function for category thumbnail
	});		// end click functions for categories tab

	// make click functionality for animals tab
	$("#nav-animals").click(function() {

		// show animals template
		showTemplate(animals_template, current_category);

		// deactivate current nav tab
		$(".nav-tabs .active").removeClass("active");

		// set the animals nav tab to active
		$("#nav-animals").addClass("active");

		// add click functionality to animal thumbnails to show details
		$(".details-view").click(function() {
			
			// get index for clicked animal
			var index = $(this).data("id");

			// set current_animal to this animal
			current_animal = current_category.animals[index];

			// display animal detail template
			showTemplate(details_template, current_animal);

		});		// end click function for animals thumbnail


	});		// end click functionality for animals tab

	// auto-load categories view on load by virtual click
	$("#nav-categories").click();

});		// end document ready
