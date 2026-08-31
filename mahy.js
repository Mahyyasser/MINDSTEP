
// function showsidebar() {
//     const sidebar= document.querySelector('.sidebar')
//     sidebar.style.display ='flex'
// }
// function hidesidebar() {
//     const sidebar= document.querySelector('.sidebar')
//     sidebar.style.display ='none'
// }

/* =========================================================
   OPEN SIDEBAR
========================================================= */

function showsidebar() {

    const sidebar = document.querySelector('.sidebar');

    sidebar.style.display = 'flex';

}


/* =========================================================
   CLOSE SIDEBAR
========================================================= */

function hidesidebar() {

    const sidebar = document.querySelector('.sidebar');

    sidebar.style.display = 'none';

}



/* =========================================================
   DARK MODE
========================================================= */

// const darkModeBtn = document.getElementById("darkModeBtn");

// darkModeBtn.addEventListener("click", function () {

//     document.body.classList.toggle("dark-mode");

//     const icon = darkModeBtn.querySelector("i");

//     if (document.body.classList.contains("dark-mode")) {

//         icon.classList.remove("fa-moon");

//         icon.classList.add("fa-sun");

//     } else {

//         icon.classList.remove("fa-sun");

//         icon.classList.add("fa-moon");

//     }

// });











document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(function (counter) {

        const target = Number(counter.dataset.target);

        const duration = 1800;

        const startTime = performance.now();


        function updateCounter(currentTime) {

            const elapsed = currentTime - startTime;

            const progress = Math.min(
                elapsed / duration,
                1
            );


            // Smooth ease-out animation
            const easeOut =
                1 - Math.pow(1 - progress, 3);


            const currentNumber =
                Math.floor(easeOut * target);


            counter.textContent =
                currentNumber.toLocaleString();


            if (progress < 1) {

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent =
                    target.toLocaleString();

            }

        }


        requestAnimationFrame(updateCounter);

    });

});












/* =========================================================
   SIDEBAR
========================================================= */





// function showsidebar() {

//     const sidebar =
//         document.querySelector('.sidebar');

//     sidebar.style.display = 'flex';

// }


// function hidesidebar() {

//     const sidebar =
//         document.querySelector('.sidebar');

//     sidebar.style.display = 'none';

// }


/* =========================================================
   DARK MODE
========================================================= */

// document.addEventListener(
//     "DOMContentLoaded",
//     function () {

//         const darkModeBtn =
//             document.querySelector('#darkModeBtn');

//         const icon =
//             darkModeBtn.querySelector('i');


//         /* Check saved mode */

//         const savedMode =
//             localStorage.getItem('mindStepDarkMode');


//         if (savedMode === 'enabled') {

//             document.body.classList.add('dark-mode');

//             icon.classList.remove('fa-moon');

//             icon.classList.add('fa-sun');

//         }


        /* Toggle */

        // darkModeBtn.addEventListener(
        //     'click',
        //     function () {

        //         document.body.classList.toggle(
        //             'dark-mode'
        //         );


//                 const isDark =
//                     document.body.classList.contains(
//                         'dark-mode'
//                     );


//                 if (isDark) {

//                     icon.classList.remove(
//                         'fa-moon'
//                     );

//                     icon.classList.add(
//                         'fa-sun'
//                     );

//                     localStorage.setItem(
//                         'mindStepDarkMode',
//                         'enabled'
//                     );

//                 } else {

//                     icon.classList.remove(
//                         'fa-sun'
//                     );

//                     icon.classList.add(
//                         'fa-moon'
//                     );

//                     localStorage.setItem(
//                         'mindStepDarkMode',
//                         'disabled'
//                     );

//                 }

//             }
//         );

//     }
// );











/* =========================================================
   CONTACT FORM
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.querySelector(".contact-form");
    const contactButton = document.querySelector(".contact-submit");


    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            // Prevent page refresh
            event.preventDefault();


            // Get form values
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const subject = document.querySelector("#subject").value.trim();
            const message = document.querySelector("#message").value.trim();


            // Check if fields are empty
            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                alert("Please fill in all fields.");

                return;
            }


            // Check email format
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;
            }


            // Change button while submitting
            contactButton.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

            contactButton.disabled = true;


            // Simulate sending
            setTimeout(function () {

                alert(
                    "Thank you, " +
                    name +
                    "! Your message has been sent successfully."
                );


                // Clear form
                contactForm.reset();


                // Restore button
                contactButton.innerHTML =
                    'Send Message <i class="fa-solid fa-paper-plane"></i>';

                contactButton.disabled = false;

            }, 1200);

        });

    }

});




function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}