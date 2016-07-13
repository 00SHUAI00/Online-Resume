/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Shuai Wang";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Shuai Wang",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "858-717-2366",
		"email" : "shuai.wang.pj@gmail.com",
		"github" : "https://github.com/00SHUAI00",
		"location" :"San Diego"
	},
	"welcomeMessage" : "Hi there, it's nice to see you!",
	"skills" :["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "AngularJS", "JSON" , "AJAX"],
	"bioPic" : "iamges/my_picture.jpg"
}

var education = {
	"schools" : [
		{
			"name" : "National University",
			"city" : "San Diego, CA",
			"degree" : "Masters",
			"majors" : ["CS"],
			"dates" : "Aug 2012 - Jan 2014",
			"url" : "http://www.nu.edu/"
		},
		{
			"name" : "Shenyang University of Technology",
			"city" : "Shenyang, CHINA",
			"degree" : "Bachelors",
			"majors" : ["CS"],
			"dates" : "Sep 2008 - Jun 2012",
			"url" : "http://www.sut.edu.cn/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front End Developer",
			"school" : "Udacity",
			"dates" : 2016,
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
}

var work = {
	"jobs" : [
		{
			"empolyer" : "Technomax LLC",
			"title" : "Software Engineer",
			"location" :"Princeton NJ",
			"dates" : "Oct 2014 - Present",
			"description" : "Implemented Web app to provide a one-touch recommendation experience."
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Success Maker",
			"dates" : "2015",
			"description" : "SuccessMaker offers standards-based reading/language arts, mathematics, and English language development/ESL curriculum. The team I was in focused on the front end development and performance that showing directly to clients.",
			"images" : "";
		}
	]
}

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
	$("#skills").append(formattedSkill);
}

function displayWork() {
	for(job in work.jobs) {
	//create new div for work experience
	$("#workExperience").append(HTMLworkStart);
	//concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].empolyer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
};

displayWork();

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = htmlprojectDescription.replace("%data%",projects.projects[project].description);
		
		if(projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

$("mapDiv").append(googleMap);



