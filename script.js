 const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    });

    topBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

  // Contact Now Form - EmailJS Integration
const contactForm = document.getElementById("ContactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

      // 👇 SET TIME HERE
    document.getElementById("contactTime").value =
      new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short"
      });

    emailjs.sendForm(
      "Service ID",    // Replace with your EmailJS Service ID
      "template_zw4phsd",   // Replace with your EmailJS Template ID
      this
    ).then(
      function () {
        alert("Thank you! CodeTalon team will contact you soon.");
        contactForm.reset();
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      }
    );
  });
}

// Hire From Us Form
const hireForm = document.getElementById("HireForm");
if (hireForm) {
  hireForm.addEventListener("submit", function(e) {
    e.preventDefault();

  // 👇 SET TIME HERE
    document.getElementById("hireTime").value =
      new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short"
      });

    emailjs.sendForm("Service ID", "template_nleapkd", this)
      .then(() => {
        alert("Your hiring request has been sent. We will contact you soon.");
        hireForm.reset();
      }, (error) => {
        alert("Failed to send request. Please try again.");
        console.error("EmailJS Error:", error);
      });
  });
}


// to disalble right click for security purpose and cannot inspect
// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
//     alert("Right click is disabled!");        
// });


/* Disable right-click */
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

/* Disable key combinations */
document.addEventListener("keydown", function (e) {
    // F12
    if (e.key === "F12") {
        e.preventDefault();
    }

    // Ctrl + Shift + I
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
    }

    // Ctrl + Shift + C
    if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
    }

    // Ctrl + U (View Source)
    if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
    }
});

// selecting elements
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click", function(){
sidenav.style.right = 0;
})

closenav.addEventListener("click", function(){
  sidenav.style.right = "-70%"
})