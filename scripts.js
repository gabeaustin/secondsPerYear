var secondsPerMin = 60;
var minsPerHour   = 60;
var hoursPerDay   = 24;
var daysPerWeek   = 7;
var weeksPerYear  = 52;
var daysPerYear   = 365;
var leapYear      = 366;

//This calculation will print out the number of seconds in a day.
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('<h2>Fun Fact:  There are ' + secondsPerDay + ' seconds in a day.</h2>');

//This calculation will ask the user for their age & print out seconds in their age.
var yourAge = prompt('How old are you?');
var yearsAliveGuest = secondsPerDay * daysPerYear * yourAge;
var yearsAliveGuestLeap = secondsPerDay * leapYear * yourAge;
document.write('<h2>You\'ve been alive for more than ' + yearsAliveGuest + ' seconds.</h2>');
document.write('<h2>During a Leap Year, you\'ve been alive for more than ' + yearsAliveGuestLeap + ' seconds.</h2>');