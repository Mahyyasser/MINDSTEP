document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // GET ALL QUESTIONS
    // =====================================================

    const questions = Array.from(
        document.querySelectorAll(".question-section")
    );

    const totalQuestions = questions.length;

    if (totalQuestions === 0) {
        console.error("No questions found.");
        return;
    }


    // =====================================================
    // CURRENT QUESTION
    // =====================================================

    let currentQuestion = 0;


    // =====================================================
    // SAVED ANSWERS
    // =====================================================

    const answers = [];


    // =====================================================
    // CORRECT ANSWERS
    // =====================================================

    const correctAnswers = {

        // HTML
        1: "B",
        2: "C",
        3: "B",
        4: "C",
        5: "B",
        6: "C",
        7: "B",
        8: "B",
        9: "B",
        10: "B",

        // CSS
        11: "B",
        12: "C",
        13: "A",
        14: "B",
        15: "B",
        16: "B",
        17: "B",
        18: "A",
        19: "B",
        20: "B",

        // JavaScript
        21: "A",
        22: "C",
        23: "B",
        24: "B",
        25: "C",
        26: "C",
        27: "B",
        28: "B",
        29: "B",
        30: "B"

    };


    // =====================================================
    // SUBJECTS
    // =====================================================

    const subjects = {

        HTML: {
            start: 1,
            end: 10,
            progress: ".html-progress",
            cardIndex: 0
        },

        CSS: {
            start: 11,
            end: 20,
            progress: ".css-progress",
            cardIndex: 1
        },

        JavaScript: {
            start: 21,
            end: 30,
            progress: ".js-progress",
            cardIndex: 2
        }

    };


    // =====================================================
    // SIDEBAR CARDS
    // =====================================================

    const cards = Array.from(
        document.querySelectorAll(
            ".side .Card, .side .CardActive"
        )
    );


    // =====================================================
    // GET SUBJECT
    // =====================================================

    function getSubject(questionNumber) {

        if (questionNumber >= 1 && questionNumber <= 10) {
            return "HTML";
        }

        if (questionNumber >= 11 && questionNumber <= 20) {
            return "CSS";
        }

        if (questionNumber >= 21 && questionNumber <= 30) {
            return "JavaScript";
        }

        return "";
    }


    // =====================================================
    // SAVE CURRENT ANSWER
    // =====================================================

    function saveCurrentAnswer() {

        const question = questions[currentQuestion];

        if (!question) {
            return;
        }

        const questionNumber = currentQuestion + 1;

        const selected = question.querySelector(
            'input[type="radio"]:checked'
        );

        if (!selected) {
            return;
        }

        const answerObject = {

            question: questionNumber,

            selected: selected.value,

            correct: correctAnswers[questionNumber],

            isCorrect:
                selected.value ===
                correctAnswers[questionNumber]

        };


        const existingIndex = answers.findIndex(
            function (item) {
                return item.question === questionNumber;
            }
        );


        if (existingIndex !== -1) {

            answers[existingIndex] = answerObject;

        } else {

            answers.push(answerObject);

        }

    }


    // =====================================================
    // RESTORE ANSWER
    // =====================================================

    function restoreAnswer() {

        const question = questions[currentQuestion];

        if (!question) {
            return;
        }

        const questionNumber = currentQuestion + 1;

        const savedAnswer = answers.find(
            function (item) {
                return item.question === questionNumber;
            }
        );

        if (!savedAnswer) {
            return;
        }

        const radio = question.querySelector(
            `input[type="radio"][value="${savedAnswer.selected}"]`
        );

        if (radio) {
            radio.checked = true;
        }

    }


    // =====================================================
    // UPDATE SIDEBAR PROGRESS
    // =====================================================

    function updateSidebar() {

        Object.keys(subjects).forEach(
            function (subjectName) {

                const subject = subjects[subjectName];

                const card = cards[subject.cardIndex];

                if (!card) {
                    return;
                }


                let answered = 0;


                for (
                    let i = subject.start;
                    i <= subject.end;
                    i++
                ) {

                    const answer = answers.find(
                        function (item) {
                            return item.question === i;
                        }
                    );

                    if (answer) {
                        answered++;
                    }

                }


                const total =
                    subject.end -
                    subject.start +
                    1;


                const progress =
                    Math.round(
                        (answered / total) * 100
                    );


                const progressBar =
                    card.querySelector(
                        subject.progress
                    );


                if (progressBar) {

                    progressBar.style.width =
                        progress + "%";

                }


                const info =
                    card.querySelector(".info");


                if (info) {

                    const spans =
                        info.querySelectorAll("span");


                    if (spans.length >= 2) {

                        spans[
                            spans.length - 1
                        ].textContent =
                            `${answered}/${total}`;

                    }

                }

            }
        );

    }


    // =====================================================
    // UPDATE ACTIVE SUBJECT
    // =====================================================

    function updateActiveSubject() {

        cards.forEach(
            function (card) {

                card.classList.remove("CardActive");

                card.classList.add("Card");

            }
        );


        const questionNumber =
            currentQuestion + 1;


        const subjectName =
            getSubject(questionNumber);


        if (!subjectName) {
            return;
        }


        const cardIndex =
            subjects[subjectName].cardIndex;


        const activeCard =
            cards[cardIndex];


        if (activeCard) {

            activeCard.classList.remove("Card");

            activeCard.classList.add("CardActive");

        }

    }


    // =====================================================
    // UPDATE QUESTION HEADER
    // =====================================================

    function updateQuestionHeader() {

        const question =
            questions[currentQuestion];

        if (!question) {
            return;
        }


        const questionNumber =
            currentQuestion + 1;


        const number =
            question.querySelector(".number");


        const percentage =
            question.querySelector(".percentage");


        const progressFill =
            question.querySelector(
                ".question-progressFill"
            );


        const progress =
            Math.round(
                (questionNumber / totalQuestions) * 100
            );


        if (number) {

            number.textContent =
                `Question ${questionNumber} of ${totalQuestions}`;

        }


        if (percentage) {

            percentage.textContent =
                `${progress}%`;

        }


        if (progressFill) {

            progressFill.style.width =
                `${progress}%`;

        }

    }


    // =====================================================
    // UPDATE BUTTONS
    // =====================================================

    function updateButtons() {

        const question =
            questions[currentQuestion];

        if (!question) {
            return;
        }


        const previous =
            question.querySelector(".previous");


        const next =
            question.querySelector(".Next");


        const submit =
            question.querySelector(".submit");


        const submitButton =
            question.querySelector(".submit-btn");


        const isFirstQuestion =
            currentQuestion === 0;


        const isLastQuestion =
            currentQuestion === totalQuestions - 1;


        // =================================================
        // PREVIOUS
        // =================================================

        if (previous) {

            if (isFirstQuestion) {

                previous.style.setProperty(
                    "display",
                    "none",
                    "important"
                );

            } else {

                previous.style.setProperty(
                    "display",
                    "flex",
                    "important"
                );

            }

        }


        // =================================================
        // NEXT
        // =================================================

        if (next) {

            if (isLastQuestion) {

                next.style.setProperty(
                    "display",
                    "none",
                    "important"
                );

            } else {

                next.style.setProperty(
                    "display",
                    "flex",
                    "important"
                );

            }

        }


        // =================================================
        // SUBMIT CONTAINER
        // =================================================

        if (submit) {

            if (isLastQuestion) {

                submit.style.setProperty(
                    "display",
                    "block",
                    "important"
                );

            } else {

                submit.style.setProperty(
                    "display",
                    "none",
                    "important"
                );

            }

        }


        // =================================================
        // SUBMIT BUTTON
        // =================================================

        if (submitButton) {

            if (isLastQuestion) {

                submitButton.style.setProperty(
                    "display",
                    "flex",
                    "important"
                );

                submitButton.style.alignItems =
                    "center";

                submitButton.style.justifyContent =
                    "center";

            } else {

                submitButton.style.setProperty(
                    "display",
                    "none",
                    "important"
                );

            }

        }

    }


    // =====================================================
    // SHOW QUESTION
    // =====================================================

    function showQuestion(index) {

        // حماية من الخروج عن الأسئلة
        if (index < 0) {
            index = 0;
        }


        if (index >= totalQuestions) {
            index = totalQuestions - 1;
        }


        currentQuestion = index;


        // =================================================
        // SHOW ONLY CURRENT QUESTION
        // =================================================

        questions.forEach(
            function (question, i) {

                if (i === currentQuestion) {

                    question.classList.add("active");

                    question.style.setProperty(
                        "display",
                        "block",
                        "important"
                    );

                } else {

                    question.classList.remove("active");

                    question.style.setProperty(
                        "display",
                        "none",
                        "important"
                    );

                }

            }
        );


        // =================================================
        // UPDATE EVERYTHING
        // =================================================

        updateQuestionHeader();

        updateActiveSubject();

        updateSidebar();

        updateButtons();

        restoreAnswer();

    }


    // =====================================================
    // NEXT BUTTON
    // =====================================================

    document.addEventListener(
        "click",
        function (event) {

            const nextButton =
                event.target.closest(".Next");


            if (!nextButton) {
                return;
            }


            saveCurrentAnswer();


            if (
                currentQuestion <
                totalQuestions - 1
            ) {

                showQuestion(
                    currentQuestion + 1
                );

            }

        }
    );


    // =====================================================
    // PREVIOUS BUTTON
    // =====================================================

    document.addEventListener(
        "click",
        function (event) {

            const previousButton =
                event.target.closest(".previous");


            if (!previousButton) {
                return;
            }


            saveCurrentAnswer();


            if (currentQuestion > 0) {

                showQuestion(
                    currentQuestion - 1
                );

            }

        }
    );


    // =====================================================
    // RADIO BUTTON
    // =====================================================

    document.addEventListener(
        "change",
        function (event) {

            if (
                event.target.matches(
                    'input[type="radio"]'
                )
            ) {

                saveCurrentAnswer();

                updateSidebar();

            }

        }
    );


    // =====================================================
    // SUBMIT BUTTON
    // =====================================================


