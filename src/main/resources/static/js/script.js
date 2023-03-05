// Select the navigation bar element
const navbar = document.querySelector('.navbar');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
    // Check if the vertical scroll position is greater than the height of the navbar
    if (window.scrollY > navbar.offsetHeight) {
        // If so, add the 'fixed-top' class to the navbar
        navbar.classList.add('fixed-top');
    } else {
        // Otherwise, remove the 'fixed-top' class from the navbar
        navbar.classList.remove('fixed-top');
    }
});
