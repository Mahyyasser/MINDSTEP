/* =========================================================
   NAV HEIGHT SYNC
   Keeps the fixed sidebar's top offset / height in sync with
   the real <nav> height, so it never has a gap or overlap.
========================================================= */
function syncNavHeight() {
  const nav = document.querySelector("nav");
  if (!nav) return;
  document.documentElement.style.setProperty("--nav-h", nav.offsetHeight + "px");
}
syncNavHeight();
window.addEventListener("resize", syncNavHeight);


const flashCardsData = {

  html: [
    {
      question: "What is an HTML element?",
      answer: "A building block of a web page made of a start tag, content, and an end tag.",
      explanation: "Elements tell the browser how to structure and display content — for example, a paragraph, a heading, or a link.",
      code: "<p>This is a paragraph element.</p>",
      keyPoint: "Every element has a purpose — pick the tag that matches your content's meaning, not just its look.",
      usage: "Used to structure every part of a web page, from headings to buttons.",
      category: "HTML",
      difficulty: "Beginner"
    },
    {
      question: "What does the <img> element do?",
      answer: "It embeds an image into a web page.",
      explanation: "It's a self-closing tag that needs a src attribute pointing to the image file, and should always include alt text.",
      code: '<img src="image.jpg" alt="Example">',
      keyPoint: "Always use meaningful alt text — it helps screen readers and shows if the image fails to load.",
      usage: "Used for logos, product photos, icons, and any visual content on a page.",
      category: "HTML",
      difficulty: "Beginner"
    },
    {
      question: "What's the difference between <div> and <span>?",
      answer: "<div> is a block-level container; <span> is an inline container.",
      explanation: "<div> starts on a new line and takes up the full width available, while <span> flows inline with surrounding text and only takes up as much space as needed.",
      code: '<div>Block content</div>\n<span>Inline content</span>',
      keyPoint: "Use <div> to group larger sections, and <span> to style a small piece of text inside a sentence.",
      usage: "Used constantly for layout (<div>) and for wrapping a word or icon inside text (<span>).",
      category: "HTML",
      difficulty: "Intermediate"
    },
    {
      question: "What is a semantic HTML tag?",
      answer: "A tag that describes its meaning to both the browser and the developer.",
      explanation: "Tags like <header>, <nav>, <article>, and <footer> explain what kind of content they hold, unlike a generic <div>.",
      code: "<header>...</header>\n<nav>...</nav>\n<article>...</article>",
      keyPoint: "Semantic tags improve accessibility and SEO because screen readers and search engines understand the page structure.",
      usage: "Used to build the skeleton of accessible, well-structured pages.",
      category: "HTML",
      difficulty: "Intermediate"
    },
    {
      question: "What is the purpose of the alt attribute?",
      answer: "It provides a text description for an image.",
      explanation: "Screen readers read the alt text aloud for visually impaired users, and browsers show it if the image can't load.",
      code: '<img src="cat.jpg" alt="A sleeping orange cat">',
      keyPoint: "A missing or empty alt attribute on a meaningful image is an accessibility failure.",
      usage: "Used on every meaningful <img> tag across a website.",
      category: "HTML",
      difficulty: "Beginner"
    },
    {
      question: "What does the <a> tag do?",
      answer: "It creates a hyperlink to another page, section, or resource.",
      explanation: "The href attribute defines the destination — a full URL, a relative path, or an anchor like #section.",
      code: '<a href="https://example.com">Visit Example</a>',
      keyPoint: "Link text should describe the destination — avoid vague text like \"click here\".",
      usage: "Used for navigation menus, buttons, and any clickable text.",
      category: "HTML",
      difficulty: "Beginner"
    },
    {
      question: "What is the DOCTYPE declaration for?",
      answer: "It tells the browser which version of HTML the page uses.",
      explanation: "<!DOCTYPE html> must be the very first line of an HTML file so the browser renders it in standards mode instead of a quirky legacy mode.",
      code: "<!DOCTYPE html>\n<html lang=\"en\">\n...",
      keyPoint: "Forgetting the DOCTYPE can cause inconsistent rendering across browsers.",
      usage: "Used once, at the top of every HTML document.",
      category: "HTML",
      difficulty: "Beginner"
    },
    {
      question: "What's the difference between block and inline elements?",
      answer: "Block elements start on a new line and fill the width; inline elements sit within the flow of text.",
      explanation: "<h1>, <p>, and <div> are block-level. <a>, <span>, and <strong> are inline and don't force a line break.",
      code: "<p>Block</p>\n<strong>Inline</strong>",
      keyPoint: "You can change how an element behaves with CSS display, but knowing the default helps you predict layout.",
      usage: "Used to reason about how content stacks or flows on the page.",
      category: "HTML",
      difficulty: "Intermediate"
    },
    {
      question: "What are HTML attributes?",
      answer: "Extra pieces of information added to a start tag to configure an element.",
      explanation: "Attributes come as name=\"value\" pairs inside the opening tag, like src, href, class, or id.",
      code: '<a href="page.html" class="nav-link">Home</a>',
      keyPoint: "Attribute values should almost always be wrapped in quotes.",
      usage: "Used to set sources, links, styling hooks, and accessibility info on elements.",
      category: "HTML",
      difficulty: "Beginner"
    },
    {
      question: "What is the purpose of <meta charset=\"UTF-8\">?",
      answer: "It sets the character encoding of the document to UTF-8.",
      explanation: "UTF-8 supports virtually every character and symbol, preventing broken or garbled text in the browser.",
      code: '<meta charset="UTF-8">',
      keyPoint: "This should be one of the first tags inside <head> so it applies before any text is parsed.",
      usage: "Used in the <head> of nearly every modern HTML document.",
      category: "HTML",
      difficulty: "Intermediate"
    }
  ],

  css: [
    {
      question: "What does CSS stand for and what is it used for?",
      answer: "Cascading Style Sheets — it controls the visual presentation of HTML.",
      explanation: "CSS handles colors, spacing, typography, layout, and animation, keeping style separate from structure.",
      code: "p { color: navy; font-size: 16px; }",
      keyPoint: "\"Cascading\" means rules can override each other based on specificity and order.",
      usage: "Used to style every visual aspect of a website.",
      category: "CSS",
      difficulty: "Beginner"
    },
    {
      question: "What is the CSS Box Model?",
      answer: "The model describing how content, padding, border, and margin combine to form an element's size.",
      explanation: "Every element is a box: content sits in the center, padding surrounds it, then a border, then margin as space outside.",
      code: "div {\n  padding: 10px;\n  border: 1px solid #ccc;\n  margin: 20px;\n}",
      keyPoint: "box-sizing: border-box makes padding and border count inside the declared width, which is usually easier to reason about.",
      usage: "Used every time you size or space out an element.",
      category: "CSS",
      difficulty: "Intermediate"
    },
    {
      question: "What's the difference between a class and an id selector?",
      answer: "A class (.name) can be reused on many elements; an id (#name) should be unique per page.",
      explanation: "Classes are ideal for reusable styling, while ids are often used for unique elements or as JavaScript hooks.",
      code: ".card { border-radius: 8px; }\n#main-header { font-weight: bold; }",
      keyPoint: "IDs have higher specificity than classes, which can make overriding their styles harder later.",
      usage: "Used to target elements for styling and scripting.",
      category: "CSS",
      difficulty: "Beginner"
    },
    {
      question: "What does display: flex do?",
      answer: "It turns an element into a flex container, letting its children align and distribute space along a row or column.",
      explanation: "Flexbox makes it easy to center content, create equal-width columns, or space items evenly without floats or hacks.",
      code: ".row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}",
      keyPoint: "justify-content controls the main axis, align-items controls the cross axis — mixing them up is a common bug.",
      usage: "Used for navigation bars, card layouts, and centering content.",
      category: "CSS",
      difficulty: "Intermediate"
    },
    {
      question: "What's the difference between margin and padding?",
      answer: "Margin is the space outside an element's border; padding is the space inside, between the border and content.",
      explanation: "Margin pushes other elements away, while padding gives breathing room to the content within the same box.",
      code: ".box {\n  padding: 16px; /* inside */\n  margin: 24px;  /* outside */\n}",
      keyPoint: "Margins between block elements can \"collapse\" into a single margin — padding never does.",
      usage: "Used constantly to control spacing and layout rhythm.",
      category: "CSS",
      difficulty: "Beginner"
    },
    {
      question: "What is CSS specificity?",
      answer: "The set of rules the browser uses to decide which style wins when multiple selectors target the same element.",
      explanation: "Inline styles beat IDs, which beat classes/attributes/pseudo-classes, which beat element selectors.",
      code: "#nav .link { color: navy; }  /* wins over */\n.link { color: gray; }",
      keyPoint: "Prefer clear, low-specificity selectors — relying on !important or deep nesting makes styles hard to override later.",
      usage: "Used to predict and debug which CSS rule actually applies.",
      category: "CSS",
      difficulty: "Intermediate"
    },
    {
      question: "What does position: absolute do?",
      answer: "It removes an element from normal flow and positions it relative to its nearest positioned ancestor.",
      explanation: "\"Positioned\" means an ancestor has position: relative, absolute, fixed, or sticky. If none exists, it positions relative to the page.",
      code: ".parent { position: relative; }\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}",
      keyPoint: "Always give the parent position: relative first, or the absolute element may jump to an unexpected place.",
      usage: "Used for badges, tooltips, dropdown menus, and overlay elements.",
      category: "CSS",
      difficulty: "Intermediate"
    },
    {
      question: "What is a pseudo-class? Give an example.",
      answer: "A keyword added to a selector to style an element in a specific state, like :hover.",
      explanation: "Pseudo-classes don't require extra HTML or JavaScript — the browser applies them automatically based on state or position.",
      code: "button:hover {\n  background: #4F7CF5;\n}",
      keyPoint: ":hover, :focus, :first-child, and :nth-child() are some of the most commonly used pseudo-classes.",
      usage: "Used for interactive states like hover, focus, and active on buttons and links.",
      category: "CSS",
      difficulty: "Beginner"
    },
    {
      question: "What does the CSS :root selector do?",
      answer: "It targets the top-level element of the document, commonly used to define global CSS custom properties (variables).",
      explanation: ":root behaves like html but has slightly higher specificity, and is the conventional place to declare --variables.",
      code: ":root {\n  --primary-color: #694AE9;\n}\np { color: var(--primary-color); }",
      keyPoint: "CSS variables defined in :root can be reused everywhere and updated from one place.",
      usage: "Used to build a consistent, themeable design system across a whole site.",
      category: "CSS",
      difficulty: "Intermediate"
    },
    {
      question: "What is a media query used for?",
      answer: "It applies CSS rules only when certain conditions are met, like screen width.",
      explanation: "Media queries are the foundation of responsive design, letting a layout adapt to phones, tablets, and desktops.",
      code: "@media (max-width: 600px) {\n  .card { flex-direction: column; }\n}",
      keyPoint: "Design mobile-first: write base styles for small screens, then add media queries for larger ones.",
      usage: "Used to make a website look correct across all device sizes.",
      category: "CSS",
      difficulty: "Intermediate"
    }
  ],

  javascript: [
    {
      question: "What is a variable in JavaScript?",
      answer: "A named container used to store a value that can be referenced or changed later.",
      explanation: "Variables are declared with let, const, or var, and can hold numbers, strings, objects, and more.",
      code: "let score = 10;\nscore = score + 1;",
      keyPoint: "Give variables clear, descriptive names — it makes code far easier to read later.",
      usage: "Used everywhere to store data your program works with.",
      category: "JavaScript",
      difficulty: "Beginner"
    },
    {
      question: "What's the difference between let, const, and var?",
      answer: "let and const are block-scoped; var is function-scoped. const can't be reassigned after declaration.",
      explanation: "Modern JavaScript favors const by default and let when a value needs to change, avoiding var's confusing scoping rules.",
      code: "const name = \"Ana\";\nlet age = 25;\nage = 26; // OK\n// name = \"Sam\"; // Error",
      keyPoint: "Reach for const first; only switch to let if you actually need to reassign the variable.",
      usage: "Used every time you declare a value in a script.",
      category: "JavaScript",
      difficulty: "Intermediate"
    },
    {
      question: "What is a function?",
      answer: "A reusable block of code that performs a task and can be called by name.",
      explanation: "Functions can accept inputs (parameters) and return an output, helping avoid repeating the same logic.",
      code: "function greet(name) {\n  return \"Hello, \" + name;\n}\ngreet(\"World\");",
      keyPoint: "Keep functions focused on one task — it makes them easier to test and reuse.",
      usage: "Used to organize logic like calculations, validations, or DOM updates.",
      category: "JavaScript",
      difficulty: "Beginner"
    },
    {
      question: "What is an array?",
      answer: "An ordered list of values stored under a single variable name.",
      explanation: "Arrays are zero-indexed, meaning the first item is at position 0, and they come with built-in methods like push, map, and filter.",
      code: "const colors = [\"red\", \"green\", \"blue\"];\ncolors.push(\"yellow\");",
      keyPoint: "Arrays keep order, so the position of an item is meaningful and predictable.",
      usage: "Used to store lists like todo items, products, or flash cards.",
      category: "JavaScript",
      difficulty: "Beginner"
    },
    {
      question: "What does === check compared to ==?",
      answer: "=== checks both value and type (strict equality); == converts types before comparing (loose equality).",
      explanation: "\"5\" == 5 is true because == converts the string to a number first, while \"5\" === 5 is false because the types differ.",
      code: "5 === \"5\"; // false\n5 == \"5\";  // true",
      keyPoint: "Prefer === in almost all cases to avoid confusing, unintended type conversions.",
      usage: "Used constantly in conditions and comparisons.",
      category: "JavaScript",
      difficulty: "Intermediate"
    },
    {
      question: "What is a DOM event listener?",
      answer: "A function that runs in response to an event, like a click or a key press.",
      explanation: "addEventListener attaches a handler function to an element without overwriting any other handlers already attached.",
      code: 'button.addEventListener("click", () => {\n  console.log("Clicked!");\n});',
      keyPoint: "Event listeners are how static HTML becomes interactive.",
      usage: "Used for buttons, forms, keyboard shortcuts, and touch/swipe gestures.",
      category: "JavaScript",
      difficulty: "Intermediate"
    },
    {
      question: "What is an arrow function?",
      answer: "A shorter syntax for writing functions, introduced in ES6.",
      explanation: "Arrow functions use => instead of the function keyword and don't have their own \"this\", which makes them handy inside callbacks.",
      code: "const add = (a, b) => a + b;\nadd(2, 3); // 5",
      keyPoint: "Because arrow functions don't rebind \"this\", they're often preferred inside class methods and callbacks.",
      usage: "Used widely in array methods like map, filter, and forEach.",
      category: "JavaScript",
      difficulty: "Intermediate"
    },
    {
      question: "What is JSON?",
      answer: "JavaScript Object Notation — a lightweight text format for storing and exchanging data.",
      explanation: "JSON looks like a JavaScript object but is language-independent, making it the standard format for APIs and config files.",
      code: '{\n  "name": "Ana",\n  "age": 25\n}',
      keyPoint: "JSON.parse() turns a JSON string into an object; JSON.stringify() does the reverse.",
      usage: "Used to send and receive data between a browser and a server.",
      category: "JavaScript",
      difficulty: "Beginner"
    },
    {
      question: "What's the difference between null and undefined?",
      answer: "undefined means a variable has been declared but not assigned a value; null is an intentional \"no value\".",
      explanation: "JavaScript automatically assigns undefined to unset variables, while null is something a developer explicitly sets.",
      code: "let a;\nconsole.log(a); // undefined\nlet b = null;\nconsole.log(b); // null",
      keyPoint: "Use null when you deliberately want to represent \"empty\" or \"nothing here\".",
      usage: "Used to represent missing or intentionally empty values.",
      category: "JavaScript",
      difficulty: "Intermediate"
    },
    {
      question: "What is localStorage used for?",
      answer: "It stores key-value data in the browser that persists even after the page is closed or refreshed.",
      explanation: "Unlike variables in memory, localStorage data survives page reloads, making it useful for saving user progress or preferences.",
      code: 'localStorage.setItem("theme", "dark");\nconst theme = localStorage.getItem("theme");',
      keyPoint: "localStorage only stores strings, so objects need JSON.stringify() before saving and JSON.parse() after reading.",
      usage: "Used to remember settings, cart items, or — like on this page — flash card progress.",
      category: "JavaScript",
      difficulty: "Intermediate"
    }
  ]

};

