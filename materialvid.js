// ===============================
// قاعدة بيانات الفيديوهات
// كل فيديو له: id, title, teacher, duration, category, description,
// learningPoints (اللي هيتعلمه المستخدم), tags
// ===============================

const videoDatabase = {

    // ---------- HTML ----------
    "html-introduction": {
        title: "HTML Introduction",
        teacher: "Ahmed Radwan",
        duration: "3:14",
        category: "html",
        description: "In this lesson, you will learn the basics of HTML and how HTML is used to build the structure of web pages.",
        learningPoints: [
            "What is HTML and why we use it",
            "How a web page is structured",
            "Writing your first HTML tags",
            "How browsers read HTML files"
        ],
        tags: ["HTML", "Beginner", "Web Development"]
    },
    "html-editors": {
        title: "HTML Editors",
        teacher: "Mahi Mohamed",
        duration: "1:28",
        category: "html",
        description: "A quick tour of the code editors used to write HTML, and how to set one up so you can start coding right away.",
        learningPoints: [
            "Choosing a code editor",
            "Installing and setting up VS Code",
            "Useful editor extensions",
            "Creating and saving your first file"
        ],
        tags: ["HTML", "Tools", "Beginner"]
    },
    "html-element": {
        title: "HTML Element",
        teacher: "Medhat Al-Hosary",
        duration: "2:17",
        category: "html",
        description: "Learn what an HTML element is, how opening and closing tags work, and how elements nest inside each other.",
        learningPoints: [
            "What makes up an HTML element",
            "Opening vs closing tags",
            "Nested elements",
            "Empty (self-closing) elements"
        ],
        tags: ["HTML", "Elements", "Beginner"]
    },
    "html-attributes": {
        title: "HTML Attributes",
        teacher: "Mahi Mohamed",
        duration: "1:47",
        category: "html",
        description: "Discover how attributes add extra information to HTML elements, such as links, sources, and styling hooks.",
        learningPoints: [
            "The syntax of an attribute",
            "Common attributes like href, src, alt",
            "The class and id attributes",
            "Best practices when using attributes"
        ],
        tags: ["HTML", "Attributes", "Beginner"]
    },
    "html-image": {
        title: "HTML Image",
        teacher: "Medhat Al-Hosary",
        duration: "3:47",
        category: "html",
        description: "Learn how to insert images into a web page and control their size, alt text, and alignment.",
        learningPoints: [
            "Using the img tag",
            "Setting width and height",
            "Writing meaningful alt text",
            "Image file paths (relative vs absolute)"
        ],
        tags: ["HTML", "Images", "Beginner"]
    },
    "html-formatting": {
        title: "HTML Formatting",
        teacher: "Ahmed Radwan",
        duration: "5:47",
        category: "html",
        description: "Explore the tags used to format text in HTML, including bold, italic, and other emphasis elements.",
        learningPoints: [
            "Bold and italic text",
            "Marked and highlighted text",
            "Subscript and superscript",
            "When to use formatting tags vs CSS"
        ],
        tags: ["HTML", "Formatting", "Beginner"]
    },

    // ---------- CSS ----------
    "css-introduction": {
        title: "Css Introduction",
        teacher: "Mohammed Alaa",
        duration: "5:00",
        category: "css",
        description: "An introduction to CSS and how it's used to style and design the HTML pages you build.",
        learningPoints: [
            "What CSS does for a web page",
            "How CSS connects to HTML",
            "Selectors, properties and values",
            "The cascade and specificity basics"
        ],
        tags: ["CSS", "Beginner", "Styling"]
    },
    "css-syntax": {
        title: "Css Syntax",
        teacher: "Ibtihal Said",
        duration: "5:28",
        category: "css",
        description: "Learn the exact syntax rules for writing CSS: selectors, declaration blocks, properties and values.",
        learningPoints: [
            "Anatomy of a CSS rule",
            "Selectors and declaration blocks",
            "Multiple declarations per rule",
            "Common syntax mistakes to avoid"
        ],
        tags: ["CSS", "Syntax", "Beginner"]
    },
    "css-colors": {
        title: "Css Colors",
        teacher: "Medhat Al-Hosary",
        duration: "3:00",
        category: "css",
        description: "Discover the different ways to define colors in CSS, from named colors to hex and RGB values.",
        learningPoints: [
            "Named colors",
            "Hex color codes",
            "RGB color values",
            "Choosing accessible color contrast"
        ],
        tags: ["CSS", "Colors", "Beginner"]
    },
    "css-comments": {
        title: "Css Comments",
        teacher: "Ibtihal Said",
        duration: "1:00",
        category: "css",
        description: "Learn how to write comments in CSS to document your code and temporarily disable styles.",
        learningPoints: [
            "CSS comment syntax",
            "Documenting your stylesheet",
            "Using comments to debug",
            "Good commenting habits"
        ],
        tags: ["CSS", "Comments", "Beginner"]
    },
    "css-add-to-html": {
        title: "How To Add Css to Html",
        teacher: "Mohammed Alaa",
        duration: "2:00",
        category: "css",
        description: "The three ways to connect CSS to an HTML page: inline, internal, and external stylesheets.",
        learningPoints: [
            "Inline styles",
            "Internal style tags",
            "Linking an external stylesheet",
            "Which method to use and when"
        ],
        tags: ["CSS", "Setup", "Beginner"]
    },
    "css-rgb-rgba": {
        title: "Css RGB & RGBA",
        teacher: "Medhat Al-Hosary",
        duration: "3:00",
        category: "css",
        description: "A closer look at the RGB and RGBA color functions, and how to control transparency in CSS.",
        learningPoints: [
            "How RGB values work",
            "Adding transparency with RGBA",
            "RGBA vs opacity",
            "Practical use cases"
        ],
        tags: ["CSS", "Colors", "Intermediate"]
    },

    // ---------- JavaScript ----------
    "js-introduction": {
        title: "JavaScript Introduction",
        teacher: "Mohammed Abd Alla",
        duration: "5:00",
        category: "js",
        description: "Get started with JavaScript and understand the role it plays in making web pages interactive.",
        learningPoints: [
            "What JavaScript is used for",
            "Adding JavaScript to a page",
            "The browser console",
            "Writing your first script"
        ],
        tags: ["JavaScript", "Beginner", "Web Development"]
    },
    "js-output": {
        title: "JavaScript Output",
        teacher: "Osama Hamdi",
        duration: "3:00",
        category: "js",
        description: "Learn the different ways JavaScript can display output, from the console to the page itself.",
        learningPoints: [
            "console.log for debugging",
            "document.write and innerHTML",
            "Using alert boxes",
            "Choosing the right output method"
        ],
        tags: ["JavaScript", "Output", "Beginner"]
    },
    "js-statements": {
        title: "JavaScript Statement",
        teacher: "Maram Ahmed",
        duration: "3:00",
        category: "js",
        description: "Understand what a JavaScript statement is and how statements combine to build a program.",
        learningPoints: [
            "What counts as a statement",
            "Ending statements with semicolons",
            "Grouping statements in blocks",
            "Reading code top to bottom"
        ],
        tags: ["JavaScript", "Fundamentals", "Beginner"]
    },
    "js-variables": {
        title: "JavaScript Variables",
        teacher: "Osama Hamdi",
        duration: "5:00",
        category: "js",
        description: "Learn how to store and manage data in JavaScript using variables declared with var, let, and const.",
        learningPoints: [
            "Declaring variables",
            "var vs let vs const",
            "Naming rules and conventions",
            "Reassigning variable values"
        ],
        tags: ["JavaScript", "Variables", "Beginner"]
    },
    "js-const": {
        title: "JavaScript Const",
        teacher: "Maram Ahmed",
        duration: "4:00",
        category: "js",
        description: "A focused look at the const keyword, when to use it, and how it differs from let.",
        learningPoints: [
            "What const guarantees",
            "const with objects and arrays",
            "When to prefer const over let",
            "Common const mistakes"
        ],
        tags: ["JavaScript", "Variables", "Intermediate"]
    },
    "js-where-to": {
        title: "JavaScript Where To Use",
        teacher: "Mohammed Abd Alla",
        duration: "2:00",
        category: "js",
        description: "Learn where JavaScript code can be placed in an HTML document, and the pros and cons of each option.",
        learningPoints: [
            "Internal scripts",
            "External script files",
            "Placing scripts in head vs body",
            "Using the defer attribute"
        ],
        tags: ["JavaScript", "Setup", "Beginner"]
    }
};

