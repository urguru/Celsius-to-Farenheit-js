//We create two variables celsius and farenheit
//According tho the problem statement celsius is stored to some arbitrary value
var farenheit = 0;
var celsius = 33;
//We calculate the value of farenheit using the formula
//Notice that I have used math.round here becasue to get only two decimal places after the point
farenheit = Math.round((celsius * 1.4 + 32) * 100) / 100;
//then we store the message to be printed on to the HTML
var msg = celsius + "\u00B0C is " + farenheit + "\u00B0F";
//We get the element by ID c-to-f and the change its innertext
document.getElementById("c-to-f").innerText = msg;
//We generate a farenheit value between math.random from 0-100
farenheit = Math.ceil(Math.random() * 100);
//We calculate the celsuis with the formula
celsius = Math.round((((farenheit - 32) * 5) / 9) * 100) / 100;
//Store the message and then print it
msg = farenheit + "\u00B0F is " + celsius + "\u00B0C";
document.getElementById("f-to-c").innerText = msg;
