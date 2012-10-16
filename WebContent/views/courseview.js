window.AddCourseView = Backbone.View.extend({
	el : "#addCourseDiv",
	initialize : function(){
		console.log($(this.el));
	},
	addCourse : function(){
		var course = new Course({
			name : $("#courseNameText").val(),
			description : $("#courseDescriptionText").val()
		});
		courseCollection.create(course);
		courseListView.displayCourses();
	},
	events : {
		"click #addBtn" : "addCourse"
	}
});

window.CourseListView = Backbone.View.extend({
	el : "#coursesUL",
	initialize : function(){
		console.log($(this.el));
	},
	courseList : null,
	displayCourses : function(){
		this.courseList = this.options.dd;
		this.$el.html("");
		for(var i=0;i<this.options.dd.length;i++){
			var name = this.options.dd.at(i).get("name");
			var description = this.options.dd.at(i).get("description");
			this.$el.append("<li>" + name + ", <i>" + description + "</i></li>");
		}
	},
	changeColorToRed : function(event){
		$(event.currentTarget).css("background-color","red");
	},
	changeColorToWhite : function(event){
		$(event.currentTarget).css("background-color","white");
	},
	events : {
		"mouseover li" : "changeColorToRed",
		"mouseout li" : "changeColorToWhite",
	},
});