// ترتيب الفيديوهات داخل كل قسم (يستخدم في Previous / Next)
const categoryOrder = {
    html: ["html-introduction", "html-editors", "html-element", "html-attributes", "html-image", "html-formatting"],
    css: ["css-introduction", "css-syntax", "css-colors", "css-comments", "css-add-to-html", "css-rgb-rgba"],
    js: ["js-introduction", "js-output", "js-statements", "js-variables", "js-const", "js-where-to"]
};

const categoryLabels = {
    html: "HTML",
    css: "CSS",
    js: "JavaScript"
};


// ===============================
// تحميل بيانات الفيديو الحالي
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // 1) هات الـ id من رابط الصفحة: video.html?id=html-introduction
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get("id");

    // 2) دور على الفيديو في قاعدة البيانات، ولو مش موجود ارجع لأول فيديو HTML
    const fallbackId = "html-introduction";
    const currentId = (videoId && videoDatabase[videoId]) ? videoId : fallbackId;
    const video = videoDatabase[currentId];

    if (!video) {
        return;
    }

    // 3) حمّل الفيديو نفسه

const mainVideo = document.getElementById("mainVideo");
const videoSource = document.getElementById("videoSource");

videoSource.src = "videos/" + currentId + ".mp4";
mainVideo.load();


    // 4) حدّث العنوان والمعلم والمدة والوصف
    document.title = video.title + " | Let's go learn";
    document.getElementById("videoTitle").textContent = video.title;
    document.getElementById("videoTeacher").textContent = video.teacher;
    document.getElementById("videoDuration").textContent = video.duration;
    document.getElementById("videoCategory").textContent = categoryLabels[video.category];
    document.getElementById("videoDescription").textContent = video.description;

    // 5) Breadcrumb
    document.getElementById("breadcrumbCategory").textContent = categoryLabels[video.category];
    document.getElementById("breadcrumbTitle").textContent = video.title;

    // 6) "What will you learn" list
    const learningList = document.getElementById("learningList");
    learningList.innerHTML = "";
    video.learningPoints.forEach(function (point) {
        const p = document.createElement("p");
        p.innerHTML = '<i class="fa-solid fa-check"></i> ' + point;
        learningList.appendChild(p);
    });

    // 7) Tags
    const tagsBox = document.getElementById("videoTags");
    tagsBox.innerHTML = "";
    video.tags.forEach(function (tag) {
        const span = document.createElement("span");
        span.textContent = "# " + tag;
        tagsBox.appendChild(span);
    });

    // 8) علّم القسم النشط في كل روابط الـ HTML/CSS/JS
    //    (النافبار العادي + السايدبار بتاع الموبايل مع بعض)
    document.querySelectorAll(".nav-link").forEach(function (a) {
        a.classList.toggle("active", a.dataset.category === video.category);
    });

    // 9) Previous / Next داخل نفس القسم
    const order = categoryOrder[video.category];
    const index = order.indexOf(currentId);

    const prevBtn = document.getElementById("prevBtn");
    const prevLabel = document.getElementById("prevLabel");
    const nextBtn = document.getElementById("nextBtn");
    const nextLabel = document.getElementById("nextLabel");
    const nextSmall = document.getElementById("nextSmall");
    const nextIcon = document.getElementById("nextIcon");

    // Previous يفضل شغال طول الوقت
    if (index > 0) {
        const prevId = order[index - 1];
        prevBtn.href = "video.html?id=" + prevId;
        prevLabel.textContent = videoDatabase[prevId].title;
    } else {
        prevBtn.href = "material.html";
        prevLabel.textContent = "Back to all videos";
    }
    prevBtn.classList.remove("disabled");

    // Next: نحسب وجهته دلوقتي، لكنه هيفضل "locked" (مقفول) لحد ما
    // الفيديو يقرب يخلص - شوفي دالة unlockNext تحت
    let nextHref;
    let nextTitle;
    if (index < order.length - 1 && index !== -1) {
        const nextId = order[index + 1];
        nextHref = "video.html?id=" + nextId;
        nextTitle = videoDatabase[nextId].title;
    } else {
        nextHref = "material.html";
        nextTitle = "Back to all videos";
    }
    nextBtn.href = nextHref;
    nextLabel.textContent = nextTitle;
    nextBtn.classList.add("locked");
    nextBtn.setAttribute("aria-disabled", "true");
    nextSmall.textContent = "Finish the video to unlock";
    nextIcon.classList.remove("fa-arrow-right");
    nextIcon.classList.add("fa-lock");

    let nextUnlocked = false;

    function unlockNext() {
        if (nextUnlocked) {
            return;
        }
        nextUnlocked = true;
        nextBtn.classList.remove("locked");
        nextBtn.removeAttribute("aria-disabled");
        nextSmall.textContent = "Next video";
        nextIcon.classList.remove("fa-lock");
        nextIcon.classList.add("fa-arrow-right");
    }

    // امنعي أي نقرة تعدي لو لسه مقفول (حماية إضافية غير الـ CSS)
    nextBtn.addEventListener("click", function (e) {
        if (!nextUnlocked) {
            e.preventDefault();
        }
    });

    // نفتح الـ Next لما يتبقى 10 ثواني أو أقل، أو لما الفيديو يخلص خالص
    // (ده بيغطي حتى لو المستخدم عمل seek لآخر الفيديو على طول)
    function checkUnlockCondition() {
        if (nextUnlocked) {
            return;
        }
        if (!isFinite(mainVideo.duration) || mainVideo.duration <= 0) {
            return;
        }
        const remaining = mainVideo.duration - mainVideo.currentTime;
        if (mainVideo.ended || remaining <= 10) {
            unlockNext();
        }
    }

    mainVideo.addEventListener("timeupdate", checkUnlockCondition);
    mainVideo.addEventListener("seeked", checkUnlockCondition);
    mainVideo.addEventListener("ended", unlockNext);

    // 10) Mobile sidebar (menu)
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    const sidebarClose = document.getElementById("sidebarClose");

    function openSidebar() {
        sidebar.classList.add("open");
        sidebarOverlay.classList.add("open");
        sidebar.setAttribute("aria-hidden", "false");
        menuToggle.setAttribute("aria-expanded", "true");
        document.body.classList.add("no-scroll");
    }

    function closeSidebar() {
        sidebar.classList.remove("open");
        sidebarOverlay.classList.remove("open");
        sidebar.setAttribute("aria-hidden", "true");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
    }

    if (menuToggle) {
        menuToggle.addEventListener("click", openSidebar);
        sidebarClose.addEventListener("click", closeSidebar);
        sidebarOverlay.addEventListener("click", closeSidebar);

        // السايدبار يتقفل تلقائي لو اخترنا قسم منه
        document.querySelectorAll(".sidebar-links a").forEach(function (a) {
            a.addEventListener("click", closeSidebar);
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && sidebar.classList.contains("open")) {
                closeSidebar();
            }
        });
    }
});