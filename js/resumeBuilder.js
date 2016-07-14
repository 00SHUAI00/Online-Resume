var bio = {
    "name": "Shuai Wang",
    "role": "Web Developer",
    "contacts": {
        "mobile": "000-000-0000",
        "email": "shuai.wang.pj@gmail.com",
        "github": "https://github.com/00SHUAI00",
        "location": "San Diego"
    },
    "welcomeMessage": "Welcome to my page!",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "AngularJS", "JSON", "AJAX"],
    "bioPic": "images/my_picture.jpg"
};

var education = {
    "schools": [{
        "name": "Shenyang University of Technology",
        "city": "Shenyang, CHINA",
        "degree": "Bachelors",
        "majors": ["CS"],
        "dates": "Sep 2008 - Jun 2012",
        "url": "http://www.sut.edu.cn/"
    }, {
        "name": "National University",
        "city": "San Diego, CA",
        "degree": "Masters",
        "majors": ["CS"],
        "dates": "Aug 2012 - Jan 2014",
        "url": "http://www.nu.edu/"
    }],
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

var work = {
    "jobs": [{
        "empolyer": "Technomax LLC",
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
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

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
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var contactArray = [];
    contactArray.push(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

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
        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};


work.display = function() {
    for (job in work.jobs) {
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



projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (school in education.schools) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        var educationURL = education.schools[school].url;

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
    for (onlineCourse in education.onlineCourses) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

        var formattedOnlineURL = formattedOnlineURL.replace("#", education.onlineCourses[onlineCourse].url);
        var formattedOnlineProvider = formattedOnlineTitle + formattedOnlineSchool;
        formattedOnlineProvider = formattedOnlineProvider.replace("#", education.onlineCourses[onlineCourse].url);

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