
/* =====================================================
   TASKS
===================================================== */

const tasks = [

    /* =========================
       HTML
    ========================= */

    {
        id: 1,
        subject: "HTML",
        level: "Easy",

        title: "Personal Introduction Page",

        description:
            "Create a simple personal introduction page using HTML.",

        requirements: [
            "Add a main heading with your name.",
            "Add a short paragraph about yourself.",
            "Add an image with an alt attribute.",
            "Add an unordered list.",
            "Add three hobbies."
        ],

        language: "HTML",

        image: "images/tasks/html-question-1.png",

        solution:
`<!DOCTYPE html>
<html>
<head>
    <title>My Introduction</title>
</head>

<body>

    <h1>Rahma</h1>

    <p>
        I am a student learning programming.
    </p>

    <img
        src="profile.jpg"
        alt="My Profile Photo"
    >

    <h2>My Hobbies</h2>

    <ul>
        <li>Reading</li>
        <li>Drawing</li>
        <li>Programming</li>
    </ul>

</body>

</html>`
    },


    {
        id: 2,
        subject: "HTML",
        level: "Medium",

        title: "Student Information Page",

        description:
            "Create a student information page using HTML.",

        requirements: [
            "Add a heading.",
            "Add a short description.",
            "Add a list of three skills.",
            "Create a table with three courses and their grades.",
            "Add a link to a favorite website."
        ],

        language: "HTML",

        // image: "images/tasks/html-question-2.png",

        solution:
`<!DOCTYPE html>
<html>

<head>
    <title>Student Information</title>
</head>

<body>

    <h1>Student Information</h1>

    <p>
        I am a student interested in web development.
    </p>

    <h2>My Skills</h2>

    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>

    <h2>Courses</h2>

    <table border="1">

        <tr>
            <th>Course</th>
            <th>Grade</th>
        </tr>

        <tr>
            <td>HTML</td>
            <td>A</td>
        </tr>

        <tr>
            <td>CSS</td>
            <td>B</td>
        </tr>

        <tr>
            <td>JavaScript</td>
            <td>A</td>
        </tr>

    </table>

    <br>

    <a href="https://www.google.com">
        My Favorite Website
    </a>

</body>

</html>`
    },


    {
        id: 3,
        subject: "HTML",
        level: "Hard",

        title: "Complete Contact Page",

        description:
            "Create a complete contact page using HTML.",

        requirements: [
            "Add a heading.",
            "Add a short description.",
            "Create a contact form.",
            "Add name, email and password fields.",
            "Add gender using radio buttons.",
            "Add a message textarea.",
            "Add a submit button.",
            "Use labels for the form fields."
        ],

        language: "HTML",

        // image: "images/tasks/html-question-3.png",

        solution:
`<!DOCTYPE html>
<html>

<head>
    <title>Contact Me</title>
</head>

<body>

    <h1>Contact Me</h1>

    <p>
        You can contact me using this form.
    </p>

    <form>

        <label for="name">
            Name:
        </label>

        <input
            type="text"
            id="name"
        >

        <br><br>

        <label for="email">
            Email:
        </label>

        <input
            type="email"
            id="email"
        >

        <br><br>

        <label for="password">
            Password:
        </label>

        <input
            type="password"
            id="password"
        >

        <br><br>

        <p>Gender:</p>

        <label>
            <input
                type="radio"
                name="gender"
            >
            Male
        </label>

        <label>
            <input
                type="radio"
                name="gender"
            >
            Female
        </label>

        <br><br>

        <label for="message">
            Message:
        </label>

        <br>

        <textarea
            id="message"
        ></textarea>

        <br><br>

        <button type="submit">
            Submit
        </button>

    </form>

</body>

</html>`
    },


    {
        id: 4,
        subject: "HTML",
        level: "Final",

        title: "Personal Portfolio - HTML Final",

        description:
            "Create a complete personal portfolio page using HTML only.",

        requirements: [
            "Add a main heading with your name.",
            "Add a short introduction paragraph.",
            "Add a profile image with an alt attribute.",
            "Create an About Me section.",
            "Create a Skills section with at least 3 skills.",
            "Create a Courses section with at least 3 courses and grades.",
            "Add a Favorite Website link that opens in a new tab.",
            "Create a Contact Me section.",
            "Add name, email and password fields.",
            "Add gender using radio buttons.",
            "Add a message textarea.",
            "Add a submit button."
        ],

        language: "HTML",

        // image: "images/tasks/html-final.png",

        solution:
`<!DOCTYPE html>
<html>

<head>
    <title>My Portfolio</title>
</head>

<body>

    <h1>Rahma</h1>

    <p>
        I am a student learning web development.
    </p>

    <img
        src="profile.jpg"
        alt="My Profile Photo"
    >

    <h2>About Me</h2>

    <p>
        I enjoy learning programming
        and creating websites.
    </p>

    <h2>Skills</h2>

    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>

    <h2>Courses</h2>

    <table border="1">

        <tr>
            <th>Course</th>
            <th>Grade</th>
        </tr>

        <tr>
            <td>HTML</td>
            <td>A</td>
        </tr>

        <tr>
            <td>CSS</td>
            <td>A</td>
        </tr>

        <tr>
            <td>JavaScript</td>
            <td>B</td>
        </tr>

    </table>

    <h2>Favorite Website</h2>

    <a
        href="https://www.google.com"
        target="_blank"
    >
        Visit My Favorite Website
    </a>

    <h2>Contact Me</h2>

    <form>

        <label for="name">
            Name:
        </label>

        <input
            type="text"
            id="name"
        >

        <br><br>

        <label for="email">
            Email:
        </label>

        <input
            type="email"
            id="email"
        >

        <br><br>

        <label for="password">
            Password:
        </label>

        <input
            type="password"
            id="password"
        >

        <br><br>

        <p>Gender:</p>

        <label>
            <input
                type="radio"
                name="gender"
            >
            Male
        </label>

        <label>
            <input
                type="radio"
                name="gender"
            >
            Female
        </label>

        <br><br>

        <label for="message">
            Message:
        </label>

        <br>

        <textarea
            id="message"
        ></textarea>

        <br><br>

        <button type="submit">
            Submit
        </button>

    </form>

</body>

</html>`
    },


    /* =========================
       CSS
    ========================= */

    {
        id: 1,
        subject: "CSS",
        level: "Easy",

        title: "Style a Profile Page",

        description:
            "Create CSS styles for a profile page.",

        requirements: [
            "Change the background color.",
            "Change the text color.",
            "Change the font size.",
            "Center the main heading."
        ],

        language: "CSS",

        // image: "images/tasks/css-question-1.png",

        solution:
`body {
    background-color: lightblue;
    color: purple;
    font-size: 18px;
}

h1 {
    text-align: center;
}`
    },


    {
        id: 2,
        subject: "CSS",
        level: "Medium",

        title: "Create a Card",

        description:
            "Create CSS styles for a card and a button.",

        requirements: [
            "Give the card a width.",
            "Add a background color.",
            "Add padding.",
            "Add a border.",
            "Add rounded corners.",
            "Add a shadow.",
            "Style the button.",
            "Give the button rounded corners."
        ],

        language: "CSS",

        // image: "images/tasks/css-question-2.png",

        solution:
`.card {
    width: 300px;
    background-color: white;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 10px #ccc;
}

button {
    background-color: purple;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
}`
    },


    {
        id: 3,
        subject: "CSS",
        level: "Hard",

        title: "Navigation Bar and Cards",

        description:
            "Create CSS for a navigation bar and a group of cards using Flexbox.",

        requirements: [
            "Use Flexbox for the navigation links.",
            "Use Flexbox for the cards.",
            "Place the items next to each other.",
            "Add a hover effect to the links.",
            "Add a hover effect to the buttons."
        ],

        language: "CSS",

        // image: "images/tasks/css-question-3.png",

        solution:
`.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-links {
    display: flex;
    gap: 20px;
}

.nav-links a:hover {
    color: purple;
}

.cards {
    display: flex;
    gap: 20px;
}

.card {
    width: 200px;
    padding: 20px;
    border: 1px solid #ddd;
}

.card button:hover {
    background-color: purple;
    color: white;
}`
    },


    {
        id: 4,
        subject: "CSS",
        level: "Final",

        title: "Personal Portfolio - CSS Final",

        description:
            "Create a complete CSS design for a personal portfolio page.",

        requirements: [
            "Style the navigation bar.",
            "Center the profile section.",
            "Style the profile image with rounded corners.",
            "Style the About Me section.",
            "Display the skills using Flexbox.",
            "Create course cards.",
            "Add borders, rounded corners, padding and shadows.",
            "Style the contact form.",
            "Style inputs and button.",
            "Add hover effects for links and buttons.",
            "Use Flexbox to organize the main sections."
        ],

        language: "CSS",

        // image: "images/tasks/css-final.png",

        solution:
`body {
    font-family: Arial, sans-serif;
    background-color: #f5f7ff;
    color: #333;
}

nav {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: white;
}

.profile {
    text-align: center;
    padding: 40px;
}

.profile img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.about {
    padding: 30px;
    background-color: white;
}

.skills {
    display: flex;
    gap: 15px;
}

.skill {
    padding: 10px 20px;
    background-color: #e8e4ff;
    border-radius: 10px;
}

.courses {
    display: flex;
    gap: 20px;
}

.course {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 10px #ddd;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input,
textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: purple;
    color: white;
}

a:hover,
button:hover {
    opacity: 0.8;
}`
    },


    /* =========================
       JAVASCRIPT
    ========================= */

    {
        id: 1,
        subject: "JavaScript",
        level: "Easy",

        title: "Student Variables",

        description:
            "Create JavaScript variables for a student's name, age and grade, then print them to the console.",

        requirements: [
            "Create a variable for the student's name.",
            "Create a variable for the student's age.",
            "Create a variable for the student's grade.",
            "Print the three variables to the console."
        ],

        language: "JavaScript",

        // image: "images/tasks/js-question-1.png",

        solution:
`let studentName = "Rahma";

let age = 20;

let grade = "A";

console.log(studentName);

console.log(age);

console.log(grade);`
    },


    {
        id: 2,
        subject: "JavaScript",
        level: "Medium",

        title: "Check Student Grade",

        description:
            "Create a function that checks if a student passes or fails.",

        requirements: [
            "Create a function.",
            "Take the student's grade as a parameter.",
            "If the grade is 50 or higher, print Pass.",
            "Otherwise, print Fail."
        ],

        language: "JavaScript",

        // image: "images/tasks/js-question-2.png",

        solution:
`function checkGrade(grade) {

    if (grade >= 50) {

        console.log("Pass");

    } else {

        console.log("Fail");

    }

}

checkGrade(75);`
    },


    {
        id: 3,
        subject: "JavaScript",
        level: "Hard",

        title: "Change Paragraph Text",

        description:
            "Create a button that changes the text of a paragraph when the user clicks it.",

        requirements: [
            "Create a paragraph.",
            "Create a button.",
            "Create a JavaScript function.",
            "Use DOM manipulation.",
            "Change the paragraph text when the button is clicked."
        ],

        language: "JavaScript",

        // image: "images/tasks/js-question-3.png",

        solution:
`function changeText() {

    document.getElementById("message").innerText =
        "Welcome to JavaScript!";

}

document
    .getElementById("changeButton")
    .addEventListener(
        "click",
        changeText
    );`
    },


    {
        id: 4,
        subject: "JavaScript",
        level: "Final",

        title: "Interactive Personal Portfolio",

        description:
            "Create JavaScript for an interactive personal portfolio page.",

        requirements: [
            "Create a button that changes the welcome message.",
            "Create a button that changes the background color.",
            "Create a form with a name input.",
            "Display a welcome message using the entered name.",
            "Check that the name field is not empty.",
            "Display an error message if the field is empty.",
            "Use JavaScript functions.",
            "Use DOM manipulation."
        ],

        language: "JavaScript",

        // image: "images/tasks/js-final.png",

        solution:
`function changeWelcome() {

    document.getElementById("welcome")
        .innerText =
        "Welcome to my portfolio!";

}


function changeBackground() {

    document.body.style.backgroundColor =
        "lightblue";

}


document
    .getElementById("nameForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            let name =
                document.getElementById("name").value;

            if (name === "") {

                document.getElementById("error")
                    .innerText =
                    "Please enter your name.";

            } else {

                document.getElementById("error")
                    .innerText = "";

                document.getElementById("welcome")
                    .innerText =
                    "Welcome " + name + "!";

            }

        }
    );`
    }

];



