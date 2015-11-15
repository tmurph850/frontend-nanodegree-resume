var bio = {
    "name": "Tim Murphy",
    "role": "Web Developer",
    "contacts": {
      "mobile": "850-838-0000",
      "email": "tmurph850@gmail.com",
      "github": "tmurph850",
      "twitter": "N/A",
      "location": "Tallahassee,FL"
     },
     "welcomeMessage": "Hello Friend!",
     "skills": ["Random Thought", "JavaScript", "HTML/CSS", "Problem Solving"],
     "bioPic": "images/fry.jpg"
   };

bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic);
  var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  var formattedLocation =HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedTwitter =HTMLtwitter.replace("%data%", bio.contacts.twitter);

  $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
  $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
  $("#header").prepend(formattedRole,formattedName,formattedImage);
  $("#header").append(formattedMessage);

  if (bio.skills.length>0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills [0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills [1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills [2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills [3]);
  $ ("#skills").append(formattedSkill);

  }

  
};


//work
 var work = {
  "jobs": [
    {
      "employer": "CVS",
      "title": "Certified Pharmacy Technician",
      "location": "Perry, FL",
      "dates": "April 2010-January 2012",
      "description": "Assisted the pharmacist in day to day activities."
    }
    
  ]
  }

work.display = function(){
for (job in work.jobs) {
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);
var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);
var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedLocation);
var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
}
};

function locationizer(work_obj) {
    var locationArray = [];
    for(job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
}
return locationArray;
};


//Education
var education = {
 "schools":[    
 {
  "name":"Taylor County High",
  "location" : "Perry,FL",
  "majors" : "N/A",
  "degree" : "High School Diploma",
  "dates" : 2009,
  "url" : "http://www.taylor.k12.fl.us/"
 },
 {
  "name":"North Florida Community College",
  "location":"Madison, FL", 
  "degree" : "Incomplete",
  "majors" : ["Associate in Arts"],
  "dates" : "2009-2011",
  "url" : "http://www.nfcc.edu/"
 }
 ],
 "onLineCourses":[
 {
  "title": "Intro to HTML and CSS",
  "school": "Udacity",
  "dates": 2015,
  "url": "https://www.udacity.com/course/ud304"
 },
 {
  "title": "How to Use Git and GitHub",
  "school": "Udacity",
  "dates": 2015,
  "url": "https://www.udacity.com/course/ud775"
 },
 {
  "title": "JavaScript Basics",
  "school": "Udacity",
  "dates": 2015,
  "url": "http://www.udacity.com/course/ud804"
 },
 {
  "title": "Intro to jQuery",
  "school": "Udacity",
  "dates": 2015,
  "url": "https://www.udacity.com/course/ud245"
 },
 {
  "title": "Object-Oriented JavaScript",
  "school": "Udacity",
  "dates": 2015,
  "url": "https://www.udacity.com/course/ud015"
 },
 {
  "title": "Browser Rendering Optimization",
  "school": "Udacity",
  "dates": 2015,
  "url": "https://www.udacity.com/course/ud860"
 }
 ]
};

education.display = function() {
 for (school in education.schools) {
  $("#education").append(HTMLschoolStart);
  var SchName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedSchName = SchName.replace("#", education.schools[school].url);
  $(".education-entry:last").append(formattedSchName);
  var formattedSchLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedSchLoc);
  var formattedSchDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedSchDates);
  var formattedSchDeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  $(".education-entry:last").append(formattedSchDeg);
  var formattedSchMaj = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
  $(".education-entry:last").append(formattedSchMaj);
 }
 $(".education-entry:last").append(HTMLonlineClasses);
 for (OnLine in education.onLineCourses) {
  var OLTitle = HTMLonlineTitle.replace("%data%", education.onLineCourses[OnLine].title);
  var formattedOLTitle = OLTitle.replace("#", education.onLineCourses[OnLine].url);
  $(".education-entry:last").append(formattedOLTitle);
  var formattedOLSchool = HTMLonlineSchool.replace("%data%", education.onLineCourses[OnLine].school);
  $(".education-entry:last").append(formattedOLSchool);
  var formattedOLDates = HTMLonlineDates.replace("%data%", education.onLineCourses[OnLine].dates);
  $(".education-entry:last").append(formattedOLDates);
 }
};


//Projects
var projects = {
 "projects": [
 {
 "title": "My Portfolio",
 "dates": "2015",
 "description": "My 1st project with the Udacity Front-End Nano-degree.",
 "images":["images/html5css3.png"],
 "url": "https://github.com/tmurph850/My_Portfolio"
},
 ]
};

projects.display = function() {
 for (project in projects.projects) {
 $("#projects").append(HTMLprojectStart);
 var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
 var formattedProject = formattedTitle.replace("#",projects.projects[project].url); 
 $(".project-entry:last").append(formattedTitle);
 var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
 $(".project-entry:last").append(formattedDates);
 var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
 $(".project-entry:last").append(formattedDescription);
 
 if(projects.projects[project].images.length > 0) {
 for (image in projects.projects[project].images) {
 var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
 $(".project-entry:last").append(formattedImage)
 }
 }
 }
};

projects.display();
work.display();
education.display();
bio.display();

//click log
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});


//appending map
$("#mapDiv").append(googleMap);