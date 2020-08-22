'use strict';

//Madison Colvin

//Checks if all required fields are completed
function validate(){
	if(document.protestForm.n1.value === ""){
		alert('Name field cannot be left empty');
		return false;
	} 
	if (document.protestForm.email.value === ""){
		alert('An email must be provided for us to contact you');
		return false;		
	} 
	if (document.protestForm.protest.value === ""){
		alert('You must fill out the name of the protest to submit your form');
		return false;		
	} 
	if (document.protestForm.location.value  === ""){
		alert('You must fill out the location of your protest to submit');
		return false;		
	} 
	if (document.protestForm.description.value === ""){
		alert('Please enter a description of your proposed protest');
		return false;
	} 	
	alert("Thank you for submitting your protest");

	sessionStorage.setItem("name", document.querySelector("#name").value);
	sessionStorage.setItem("email", document.querySelector("#email").value);
	sessionStorage.setItem("protest", document.querySelector("#protest").value);
	sessionStorage.setItem("description", document.querySelector("#description").value);

	return true;
}