/* =====================================================
   CURRENT STATE
===================================================== */

let currentSubject = "HTML";

let currentTask = 0;



/* =====================================================
   ELEMENTS
===================================================== */

const taskNumber =
    document.getElementById("taskNumber");

const currentLanguage =
    document.getElementById("currentLanguage");

const taskTitle =
    document.getElementById("taskTitle");

const difficulty =
    document.getElementById("difficulty");

const taskDescription =
    document.getElementById("taskDescription");

const requirementsList =
    document.getElementById("requirementsList");

const language =
    document.getElementById("language");

const codeEditor =
    document.getElementById("codeEditor");

const taskCounter =
    document.getElementById("taskCounter");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const checkBtn =
    document.getElementById("checkBtn");

const resultModal =
    document.getElementById("resultModal");

const closeModal =
    document.getElementById("closeModal");

const backToTask =
    document.getElementById("backToTask");

const nextFromResult =
    document.getElementById("nextFromResult");

const userSolution =
    document.getElementById("userSolution");

const correctSolution =
    document.getElementById("correctSolution");

const outputImage =
    document.getElementById("outputImage");

const completedCount =
    document.getElementById("completedCount");

const totalTasks =
    document.getElementById("totalTasks");

const progressFill =
    document.getElementById("progressFill");