// =====================================================
// SUBMIT BUTTON
// =====================================================

document.addEventListener(
    "click",
    function (event) {

        const submitButton =
            event.target.closest(".submit-btn");

        if (!submitButton) {
            return;
        }

        // نتأكد إنه آخر سؤال
        if (
            currentQuestion !==
            totalQuestions - 1
        ) {
            return;
        }

        console.log("SUBMIT WORKING");

        // حفظ إجابة آخر سؤال
        saveCurrentAnswer();

        // =================================================
        // CREATE RESULT
        // =================================================

        const result = {

            answers: answers,

            questions:
                questions.map(
                    function (question) {

                        return question.outerHTML;

                    }
                ),

            totalQuestions:
                totalQuestions

        };

        // =================================================
        // SAVE RESULT
        // =================================================

        localStorage.setItem(
            "testResult",
            JSON.stringify(result)
        );

        console.log(
            "SAVED RESULT:",
            result
        );

        // =================================================
        // GO TO YOUR PAGE
        // =================================================

        window.location.href =
            "result.html";

    }
);



    // =====================================================
    // EXIT BUTTON
    // =====================================================

    const exitButton =
        document.querySelector(".exit");


    if (exitButton) {

        exitButton.addEventListener(
            "click",
            function () {

                window.location.href =
                    "index.html";

            }
        );

    }


    // =====================================================
