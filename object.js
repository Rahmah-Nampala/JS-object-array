// Creating a Contacts addressbook object
// Not part of the assignment 

function Contact(first_name, second_name, phone_number, email, address_array) { // creating the constructor Contact
	this.first_name = first_name;
	this.second_name = second_name;
	this.phone_number = phone_number;
	this.email = email;
	// this.address = new Address(address_array[0], address_array[1], address_array[2]) // making the address an object inside Contact
	this.address = address_array
}
Contact.prototype.addFullName = function() { // a customised prototype to return: this.first_name + "," + this.second_name};
	return this.first_name + "," + this.second_name};

Contact.prototype.full_adress = function() { // a customised prototype to return: this.first_name + "," + this.second_name};
	return this.address.street + "," + this.address.city};


function Address(street, city, country) { // making the address an object inside the Contact
	this.street = street;
	this.city = city;
	this.country = country;}

var address1 = new Address("Cream road, Nsambya", "Kampala", "Uganda");
var address2 = new Address("Kibuli road, Kabalagala", "Kampala", "Uganda");

var contact1 = new Contact("Nampala", "Rahmah", 702427983, "rahma10na@gmail.com", address1);

// // var contact2 = new Contact("Asio", "Rebecca", 702457986, "masio@gmail.com", address2);
// // var contact2 = new Contact("Asio", "Rebecca", 702457986, "masio@gmail.com", ["lumumba", "nakasero", "uganda"]);
// var contact3 = new Contact("Nampala", "Rahmah", 702427983, "rahma10na@gmail.com", ["Cream road, Nsambya", "Kampala", "Uganda"]);


// contact1.addFullName();
contact1.full_adress();