const progressText =
    document.getElementById("progressText");

const currentSubjectText =
    document.getElementById("currentSubject");

const subjectButtons =
    document.querySelectorAll(".subject-btn");



/* =====================================================
   GET TASKS
===================================================== */

function getCurrentTasks() {

    return tasks.filter(function(task) {

        return task.subject === currentSubject;

    });

}



/* =====================================================
   LOAD TASK
===================================================== */

function loadTask() {

    const subjectTasks =
        getCurrentTasks();

    const task =
        subjectTasks[currentTask];


    taskNumber.textContent =
        String(task.id).padStart(2, "0");


    currentLanguage.textContent =
        task.subject;


    taskTitle.textContent =
        task.title;


    taskDescription.textContent =
        task.description;


    language.textContent =
        task.language;


    difficulty.textContent =
        task.level;


    difficulty.className =
        "difficulty";


    if (task.level === "Easy") {

        difficulty.classList.add("easy");

    }

    else if (task.level === "Medium") {

        difficulty.classList.add("medium");

    }

    else if (task.level === "Hard") {

        difficulty.classList.add("hard");

    }

    else {

        difficulty.classList.add("final");

    }


    requirementsList.innerHTML = "";


    task.requirements.forEach(
        function(item) {

            const li =
                document.createElement("li");

            li.textContent =
                item;

            requirementsList.appendChild(li);

        }
    );


    codeEditor.value = "";


    taskCounter.textContent =
        `${currentTask + 1} / ${subjectTasks.length}`;


    updateProgress();

}