Object.keys(flashCardsData).forEach(cat => {
  flashCardsData[cat].forEach((card, i) => {
    card.id = `${cat}-${i}`;
    card.categoryKey = cat;
  });
});

flashCardsData.all = [
  flashCardsData.html[0],
  flashCardsData.css[0],
  flashCardsData.javascript[0],
  flashCardsData.html[2],
  flashCardsData.css[3],
  flashCardsData.javascript[1],
  flashCardsData.html[3],
  flashCardsData.css[5],
  flashCardsData.javascript[4],
  flashCardsData.html[5],
  flashCardsData.css[6],
  flashCardsData.javascript[9]
];


/* =========================================================
   FLASH CARDS — CONFIG & STATE
========================================================= */

const CATEGORY_ORDER = ["html", "css", "javascript"];

const TAB_ORDER = [...CATEGORY_ORDER, "all"];

const CATEGORY_META = {
  html:       { label: "HTML",       icon: "🌐", title: "HTML Flash Cards" },
  css:        { label: "CSS",        icon: "🎨", title: "CSS Flash Cards" },
  javascript: { label: "JavaScript", icon: "⚡", title: "JavaScript Flash Cards" },
  all:        { label: "HTML + CSS + JS", icon: "🧩", title: "HTML + CSS + JavaScript Flash Cards" }
};

