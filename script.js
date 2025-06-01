let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px"; // Hide navbar when scrolling down
    } else {
        navbar.style.top = "0"; // Show navbar when scrolling up
    }

    lastScrollTop = scrollTop;
});
document.addEventListener("DOMContentLoaded", function () {
    let careerObjective = document.getElementById("career-objective");

    window.addEventListener("scroll", function () {
        let position = careerObjective.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight * 0.75) {
            careerObjective.classList.add("visible");
        }
    });
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.2)';
        link.style.transition = '0.3s';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

