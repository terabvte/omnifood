console.log("Hello world!");

const myName = "Marco";
const h1 = document.querySelector(".heading-primary");
console.log(h1);

// var oldHeading = h1.textContent;
// var oldBgColor = h1.style.backgroundColor;
// var oldPadding = h1.style.padding;

// h1.addEventListener("click", function before() {
// 	h1.textContent = myName;
// 	h1.style.backgroundColor = "red";
// 	h1.style.padding = "5rem";
// });

// h1.addEventListener("click", function after() {
// 	h1.textContent = oldHeading;
// 	h1.style.backgroundColor = '';
// 	h1.style.padding = '';
// });

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile nav work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const html = document.querySelector("html");

btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");

	// if (headerEl.classList.contains("nav-open")) {
	// 	// Disable scroll
	// 	html.style.overflow = "hidden";
	// } else {
	// 	// Enable scroll
	// 	html.style.overflow = "auto";
	// }
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation
///////////////////////////////////////////////////////////

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const href = link.getAttribute("href");

		// Scroll back to top
		if (href === "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});

		// Scroll to other links
		if (href !== "#" && href.startsWith("#"));
		{
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({ behavior: "smooth" });
		}

		// Close mobile nav
		if (link.classList.contains("main-nav-link"))
			headerEl.classList.toggle("nav-open");
	});
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
///////////////////////////////////////////////////////////

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		if (ent.isIntersecting === false) {
			console.log(ent);
			document.querySelector(".header").classList.add("sticky");

			sectionHeroEl.style.marginTop = "9.6rem";
		}
		if (ent.isIntersecting) {
			document.querySelector(".header").classList.remove("sticky");
			sectionHeroEl.style.marginTop = "";

		}
	},
	{
		// In the viewport
		root: null,
		threshold: 0,
		rootMargin: "-80px"
	}
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
///////////////////////////////////////////////////////////

function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