/* =====================================================
   NEXT
===================================================== */

function nextTask() {

    const subjectTasks =
        getCurrentTasks();


    if (
        currentTask <
        subjectTasks.length - 1
    ) {

        currentTask++;

        loadTask();

        return;

    }


    if (currentSubject === "HTML") {

        currentSubject = "CSS";

        currentTask = 0;

        updateSubjectButtons();

        loadTask();

        return;
    }


    if (currentSubject === "CSS") {

        currentSubject = "JavaScript";

        currentTask = 0;

        updateSubjectButtons();

        loadTask();

        return;
    }


    alert(
        "🎉 You completed all tasks!"
    );

}



/* =====================================================
   PREVIOUS
===================================================== */

function previousTask() {

    if (currentTask > 0) {

        currentTask--;

        loadTask();

        return;

    }


    if (currentSubject === "CSS") {

        currentSubject = "HTML";

        currentTask =
            getCurrentTasks().length - 1;

        updateSubjectButtons();

        loadTask();

        return;
    }


    if (currentSubject === "JavaScript") {

        currentSubject = "CSS";

        currentTask =
            getCurrentTasks().length - 1;

        updateSubjectButtons();

        loadTask();

        return;
    }

}



/* =====================================================
   SUBJECT
===================================================== */

function changeSubject(subject) {

    currentSubject =
        subject;

    currentTask =
        0;

    updateSubjectButtons();

    loadTask();

}