const STORAGE_KEY = "mindstep_flashcards_progress_v1";
const FAVORITES_KEY = "mindstep_flashcards_favorites_v1";
const NOTES_KEY = "mindstep_notes_v1";

function isCatLocked(cat) {
  if (cat === "all") return false;
  return !progress.unlocked[cat];
}

function getDefaultProgress() {
  return {
    html:       { known: [], completed: false },
    css:        { known: [], completed: false },
    javascript: { known: [], completed: false },
    all:        { known: [], completed: false },
    unlocked:   { html: true, css: false, javascript: false }
  };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress();
    const parsed = JSON.parse(raw);
    // Merge with defaults in case new categories are added later.
    return Object.assign(getDefaultProgress(), parsed, {
      unlocked: Object.assign(getDefaultProgress().unlocked, parsed.unlocked || {})
    });
  } catch (e) {
    return getDefaultProgress();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
  }
}

let progress = loadProgress();

// Which category deck is currently being viewed, and which card index within it.
let activeCategory = CATEGORY_ORDER.find(cat => progress.unlocked[cat] && !progress[cat].completed)
                    || CATEGORY_ORDER.find(cat => progress.unlocked[cat])
                    || "html";
let currentIndex = 0;


/* =======================================================DOM REFERENC*/
const el = id => document.getElementById(id);

