document.addEventListener("DOMContentLoaded", function () {

    const pages = document.querySelectorAll(".onboarding");

    let currentPage = 0;

    pages.forEach(function (page, index) {
        page.style.display = index === 0 ? "block" : "none";
    });

    // Page 1 - Checkboxes

    const checkboxes = document.querySelectorAll(
        ".option input[type='checkbox']"
    );

    const continueBtn = document.getElementById("continueBtn");

    if (continueBtn) {
        continueBtn.style.display = "none";
    }

    checkboxes.forEach(function (checkbox) {

        checkbox.addEventListener("change", function () {

            const selected = document.querySelectorAll(
                ".option input[type='checkbox']:checked"
            );

            if (selected.length > 0) {
                continueBtn.style.display = "block";
            }

            else {
                continueBtn.style.display = "none";
            }

        });

    });

    // Continue - Page 1 → Page 2

    if (continueBtn) {

        continueBtn.addEventListener("click", function () {

            pages[currentPage].style.display = "none";

            currentPage++;

            pages[currentPage].style.display = "block";

        });

    }


    // =========================
    // Radio Buttons
    // Page 2 → Page 3
    // Page 3 → Page 4
    // Page 4 → Page 5
    // =========================

    const radios = document.querySelectorAll(
        ".onboarding input[type='radio']"
    );


    radios.forEach(function (radio) {

        radio.addEventListener("change", function () {

            const current = this.closest(".onboarding");

            currentPage = Array.from(pages).indexOf(current);

            if (currentPage >= 1 && currentPage <= 3) {

                current.style.display = "none";

                currentPage++;

                pages[currentPage].style.display = "block";

            }

        });

    });


    //Back

    const backButtons = document.querySelectorAll("#back, #backBtn");
    backButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const current = this.closest(".onboarding");

            currentPage = Array.from(pages).indexOf(current);


            if (currentPage > 0) {

                current.style.display = "none";

                currentPage--;

                pages[currentPage].style.display = "block";

            }

        });

    });

    // Finish Button - Page 5

    const finishBtn = document.getElementById("finish");

    if (finishBtn) {

        finishBtn.addEventListener("click", function () {

            console.log("Starting Diagnostic Test...");

            window.location.href = "diagnostic-test.html";

        });

    }

    // Later Button - Page 5
    

    const laterBtn = document.getElementById("later");

    if (laterBtn) {

        laterBtn.addEventListener("click", function () {

            console.log("User chose to do it later");

            window.location.href = "index.html";

        });

    }

});