// TIMER
// =====================================================

let timeLeft = 20 * 60; // 20 minutes
let timerInterval = null;

const timer = document.querySelector(".Timer");

if (timer) {

    const timerText = timer.querySelector("span");

    function updateTimer() {

        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        const formattedTime =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        if (timerText) {
            timerText.textContent = formattedTime;
        }

        // الوقت خلص
        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            alert("Time is up!");

            saveCurrentAnswer();

            const result = {

                answers: answers,

                questions: questions.map(function (question) {
                    return question.outerHTML;
                }),

                totalQuestions: totalQuestions

            };

            localStorage.setItem(
                "testResult",
                JSON.stringify(result)
            );

            window.location.href = "review.html";

            return;
        }

        timeLeft--;
    }

    // إظهار 20:00 فورًا
    updateTimer();

    // يبدأ العد كل ثانية
    timerInterval = setInterval(updateTimer, 1000);
}


    // =====================================================
    // START
    // =====================================================

    // نخفي كل الأسئلة في البداية
    questions.forEach(
        function (question) {

            question.classList.remove("active");

            question.style.setProperty(
                "display",
                "none",
                "important"
            );

        }
    );


    // =====================================================
    // SHOW FIRST QUESTION
    // =====================================================

    showQuestion(0);

});
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".side");

menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("mobile-open");
});