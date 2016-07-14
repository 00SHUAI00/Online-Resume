var bio = {
    "name": "Shuai Wang",
    "role": "Web Developer",
    "contacts": {
        "mobile": "000-000-0000",
        "email": "shuai.wang.pj@gmail.com",
        "github": "https://github.com/00SHUAI00",
		"twitter" : "XXXX@twitter.com",
        "location": "San Diego"
    },
    "welcomeMessage": "Welcome to my page!",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "AngularJS", "JSON", "AJAX"],
    "biopic": "images/my_picture.jpg"
};

var education = {
    "schools": [{
        "name": "Shenyang University of Technology",
        "location": "Shenyang, CHINA",
        "degree": "Bachelors",
        "majors": ["CS"],
        "dates": "Sep 2008 - Jun 2012",
        "url": "http://www.sut.edu.cn/"
    }, {
        "name": "National University",
        "location": "San Diego, CA",
        "degree": "Masters",
        "majors": ["CS"],
        "dates": "Aug 2012 - Jan 2014",
        "url": "http://www.nu.edu/"
    }],
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

var work = {
    "jobs": [{
        "employer": "Technomax LLC",
        "title": "Software Engineer",
        "location": "Princeton NJ",
        "dates": "Oct 2014 - Present",
        "description": "This project is created by pure HTML5, CSS3 and JavaScript. This web app is used to recommend restaurants by categories. Yelp API is used in this project. The biggest difference between this app and Yelp is the recommendation option. This app makes up Yelp shortfall."
    }]
};

var projects = {
    "projects": [{
        "title": "Success Maker",
        "dates": "2015",
        "description": "SuccessMaker offers standards-based reading/language arts, mathematics, and English language development/ESL curriculum. The team I was in focused on the front end development and performance that showing directly to clients.",
        "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    }]
};

bio.display = function() {
    //header section
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

    function inName(name) {
        name = name.trim().split(" ");
        console.log(name);
        name[1] = name[1].toUpperCase();
        name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

        var formattedName = HTMLheaderName.replace("%data%", name[0] + " " + name[1]);
        return formattedName;
    }

    $("#header").prepend(formattedRole);
    $("#header").prepend(inName(bio.name));
    $("#header").append(formattedBioPic);

    //$("#main").append(internationalizeButton);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var contactArray = [];
    contactArray.push(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

    contactLength = contactArray.length;

    //loop header contacts
    for (var i = 0; i < contactLength; i++) {
        $("#topContacts").append(contactArray[i]);
    }
    //loop footer contacts
    for (var i = 0; i < contactLength; i++) {
        $("#footerContacts").append(contactArray[i]);
    }

    //Welcome Message section
    var formattdWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattdWelcome);

    //loop skills
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
//		bio.skills.forEach(function(i) {
//			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
//            $("#skills").append(formattedSkill);
//		});
    }
};


work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        //create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        //concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};



projects.display = function() {
    for (var i= 0; i< projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[i].images.length > 0) {
            for (image in projects.projects[i].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i= 0; i < education.schools.length; i++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        var educationURL = education.schools[i].url;

        var formattedSchoolNameFinal = formattedSchoolName + formattedSchoolDegree;
        formattedSchoolNameFinal = formattedSchoolNameFinal.replace("#", educationURL);

        var educationArray = [];
        educationArray.push(formattedSchoolMajor, formattedSchoolLocation, formattedSchoolDates, formattedSchoolNameFinal);
        var educationLength = educationArray.length;
        for (var i = 0; i < educationLength; i++) {
            $(".education-entry:last").prepend(educationArray[i]);
        }
    }

    $(".education-entry:last").append(HTMLonlineClasses);
    for (var i= 0; i< education.onlineCourses.length; i++) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

        var formattedOnlineURL = formattedOnlineURL.replace("#", education.onlineCourses[i].url);
        var formattedOnlineProvider = formattedOnlineTitle + formattedOnlineSchool;
        formattedOnlineProvider = formattedOnlineProvider.replace("#", education.onlineCourses[i].url);

        var onlineCourseArray = [];
        onlineCourseArray.push(formattedOnlineProvider, formattedOnlineDates, formattedOnlineURL);
        onlineCourseLength = onlineCourseArray.length;

        for (var i = 0; i < onlineCourseLength; i++) {
            $(".education-entry:last").append(onlineCourseArray[i]);
        }
    }
};


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);