const fcContainer      = el("fcContainer");
const fcTabs           = el("fcTabs");
const fcDeckTitle      = el("fcDeckTitle");
const fcDeckCount      = el("fcDeckCount");
const fcProgressFill   = el("fcProgressFill");
const fcLockedPanel    = el("fcLockedPanel");
const fcLockedMessage  = el("fcLockedMessage");
const fcDeck           = el("fcDeck");
const fcCard           = el("fcCard");
const fcCategoryBadge  = el("fcCategoryBadge");
const fcDifficultyBadge= el("fcDifficultyBadge");
const fcQNum           = el("fcQNum");
const fcQTotal         = el("fcQTotal");
const fcQuestion       = el("fcQuestion");
const fcDots           = el("fcDots");
const fcAnswer         = el("fcAnswer");
const fcExplanation    = el("fcExplanation");
const fcCodeBlock      = el("fcCodeBlock");
const fcCode           = el("fcCode");
const fcKeyPoint       = el("fcKeyPoint");
const fcUsage          = el("fcUsage");
const fcReviewBtn      = el("fcReviewBtn");
const fcKnowBtn        = el("fcKnowBtn");
const fcPrevBtn        = el("fcPrevBtn");
const fcNextBtn        = el("fcNextBtn");
const fcCompletePanel  = el("fcCompletePanel");
const fcCompleteTitle  = el("fcCompleteTitle");
const fcCompleteText   = el("fcCompleteText");
const fcReplayBtn      = el("fcReplayBtn");
const fcContinueBtn    = el("fcContinueBtn");
const fcCourseComplete = el("fcCourseComplete");
const fcBackToMaterialBtn = el("fcBackToMaterialBtn");
const fcStarBtn        = el("fcStarBtn");

