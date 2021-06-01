window.addEventListener('scroll', () => refreshHeader());
window.onload = () => refreshHeader();

function refreshHeader(){
	var st = window.pageYOffset || document.documentElement.scrollTop;
	if(st == 0){
		this.document.querySelector('header').setAttribute('class','visible');
	}
	else{
		this.document.querySelector('header').setAttribute('class','');
	}
}

/*
//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

window.onload = () => navSlide();
*/