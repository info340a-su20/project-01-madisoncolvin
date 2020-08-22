'use strict';

//Madison Colvin

function output(){
    let name = sessionStorage.getItem("name");
    let email = sessionStorage.getItem("email");
    let protest = sessionStorage.getItem("protest");
    let description = sessionStorage.getItem("description");

    let para= document.createElement("p");
	let node = document.createTextNode("Thanks " + name + " for submiting your protest titled: " + protest + " described as " + description + ". An email will be sent to your email address " + email + " for confirmation.");
	para.appendChild(node);
	let insert = document.getElementById("result");
	insert.appendChild(para);
}