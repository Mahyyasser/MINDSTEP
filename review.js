document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // GET SAVED RESULT
    // =====================================================

    const savedResult = localStorage.getItem("testResult");

    const reviewQuestions =
        document.getElementById("reviewQuestions");

    const scoreElement =
        document.getElementById("score");


    // =====================================================
    // IF NO RESULT
    // =====================================================

    if (!savedResult) {

        reviewQuestions.innerHTML = `
            <div class="no-result">

                <h2>No test result found</h2>

                <p>
                    Please complete the test first.
                </p>

            </div>
        `;

        return;
    }


    // =====================================================
    // PARSE RESULT
    // =====================================================

    let result;

    try {

        result = JSON.parse(savedResult);

    } catch (error) {

        console.error(
            "Could not read test result:",
            error
        );

        reviewQuestions.innerHTML = `
            <div class="no-result">

                <h2>Something went wrong</h2>

                <p>
                    The test result could not be loaded.
                </p>

            </div>
        `;

        return;
    }


    // =====================================================
    // DATA
    // =====================================================

    const answers =
        Array.isArray(result.answers)
            ? result.answers
            : [];

    const questionsHTML =
        Array.isArray(result.questions)
            ? result.questions
            : [];

    const totalQuestions =
        result.totalQuestions ||
        questionsHTML.length;


    // =====================================================
    // SCORE
    // =====================================================

    let score = 0;

    answers.forEach(function (answer) {

        if (answer.isCorrect === true) {
            score++;
        }

    });


    if (scoreElement) {

        scoreElement.textContent =
            `${score} / ${totalQuestions}`;

    }


    // =====================================================
    // CREATE REVIEW QUESTIONS
    // =====================================================

    questionsHTML.forEach(
        function (html, index) {

            const wrapper =
                document.createElement("div");

            wrapper.innerHTML = html;

            const originalQuestion =
                wrapper.querySelector(
                    ".question-section"
                );


            if (!originalQuestion) {
                return;
            }


            // =================================================
            // QUESTION NUMBER
            // =================================================

     const questionNumber = index + 1;


            // =================================================
            // CREATE REVIEW CARD
            // =================================================

     const reviewQuestion =
        document.createElement("article");

     reviewQuestion.className = "review-question";


            // =================================================
            // QUESTION HEADER
            // =================================================

     const questionHeader =
      originalQuestion.querySelector( ".question-header" );


            if (questionHeader) {

                const headerClone =
                    questionHeader.cloneNode(true);


                const number =
                    headerClone.querySelector(
                        ".number"
                    );

                const percentage =
                    headerClone.querySelector(
                        ".percentage"
                    );

                const progressFill =
                    headerClone.querySelector(
                        ".question-progressFill"
                    );


                if (number) {

                    number.textContent =
                        `Question ${questionNumber} of ${totalQuestions}`;

                }


                const progress =
                    Math.round(
                        (questionNumber / totalQuestions) * 100
                    );


                if (percentage) {

                    percentage.textContent =
                        `${progress}%`;

                }


                if (progressFill) {

                    progressFill.style.width =
                        `${progress}%`;

                }


                reviewQuestion.appendChild(
                    headerClone
                );

            }


            // =================================================
            // SUBJECT INFO
            // =================================================

            const subjectInfo =
                originalQuestion.querySelector(
                    ".subject-info"
                );


            if (subjectInfo) {

                reviewQuestion.appendChild(
                    subjectInfo.cloneNode(true)
                );

            }


            // =================================================
            // QUESTION TEXT
            // =================================================

            const questionTitle =
                originalQuestion.querySelector(
                    ".questions h1"
                );


            if (questionTitle) {

                reviewQuestion.appendChild(
                    questionTitle.cloneNode(true)
                );

            } else {

                const fallbackTitle =
                    originalQuestion.querySelector("h1");

                if (fallbackTitle) {

                    reviewQuestion.appendChild(
                        fallbackTitle.cloneNode(true)
                    );

                }

            }


            // =================================================
            // ANSWERS
            // =================================================

            const originalAnswers =
                originalQuestion.querySelector(
                    ".answers"
                );


            if (!originalAnswers) {
                return;
            }


            const answersContainer =
                document.createElement("div");

            answersContainer.className =
                "answers";


            // =================================================
            // USER ANSWER
            // =================================================

            const savedAnswer =
                answers.find(
                    function (answer) {

                        return answer.question ===
                            questionNumber;

                    }
                );


            const userAnswer =
                savedAnswer
                    ? savedAnswer.selected
                    : null;


            // =================================================
            // CORRECT ANSWER
            // =================================================

            const correctAnswer =
                savedAnswer
                    ? savedAnswer.correct
                    : null;


            // =================================================
            // CLONE OPTIONS
            // =================================================

            const options =
                originalAnswers.querySelectorAll(
                    ".option"
                );


            options.forEach(
                function (option) {

                    const optionClone =
                        option.cloneNode(true);


                    const radio =
                        optionClone.querySelector(
                            'input[type="radio"]'
                        );


                    if (!radio) {
                        return;
                    }


                    const optionValue =
                        radio.value;


                    // =============================================
                    // REMOVE INPUT INTERACTION
                    // =============================================

                    radio.checked =
                        optionValue === userAnswer;

                    radio.disabled = true;


                    // =============================================
                    // CORRECT ANSWER
                    // =============================================

                    if (
                        correctAnswer &&
                        optionValue === correctAnswer
                    ) {

                        optionClone.classList.add(
                            "correct-answer"
                        );


                        const label =
                            document.createElement("span");

                        label.className =
                            "answer-label correct-label";

                        label.innerHTML =
                            `<i class="fa-solid fa-check"></i> Correct answer`;

                        optionClone.appendChild(
                            label
                        );

                    }


                    // =============================================
                    // USER CORRECT
                    // =============================================

                    if (
                        userAnswer &&
                        optionValue === userAnswer &&
                        userAnswer === correctAnswer
                    ) {

                        optionClone.classList.add(
                            "user-correct"
                        );

                    }


                    // =============================================
                    // USER WRONG
                    // =============================================

                    if (
                        userAnswer &&
                        optionValue === userAnswer &&
                        userAnswer !== correctAnswer
                    ) {

                        optionClone.classList.add(
                            "user-wrong"
                        );


                        const label =
                            document.createElement("span");

                        label.className =
                            "answer-label wrong-label";

                        label.innerHTML =
                            `<i class="fa-solid fa-xmark"></i> Your answer`;

                        optionClone.appendChild(
                            label
                        );

                    }


                    answersContainer.appendChild(
                        optionClone
                    );

                }
            );


            reviewQuestion.appendChild(
                answersContainer
            );


            // =================================================
            // RESULT MESSAGE
            // =================================================

            const resultMessage =
                document.createElement("div");


            resultMessage.className =
                "result-message";


            if (!savedAnswer) {

                resultMessage.classList.add(
                    "unanswered-message"
                );

                resultMessage.innerHTML =
                    `
                    <i class="fa-solid fa-circle-exclamation"></i>
                    You did not answer this question.
                    `;

            } else if (
                savedAnswer.isCorrect === true
            ) {

                resultMessage.classList.add(
                    "correct-message"
                );

                resultMessage.innerHTML =
                    `
                    <i class="fa-solid fa-circle-check"></i>
                    Correct answer!
                    `;

            } else {

                resultMessage.classList.add(
                    "wrong-message"
                );

                resultMessage.innerHTML =
                    `
                    <i class="fa-solid fa-circle-xmark"></i>
                    Your answer is incorrect.
                    `;

            }


            reviewQuestion.appendChild(
                resultMessage
            );


            // =================================================
            // ADD QUESTION TO PAGE
            // =================================================

            reviewQuestions.appendChild(
                reviewQuestion
            );

        }
    );


    // =====================================================
    // BACK TO TEST
    // =====================================================

    function backToTest() {
        window.location.href = "index.html";
    }


    const backButton =
        document.getElementById("backToTest");


    if (backButton) {

        backButton.addEventListener(
            "click",
            backToTest
        );

    }
function goToResultPage() {

        window.location.href = "result.html";

    }

    const backButtonBottom =
        document.getElementById(
            "backToTestBottom"
        );


    if (backButtonBottom) {

        backButtonBottom.addEventListener(
            "click",
            goToResultPage
        );

    }

});