const sidebarLinks     = document.querySelectorAll(".sidebar-link");
const switchablePanels = document.querySelectorAll(".switchable-panel");

const materialItems    = document.querySelectorAll(".material-item");

const notesTextarea    = el("notesTextarea");
const notesSaveBtn     = el("notesSaveBtn");
const notesFeedback    = el("notesFeedback");
const notesCharCount   = el("notesCharCount");

// Favorites references.
const favoritesList    = el("favoritesList");
const favoritesEmpty   = el("favoritesEmpty");


/* =========================================================
   RENDERING
========================================================= */

function renderTabs() {
  fcTabs.innerHTML = "";
  TAB_ORDER.forEach(cat => {
    const meta = CATEGORY_META[cat];
    const catProgress = progress[cat];
    const isLocked = isCatLocked(cat);
    const isActive = cat === activeCategory;
    const deckSize = flashCardsData[cat].length;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "fc-tab" + (isLocked ? " locked" : "") + (isActive ? " active" : "");
    btn.dataset.cat = cat;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", String(isActive));

    let statusText;
    if (isLocked) {
      statusText = "Locked";
    } else if (catProgress.completed) {
      statusText = `${deckSize} / ${deckSize} completed`;
    } else {
      statusText = `${catProgress.known.length} / ${deckSize} completed`;
    }

    btn.innerHTML = `
      <span class="fc-tab-icon">${isLocked ? "🔒" : meta.icon}</span>
      <span class="fc-tab-text">
        <span class="fc-tab-title">${meta.label}</span>
        <span class="fc-tab-status">${statusText}</span>
      </span>
      ${catProgress.completed ? '<span class="fc-tab-check">✓</span>' : ""}
    `;

    btn.addEventListener("click", () => onTabClick(cat));
    fcTabs.appendChild(btn);
  });
}

function onTabClick(cat) {
  if (isCatLocked(cat)) {
    fcLockedMessage.textContent = lockedMessageFor(cat);
    fcLockedPanel.hidden = false;
    fcDeck.hidden = true;
    fcCompletePanel.hidden = true;
    return;
  }
  activeCategory = cat;
  currentIndex = firstUnknownIndex(cat);
  renderAll();
}

