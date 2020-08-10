function validateForm(){
	if(document.forms[0].n1.value==""){
		alert('Name field cannot be left empty')
		return false
	}
	if(document.forms[0].email.value==""){
		alert('An email must be provided for us to contact you')
		return false		
	}

	if(document.forms[0].comment.value==""){
		alert('Please enter a question or comment')
		return false
	}
	else{
		return true
	}
}
