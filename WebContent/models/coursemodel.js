window.Course = Backbone.Model.extend({
	defaults : {
		name : "",
		description : ""
	},
	url : "backbone/course/add"
});

window.CourseCollection = Backbone.Collection.extend({
	model : Course,
	url : "backbone/course/list"
});