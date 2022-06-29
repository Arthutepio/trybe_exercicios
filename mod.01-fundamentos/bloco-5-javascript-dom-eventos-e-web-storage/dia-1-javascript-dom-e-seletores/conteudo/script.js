let header = document.getElementById('header-container');
header.style.backgroundColor = '#00B069';

let footer = document.getElementById("footer-container");
footer.style.backgroundColor = '#003533';

let emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = '#FF9F84';

let noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = '#F9DB5E';

let testPink = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < testPink.length; index += 1){
testPink[index].style.backgroundColor = '#A500F3';
}

let testBlack = document.querySelectorAll('.no-emergency-tasks h3');
for (let index in testBlack){
testBlack[index].style.backgroundColor = '#232525';
}

