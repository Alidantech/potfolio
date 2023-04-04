function showEmailBox(){
    var emailBox = document.getElementById("email-box")
    if(emailBox.style.display === "none"){
        emailBox.style.display = "block";
    }   else{
        emailBox.style.display = "none";
    }
}

// Get all elements with the "animated" class
const animatedElements = document.querySelectorAll('.animated');

// Define the options for the Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

// Create a new Intersection Observer instance
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // If the element is in view, add the "is-visible" class
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, options);

// Observe each animated element
animatedElements.forEach(element => {
  observer.observe(element);
});