function lockedMessageFor(cat) {
  if (cat === "css") return "Complete all 10 HTML cards to unlock CSS.";
  if (cat === "javascript") return "Complete all 10 CSS cards to unlock JavaScript.";
  return "This deck is locked.";
}

function firstUnknownIndex(cat) {
  const deck = flashCardsData[cat];
  const known = progress[cat].known;
  for (let i = 0; i < deck.length; i++) {
    if (!known.includes(i)) return i;
  }
  return 0;
}

function renderDeckHeader() {
  const meta = CATEGORY_META[activeCategory];
  const catProgress = progress[activeCategory];
  const deckSize = flashCardsData[activeCategory].length;
  fcDeckTitle.textContent = meta.title;
  fcDeckCount.textContent = `${catProgress.known.length} / ${deckSize} completed`;
  fcProgressFill.style.width = (catProgress.known.length / deckSize * 100) + "%";
}

// Render the current flash card (front + back content).
function renderCard() {
  const deck = flashCardsData[activeCategory];
  const card = deck[currentIndex];
  const meta = CATEGORY_META[activeCategory];
  const known = progress[activeCategory].known;

  fcContainer.dataset.category = activeCategory;
  fcCard.classList.remove("flipped");

  fcCategoryBadge.textContent = meta.label;
  fcDifficultyBadge.textContent = card.difficulty;
  fcQNum.textContent = String(currentIndex + 1);
  fcQTotal.textContent = String(deck.length);
  fcQuestion.textContent = card.question;

  fcAnswer.textContent = card.answer;
  fcExplanation.textContent = card.explanation;

  if (card.code) {
    fcCodeBlock.hidden = false;
    fcCode.textContent = card.code;
  } else {
    fcCodeBlock.hidden = true;
    fcCode.textContent = "";
  }

  fcKeyPoint.textContent = card.keyPoint;
  fcUsage.textContent = card.usage;

  const isFav = isFavorite(card.id);
  fcStarBtn.classList.toggle("favorited", isFav);
  fcStarBtn.setAttribute("aria-pressed", String(isFav));
  fcStarBtn.setAttribute("aria-label", isFav ? "Remove card from favorites" : "Save card to favorites");

  // Progress dots — one per card in the deck.
  fcDots.innerHTML = "";
  deck.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "fc-dot" + (known.includes(i) ? " known" : "") + (i === currentIndex ? " current" : "");
    fcDots.appendChild(dot);
  });

  fcPrevBtn.disabled = currentIndex === 0;
  fcNextBtn.disabled = currentIndex === deck.length - 1;
}

// Decide which top-level panel is visible: locked / deck / category-complete.
function renderAll() {
  renderTabs();

  const isLocked = isCatLocked(activeCategory);
  const catProgress = progress[activeCategory];

  fcCourseComplete.hidden = true;

  if (isLocked) {
    fcLockedMessage.textContent = lockedMessageFor(activeCategory);
    fcLockedPanel.hidden = false;
    fcDeck.hidden = true;
    fcCompletePanel.hidden = true;
    renderDeckHeader();
    return;
  }

  fcLockedPanel.hidden = true;

  if (catProgress.completed) {
    showCompletePanel();
    return;
  }

  fcCompletePanel.hidden = true;
  fcDeck.hidden = false;
  renderDeckHeader();
  renderCard();
}

function showCompletePanel() {
  fcDeck.hidden = true;
  fcCompletePanel.hidden = false;
  renderDeckHeader();

  const meta = CATEGORY_META[activeCategory];
  const deckSize = flashCardsData[activeCategory].length;
  fcCompleteTitle.textContent = "Great job! 🎉";
  fcCompleteText.textContent = `You completed ${deckSize} / ${deckSize} ${meta.label} cards.`;

  const isLastCategory = activeCategory === CATEGORY_ORDER[CATEGORY_ORDER.length - 1];
  if (activeCategory === "all") {
    fcContinueBtn.textContent = "Back to Material";
  } else {
    fcContinueBtn.textContent = isLastCategory ? "Finish Course" : "Continue";
  }
}


/* =========================================================
   INTERACTIONS
========================================================= */

fcCard.addEventListener("click", () => fcCard.classList.toggle("flipped"));
fcCard.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    fcCard.classList.toggle("flipped");
  }
});

// Previous / Next navigation.
fcPrevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderCard();
  }
});
fcNextBtn.addEventListener("click", () => {
  const deck = flashCardsData[activeCategory];
  if (currentIndex < deck.length - 1) {
    currentIndex++;
    renderCard();
  }
});

