package com.durasoft;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Path("/course")
public class CoursesService {

	private static List<Course> courses;
	static{
		courses = new ArrayList<Course>();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/add")
	public void addCourse(Course course){
		courses.add(course);
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/list")
	public List<Course> getCourses(){
		return courses;
	}
	
}