/* =====================================================
   UPDATE SUBJECT BUTTONS
===================================================== */

function updateSubjectButtons() {

    subjectButtons.forEach(
        function(button) {

            button.classList.remove(
                "active"
            );


            if (
                button.dataset.subject ===
                currentSubject
            ) {

                button.classList.add(
                    "active"
                );

            }

        }
    );

}



/* =====================================================
   PROGRESS
===================================================== */

function updateProgress() {

    const subjectTasks =
        getCurrentTasks();


    const total =
        subjectTasks.length;


    const current =
        currentTask + 1;


    const percentage =
        (current / total) * 100;


    completedCount.textContent =
        current;


    totalTasks.textContent =
        total;


    progressFill.style.width =
        percentage + "%";


    progressText.textContent =
        `Task ${current} of ${total}`;


    currentSubjectText.textContent =
        currentSubject;

}



/* =====================================================
   CHECK SOLUTION
===================================================== */

function checkSolution() {

    const subjectTasks =
        getCurrentTasks();

    const task =
        subjectTasks[currentTask];

    const studentCode =
        codeEditor.value.trim();


    if (studentCode === "") {

        alert(
            "Please write your code first."
        );

        return;

    }


    userSolution.textContent =
        studentCode;


    correctSolution.textContent =
        task.solution;


    let prismLanguage =
        "markup";


    if (task.language === "CSS") {

        prismLanguage =
            "css";

    }

    else if (
        task.language === "JavaScript"
    ) {

        prismLanguage =
            "javascript";

    }


    userSolution.className =
        "language-" +
        prismLanguage;


    correctSolution.className =
        "language-" +
        prismLanguage;


    Prism.highlightElement(
        userSolution
    );


    Prism.highlightElement(
        correctSolution
    );


    outputImage.src =
        task.image;


    outputImage.alt =
        "Expected output for " +
        task.title;


    resultModal.classList.add(
        "show"
    );

}



/* =====================================================
   SUBJECT BUTTON EVENTS
===================================================== */

subjectButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                changeSubject(
                    button.dataset.subject
                );

            }
        );

    }
);



/* =====================================================
   BUTTON EVENTS
===================================================== */

checkBtn.addEventListener(
    "click",
    checkSolution
);


nextBtn.addEventListener(
    "click",
    nextTask
);


previousBtn.addEventListener(
    "click",
    previousTask
);


closeModal.addEventListener(
    "click",
    function() {

        resultModal.classList.remove(
            "show"
        );

    }
);


backToTask.addEventListener(
    "click",
    function() {

        resultModal.classList.remove(
            "show"
        );

    }
);


nextFromResult.addEventListener(
    "click",
    function() {

        resultModal.classList.remove(
            "show"
        );

        nextTask();

    }
);



/* =====================================================
   CLOSE MODAL OUTSIDE
===================================================== */

resultModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === resultModal
        ) {

            resultModal.classList.remove(
                "show"
            );

        }

    }
);



/* =====================================================
   START
===================================================== */

loadTask();

