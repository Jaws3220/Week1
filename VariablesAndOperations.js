//create a variable to hold the quantity of available plane seats left on a flight
var availablePlaneSeats = 75;
		
//create a variable to hold the cost of groceries at checkout
var costofGroceries = 100.00;

//create a variable to hold a person's middle initial
var middleInitial = 'J';

//create a variable to hold true if it's hot outside and false if it's cold outside
var itsHotOutside = true; 

//create a variable to hold a customer's first name
var firstName = 'Elliott';

//create a variable to hold a street address
var streetAddress = '3220 Kings Row';

//print all variables to the console
console.log(availablePlaneSeats);
console.log(costofGroceries);
console.log(middleInitial);
console.log(itsHotOutside);
console.log(firstName);
console.log(streetAddress);

//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats -2;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
costofGroceries = costofGroceries + 2.15;
console.log(costofGroceries);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = 'R';
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
itsHotOutside = !itsHotOutside;
console.log(itsHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = firstName + ' ' + middleInitial + ' Wheeler';
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Hello all, I am " + fullName + ' have made it to ' + streetAddress + ' where I reside.');