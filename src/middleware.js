// no variables expected
export function isMobile(){
	// returns boolean if screen < 600px
	return window.innerWidth < 600;
};

// expects email string
export function validateEmail(email) {
	// regex to validate email, idk
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// return boolean of validation
	return re.test(String(email).toLowerCase());
};


// expects ID of button to animate
export function animateIcon(elementID){
	// find element in document (to replace with ref)
	let element = document.querySelector(`#${elementID}`);
	// play updated animation & remove class on animation end
	element.classList.add('updated');
	element.addEventListener('animationend',()=>{
		element.classList.remove('updated');
	});
};
