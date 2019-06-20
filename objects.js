// Not part of the assignment
// Creating a Contacts addressbook object 
//Use your knowledge of objects to create a constructor called
//Contact that represents objects from a phone contacts address book. It should contain
//first_name
//second_name
//phone_number
//email
//adress
//Store the Address as an object which contains street, city, country e.g {"street": "lumumba avenue"}.
//Add a prototype method that returns the full name of the user in form of first_name + " , " + second_name
//Save the work to a repo called JS-Objects on a branch called Contact

function Contact(first_name, second_name, phone_number, email, address_array) { // creating the constructor Contact
	this.first_name = first_name;
	this.second_name = second_name;
	this.phone_number = phone_number;
	this.email = email;
	// this.address = new Address(address_array[0], address_array[1], address_array[2]) // making the address an object inside Contact
	this.address = address_array
}
// another way is by making the address a constructor
function Address(street, city, country) { 
	this.street = street;
	this.city = city;
	this.country = country;}

Contact.prototype.addFullName = function() { // a customised prototype to return: Nampala,Rahmah
	return this.first_name + "," + this.second_name};

Contact.prototype.full_adress = function() { // a customised prototype to return: the address in that way
	return this.address.street + "," + this.address.city};

var address1 = new Address("Cream road, Nsambya", "Kampala", "Uganda");
// var address2 = new Address("Kibuli road, Kabalagala", "Kampala", "Uganda");

var contact1 = new Contact("Nampala", "Rahmah", 702427983, "rahma10na@gmail.com", address1);

// var contact2 = new Contact("Asio", "Rebecca", 702457986, "masio@gmail.com", address2);
// var contact2 = new Contact("Asio", "Rebecca", 702457986, "masio@gmail.com", ["lumumba", "nakasero", "uganda"]);
// var contact3 = new Contact("Nampala", "Rahmah", 702427983, "rahma10na@gmail.com", ["Cream road, Nsambya", "Kampala", "Uganda"]);


// contact1.addFullName(); calling the Contact to print the part with the prototype 
contact1.full_adress();

