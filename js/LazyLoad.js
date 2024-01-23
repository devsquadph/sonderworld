const sections = document.querySelectorAll('[data-lazy-load]');
const config = {
	threshold: 0.0
};

let observer = new IntersectionObserver(function (elements, self) {
	elements.forEach(element => {
		
		if(element.target.getAttribute(["data-lazy-load"]) == "fade-from-top"){
			fadeFromTop(element, element.isIntersecting);
		}else if(element.target.getAttribute(["data-lazy-load"]) == "fade-from-right"){
			fadeFromRight(element, element.isIntersecting);
		}else if(element.target.getAttribute(["data-lazy-load"]) == "fade-from-bottom"){
			fadeFromBottom(element, element.isIntersecting);
		}else if(element.target.getAttribute(["data-lazy-load"]) == "fade-from-left"){
			fadeFromLeft(element, element.isIntersecting);
		}else if(element.target.getAttribute(["data-lazy-load"]) == "fade"){
			fade(element, element.isIntersecting);
		}
	});
}, config);

sections.forEach(section => {
	observer.observe(section);
});

// BUGGY
function fadeFromTop(object, isIntersecting){
	var element = object.target;
	var elementHeight = -element.offsetHeight * 0.3;

	if (isIntersecting) {
		element.style.opacity = 1;
		element.style.transform = "translateY(0px)";
	} else {
		element.style.opacity = 0;
		element.style.transform = "translateY(" + elementHeight + "px)";
	}
}

function fadeFromRight(object, isIntersecting){
	var element = object.target;
	var elementWidth = element.offsetWidth * 0.3;

	if (isIntersecting) {
		element.style.opacity = 1;
		element.style.transform = "translateX(0px)";
	} else {
		element.style.opacity = 0;
		element.style.transform = "translateX(" + elementWidth + "px)";
	}
}

// BUGGY
function fadeFromBottom(object, isIntersecting){
	var element = object.target;
	var elementHeight = element.offsetHeight * 0.3;

	if (isIntersecting) {
		element.style.opacity = 1;
		element.style.transform = "translateY(0px)";
	} else {
		element.style.opacity = 0;
		element.style.transform = "translateY(" + elementHeight + "px)";
	}
}

function fadeFromLeft(object, isIntersecting){
	var element = object.target;
	var elementWidth = -element.offsetWidth * 0.3;

	if (isIntersecting) {
		element.style.opacity = 1;
		element.style.transform = "translateX(0px)";
	} else {
		element.style.opacity = 0;
		element.style.transform = "translateX(" + elementWidth + "px)";
	}
}

function fade(object, isIntersecting){
	var element = object.target;

	if (isIntersecting) {
		element.style.opacity = 1;
	} else {
		element.style.opacity = 0;
	}
}