// "I Know This" — marks the card as known and advances.
fcKnowBtn.addEventListener("click", () => {
  const catProgress = progress[activeCategory];
  if (!catProgress.known.includes(currentIndex)) {
    catProgress.known.push(currentIndex);
  }

  const deckSize = flashCardsData[activeCategory].length;
  if (catProgress.known.length >= deckSize) {
    catProgress.completed = true;
    unlockNextCategory();
  }

  saveProgress();

  if (catProgress.completed) {
    renderAll();
    return;
  }

  currentIndex = nextIndexAfterAction();
  renderAll();
});

fcReviewBtn.addEventListener("click", () => {
  const catProgress = progress[activeCategory];
  const pos = catProgress.known.indexOf(currentIndex);
  if (pos !== -1) catProgress.known.splice(pos, 1);
  saveProgress();

  currentIndex = nextIndexAfterAction();
  renderAll();
});

// After Know/Review, move to the next not-yet-known card if one exists, otherwise just move forward.
function nextIndexAfterAction() {
  const deck = flashCardsData[activeCategory];
  const known = progress[activeCategory].known;

  for (let i = currentIndex + 1; i < deck.length; i++) {
    if (!known.includes(i)) return i;
  }
  for (let i = 0; i < deck.length; i++) {
    if (!known.includes(i)) return i;
  }
  return Math.min(currentIndex + 1, deck.length - 1);
}

function unlockNextCategory() {
  // The combined "all" deck isn't part of the html -> css -> javascript
  // chain, so completing it never unlocks (or re-locks) anything.
  if (!CATEGORY_ORDER.includes(activeCategory)) return;
  const idx = CATEGORY_ORDER.indexOf(activeCategory);
  const next = CATEGORY_ORDER[idx + 1];
  if (next) {
    progress.unlocked[next] = true;
  }
}

// Category-complete panel buttons.
fcReplayBtn.addEventListener("click", () => {
  // Let the user go back through the deck without losing their completed status.
  currentIndex = 0;
  fcCompletePanel.hidden = true;
  fcDeck.hidden = false;
  renderCard();
});

fcContinueBtn.addEventListener("click", () => {
  // Finishing the combined deck always sends the student back to the
  // beginning of the learning material rather than into the unlock chain.
  if (activeCategory === "all") {
    backToMaterial();
    return;
  }

  const idx = CATEGORY_ORDER.indexOf(activeCategory);
  const next = CATEGORY_ORDER[idx + 1];

  if (next) {
    activeCategory = next;
    currentIndex = firstUnknownIndex(next);
    renderAll();
  } else {
    // Finished the very last category — show the whole-course completion screen.
    fcCompletePanel.hidden = true;
    fcDeck.hidden = true;
    fcCourseComplete.hidden = false;
  }
});

fcBackToMaterialBtn.addEventListener("click", backToMaterial);

function backToMaterial() {
  fcCourseComplete.hidden = true;
  fcCompletePanel.hidden = true;
  activeCategory = "html";
  currentIndex = firstUnknownIndex("html");
  renderAll();
  resetMaterialAccordion();
  switchView("home");
}


/* =========================================================
   SWIPE SUPPORT (mobile)
========================================================= */
let touchStartX = 0;
let touchStartY = 0;

fcCard.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].clientX;
  touchStartY = e.changedTouches[0].clientY;
}, { passive: true });

fcCard.addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;

  // Ignore mostly-vertical swipes so normal page scrolling still works.
  if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;

  const deck = flashCardsData[activeCategory];
  if (dx < 0 && currentIndex < deck.length - 1) {
    currentIndex++;   // swipe left -> next
    renderCard();
  } else if (dx > 0 && currentIndex > 0) {
    currentIndex--;   // swipe right -> previous
    renderCard();
  }
}, { passive: true });


/* =========================================================
   FAVORITES
========================================================= */
function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (e) {
    
  }
}

let favorites = loadFavorites();

function isFavorite(id) {
  return favorites.includes(id);
}

function toggleFavorite(id) {
  const pos = favorites.indexOf(id);
  if (pos === -1) {
    favorites.push(id);
  } else {
    favorites.splice(pos, 1);
  }
  saveFavorites();
}

function findCardById(id) {
  for (const cat of CATEGORY_ORDER) {
    const card = flashCardsData[cat].find(c => c.id === id);
    if (card) return card;
  }
  return null;
}

fcStarBtn.addEventListener("click", e => {
  e.stopPropagation(); // don't flip the card when starring it
  const deck = flashCardsData[activeCategory];
  const card = deck[currentIndex];
  toggleFavorite(card.id);

  const nowFav = isFavorite(card.id);
  fcStarBtn.classList.toggle("favorited", nowFav);
  fcStarBtn.setAttribute("aria-pressed", String(nowFav));
  fcStarBtn.setAttribute("aria-label", nowFav ? "Remove card from favorites" : "Save card to favorites");
  fcStarBtn.classList.remove("pop");
  void fcStarBtn.offsetWidth; // restart the pop animation
  fcStarBtn.classList.add("pop");

  renderFavorites();
});

