const navBtn = document.querySelector(".nav-btn")
const shareBtn = document.querySelector(".share-btn")
const reportBtn = document.querySelector(".report-btn")
const navContainer = document.querySelector(".navContainer")
const navMenu = document.querySelector(".nav-menu")

let isNavbarOpen = false;

navBtn.addEventListener("click", (a) => {
  if (isNavbarOpen) {
    // Close the navigation bar
    navContainer.classList.remove("bg-white", "p-5", "rounded-xl");
    reportBtn.classList.remove("bg-[#2042B6]", "p-3");
    shareBtn.classList.remove("bg-[#AFCD80]", "border-0");
    navBtn.innerHTML = `<i class="fa-solid fa-bars z-10"></i>`; // Change the icon to a hamburger menu
    navBtn.classList.remove("text-black"); // Remove the black text color
    navMenu.classList.add("hidden"); // Hide the navigation menu

  } else {
    // Open the navigation bar
    navContainer.classList.add("bg-white", "p-5", "rounded-xl");
    reportBtn.classList.add("bg-[#2042B6]", "p-3");
    shareBtn.classList.add("bg-[#AFCD80]", "border-0");
    navBtn.innerHTML = `<i class="fa-solid fa-xmark z-10"></i>`; // Change the icon to an 'X'
    navBtn.classList.add("text-black"); // Add the black text color
    navMenu.classList.remove("hidden"); // Hide the navigation menu
  }

  // Toggle the state of the navigation bar
  isNavbarOpen = !isNavbarOpen;
});