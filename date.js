var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var gsDayNames = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

var today = new Date();
var dd = today.getDate();
var thisMonth = months[today.getMonth()];
var yyyy = today.getFullYear();
var dayName = gsDayNames[today.getDay()];

if(dd<10) {
    dd = '0'+dd
} 

today =  thisMonth + ' ' + dd + ', ' + yyyy;

document.getElementsByClassName('date_today')[0].innerText = today;
document.getElementsByClassName('date_today')[1].innerText = today;
// $(".date_today").text(today);