function renderFavorites() {
  favoritesList.innerHTML = "";

  if (favorites.length === 0) {
    favoritesEmpty.hidden = false;
    return;
  }
  favoritesEmpty.hidden = true;

  favorites.forEach(id => {
    const card = findCardById(id);
    if (!card) return;

    const meta = CATEGORY_META[card.categoryKey];
    const item = document.createElement("div");
    item.className = "favorite-card";
    item.style.setProperty(
      "--fav-accent",
      card.categoryKey === "css" ? "var(--purple)" :
      card.categoryKey === "javascript" ? "var(--deep-purple)" : "var(--bright-blue)"
    );

    item.innerHTML = `
      <div class="favorite-card-top">
        <span class="fc-badge fc-badge-category" style="background:${
          card.categoryKey === "css" ? "var(--purple)" :
          card.categoryKey === "javascript" ? "var(--deep-purple)" : "var(--bright-blue)"
        }">${meta.label}</span>
        <span class="fc-badge fc-badge-difficulty">${card.difficulty}</span>
      </div>
      <p class="favorite-card-question">${card.question}</p>
      <p class="favorite-card-answer">${card.answer}</p>
      <div class="favorite-card-actions">
        <button class="fc-btn fc-btn-know" type="button" data-study="${card.categoryKey}" data-id="${card.id}">
          <span class="fc-btn-icon">▶</span> Study
        </button>
        <button class="fc-btn fc-btn-review" type="button" data-unfav="${card.id}">
          <span class="fc-btn-icon">☆</span> Remove
        </button>
      </div>
    `;
    favoritesList.appendChild(item);
  });

  favoritesList.querySelectorAll("[data-unfav]").forEach(btn => {
    btn.addEventListener("click", () => {
      toggleFavorite(btn.dataset.unfav);
      renderFavorites();
    });
  });

  favoritesList.querySelectorAll("[data-study]").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.study;
      const id = btn.dataset.id;
      const idx = flashCardsData[cat].findIndex(c => c.id === id);
      activeCategory = cat;
      currentIndex = idx === -1 ? 0 : idx;
      renderAll();
      switchView("flashcards");
    });
  });
}


/* =========================================================
   NOTES
========================================================= */
function loadNotes() {
  try {
    return localStorage.getItem(NOTES_KEY) || "";
  } catch (e) {
    return "";
  }
}

function updateCharCount() {
  const n = notesTextarea.value.length;
  notesCharCount.textContent = `${n} character${n === 1 ? "" : "s"}`;
}

notesTextarea.value = loadNotes();
updateCharCount();
notesTextarea.addEventListener("input", updateCharCount);

let notesFeedbackTimer = null;
notesSaveBtn.addEventListener("click", () => {
  try {
    localStorage.setItem(NOTES_KEY, notesTextarea.value);
    notesFeedback.textContent = "Saved successfully ✓";
  } catch (e) {
    notesFeedback.textContent = "Couldn't save — check your browser storage.";
  }
  notesFeedback.classList.add("show");
  clearTimeout(notesFeedbackTimer);
  notesFeedbackTimer = setTimeout(() => notesFeedback.classList.remove("show"), 2200);
});


/*SIDEBAR / VIEW SWITCHI */
function switchView(view) {
  switchablePanels.forEach(panel => {
    panel.hidden = panel.dataset.viewPanel !== view;
  });
  sidebarLinks.forEach(link => {
    const isActive = link.dataset.view === view;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-selected", String(isActive));
  });
}

sidebarLinks.forEach(link => {
  link.addEventListener("click", () => switchView(link.dataset.view));
});

document.querySelectorAll("[data-open-deck]").forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.openDeck;
    if (isCatLocked(cat)) {
      switchView("flashcards");
      onTabClick(cat);
      return;
    }
    activeCategory = cat;
    currentIndex = firstUnknownIndex(cat);
    renderAll();
    switchView("flashcards");
  });
});


/* =========================================================
   HOME — MATERIAL ACCORDION
========================================================= */
function resetMaterialAccordion() {
  materialItems.forEach(item => {
    const isHtml = item.dataset.material === "html";
    item.classList.toggle("open", isHtml);
    item.querySelector(".material-header").setAttribute("aria-expanded", String(isHtml));
  });
}

materialItems.forEach(item => {
  const header = item.querySelector(".material-header");
  header.addEventListener("click", () => {
    const willOpen = !item.classList.contains("open");
    item.classList.toggle("open", willOpen);
    header.setAttribute("aria-expanded", String(willOpen));
  });
});


renderAll();
renderFavorites();
switchView("flashcards");
resetMaterialAccordion();