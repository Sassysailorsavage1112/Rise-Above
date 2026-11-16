// ==============================
// DAY / NIGHT SKY TOGGLE
// ==============================

const body = document.body;

const themeToggle = document.getElementById("themeToggle");

const toggleIcon = themeToggle.querySelector(".toggle-icon");

const toggleLabel = themeToggle.querySelector(".toggle-label");


function setTheme(isNight) {

body.classList.toggle("night", isNight);

themeToggle.setAttribute(
"aria-pressed",
String(isNight)
);

toggleIcon.textContent = isNight ? "☀" : "☾";

toggleLabel.textContent = isNight
? "Day Sky"
: "Night Sky";

themeToggle.setAttribute(
"aria-label",
isNight
? "Switch to day sky"
: "Switch to night sky"
);

try {

localStorage.setItem(
"rise-theme",
isNight ? "night" : "day"
);

} catch (error) {

console.log("Theme preference could not be saved.");

}

}


// Load previously selected theme

let savedTheme = "day";

try {

savedTheme = localStorage.getItem("rise-theme") || "day";

} catch (error) {

savedTheme = "day";

}


setTheme(savedTheme === "night");


// Toggle between day and night

themeToggle.addEventListener("click", function () {

const isNight = body.classList.contains("night");

setTheme(!isNight);

});



// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");

const mobileNav = document.getElementById("mobileNav");


menuToggle.addEventListener("click", function () {

const isOpen = mobileNav.classList.toggle("open");

menuToggle.setAttribute(
"aria-expanded",
String(isOpen)
);

menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close mobile menu when a link is selected

mobileNav.querySelectorAll("a").forEach(function (link) {

link.addEventListener("click", function () {

mobileNav.classList.remove("open");

menuToggle.setAttribute("aria-expanded", "false");

menuToggle.textContent = "☰";

});

});



// ==============================
// AUTOMATIC COPYRIGHT YEAR
// ==============================

document.getElementById("year").textContent =
new Date().getFullYear();