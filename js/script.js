function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}

// Dark Mode

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
})

// Typing Effect

var typingEffect = new Typed(".typedText", {
    strings: ["Electronics, Communication and Information Engineer", "AI/ML Engineer" , "Data Scientist", "Software Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});
// Hire me -- Mail Part
function composeEmail() {
    var emailAddress = "rjtdulal@gmail.com";
    
    // Replace other details as needed (subject, body, etc.)
    var subject = "Hiring Inquiry";
    var body = "Hello,\n\nI'm interested in discussing potential opportunities. Please let me know the details.";
  
    // Combine the details into a mailto link
    var mailtoLink = "mailto:" + encodeURIComponent(emailAddress) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  
    // Open the mailto link in another tab
    window.open(mailtoLink, "_blank");
  }

// Scroll Animation

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".project-container", { delay: 200 });
sr.reveal(".see-more", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });


sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", { delay: 100});
srLeft.reveal(".contact-info", { delay: 100});


// Scroll Animation for Tab Content
const srTabContent = ScrollReveal({
    origin: "right", // Animation starts from the right
    distance: "80px", // Adjust the distance as needed
    duration: 2000, // Adjust the duration as needed
    reset: true, // Animation resets when out of view
});

srTabContent.reveal("#skills.tab-content", { delay: 100});
srTabContent.reveal(".form-control", { delay: 100});




//Switch between skill, education and Experience

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    var buttons = document.getElementsByClassName("tab-button");
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Active Link

const sections = document.querySelectorAll(".section[id]")

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }

    });
}

window.addEventListener("scroll", scrollActive);