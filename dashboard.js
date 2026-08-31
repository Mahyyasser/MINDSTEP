/* ==========================================================
   MaidStip — Sidebar behavior: Streak tracker + Checklist
   Both persisted in localStorage.
========================================================== */

(function () {
  "use strict";

  /* ---------- helpers ---------- */

  function todayKey(d) {
    d = d || new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function daysBetween(aKey, bKey) P    const a = new Date(aKey + "T00:00:00");
    const b = new Date(bKey + "T00:00:00");
    return Math.round((b - a) / 86400000);
  }

  /* ==========================================================
     STREAK
  ========================================================== */

  const STREAK_KEY = "ms_streak";
  const streakNumberEl = document.getElementById("streakNumber");
  const streakWeekEl = document.getElementById("streakWeek");
  const streakCardEl = document.getElementById("streakCard");

  function loadStreak() {
    try {
      const raw = localStorage.getItem(STREAK_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveStreak(data) {
    try {
      localStorage.setItem(STREAK_KEY, JSON.stringify(data));
    } catch (e) {
      /* storage unavailable — fail silently, keep session-only streak */
    }
  }

  function updateStreak() {
    const today = todayKey();
    let data = loadStreak();
    let increased = false;

    if (!data) {
      data = { count: 1, lastDate: today };
      increased = true;
    } else if (data.lastDate === today) {
      /* already counted today, nothing changes */
    } else {
      const gap = daysBetween(data.lastDate, today);
      if (gap === 1) {
        data.count += 1;
        data.lastDate = today;
        increased = true;
      } else {
        /* missed a day (or more) — restart at 1 for today's visit */
        data.count = 1;
        data.lastDate = today;
        increased = true;
      }
    }

    saveStreak(data);
    renderStreak(data.count, increased);
  }

  function renderStreak(count, animate) {
    if (streakNumberEl) {
      streakNumberEl.textContent = String(count);
    }

    if (streakCardEl && animate) {
      streakCardEl.classList.remove("streak-pulse");
      // force reflow so the animation can restart
      void streakCardEl.offsetWidth;
      streakCardEl.classList.add("streak-pulse");
    }

    if (streakWeekEl) {
      streakWeekEl.innerHTML = "";
      const filled = Math.min(count, 7);
      for (let i = 0; i < 7; i++) {
        const dot = document.createElement("span");
        dot.className = "streak-dot" + (i < filled ? " filled" : "");
        streakWeekEl.appendChild(dot);
      }
    }
  }

  updateStreak();

  /* ==========================================================
     CHECKLIST
  ========================================================== */

  const NOTES_KEY = "ms_checklist";
  const notesForm = document.getElementById("notesForm");
  const noteInput = document.getElementById("noteInput");
  const notesList = document.getElementById("notesList");
  const notesEmpty = document.getElementById("notesEmpty");

  function loadNotes() {
    try {
      const raw = localStorage.getItem(NOTES_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveNotes(items) {
    try {
      localStorage.setItem(NOTES_KEY, JSON.stringify(items));
    } catch (e) {
      /* storage unavailable — checklist stays session-only */
    }
  }

  function uid() {
    return "t" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  let notes = loadNotes();

  function renderNotes() {
    if (!notesList) return;
    notesList.innerHTML = "";

    if (notes.length === 0) {
      if (notesEmpty) notesEmpty.style.display = "block";
      return;
    }
    if (notesEmpty) notesEmpty.style.display = "none";

    notes.forEach((item) => {
      const li = document.createElement("li");
      li.className = "note-item" + (item.done ? " done" : "");
      li.dataset.id = item.id;

      li.innerHTML = `
        <button type="button" class="note-check" aria-label="Toggle task complete" aria-pressed="${item.done ? "true" : "false"}">
          <i class="fa-solid fa-check"></i>
        </button>
        <span class="note-text"></span>
        <button type="button" class="note-delete" aria-label="Delete task">
          <i class="fa-solid fa-xmark"></i>
        </button>
      `;

      li.querySelector(".note-text").textContent = item.text;
      notesList.appendChild(li);
    });
  }

  function addNote(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    notes.unshift({ id: uid(), text: trimmed, done: false });
    saveNotes(notes);
    renderNotes();
  }

  function toggleNote(id) {
    const item = notes.find((n) => n.id === id);
    if (!item) return;
    item.done = !item.done;
    saveNotes(notes);
    renderNotes();
  }

  function deleteNote(id) {
    const li = notesList.querySelector(`li[data-id="${id}"]`);
    notes = notes.filter((n) => n.id !== id);
    saveNotes(notes);
    if (li) {
      li.classList.add("note-removing");
      setTimeout(renderNotes, 150);
    } else {
      renderNotes();
    }
  }

  if (notesForm) {
    notesForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addNote(noteInput.value);
      noteInput.value = "";
      noteInput.focus();
    });
  }

  if (notesList) {
    notesList.addEventListener("click", (e) => {
      const li = e.target.closest(".note-item");
      if (!li) return;
      const id = li.dataset.id;

      if (e.target.closest(".note-check")) {
        toggleNote(id);
      } else if (e.target.closest(".note-delete")) {
        deleteNote(id);
      }
    });
  }

  renderNotes();
})();

/* ==========================================================
   MaidStip — Dynamic Dashboard Data Engine
   Progress, readiness, stats, topics, graph & weekly goal.
   All persisted in localStorage under "dashboardData".
   Existing Streak + Checklist logic above is untouched.
========================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "dashboardData";
  const WEEKLY_GOAL = 7; // sessions/week — matches the existing "X / 7" markup

  /* ---------------------------------------------------------
     DATE HELPERS
  --------------------------------------------------------- */

  function dateKey(d) {
    d = d || new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function parseKey(key) {
    return new Date(key + "T00:00:00");
  }

  function daysBetween(aKey, bKey) {
    return Math.round((parseKey(bKey) - parseKey(aKey)) / 86400000);
  }

  // Monday-start week key for the date given (defaults to today).
  function weekStartKey(d) {
    d = d || new Date();
    const day = d.getDay(); // 0 = Sun, 1 = Mon ...
    const diffToMonday = day === 0 ? -6 : 1 - day;
    const monday = new Date(d);
    monday.setDate(d.getDate() + diffToMonday);
    return dateKey(monday);
  }

  function formatShort(d) {
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  function formatWeekRange(startKey) {
    const start = parseKey(startKey);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return `This week: ${formatShort(start)} – ${formatShort(end)}`;
  }

  /* ---------------------------------------------------------
     MATH HELPERS
  --------------------------------------------------------- */

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /* ---------------------------------------------------------
     DEFAULT DATA
  --------------------------------------------------------- */

  function getDefaultData() {
    const today = dateKey();
    return {
      readiness: 4,
      htmlProgress: 5,
      cssProgress: 3,
      javascriptProgress: 2,
      quizzesCompleted: 0,
      flashcardsReviewed: 0,
      weeklySessions: 0,
      previousWeeklySessions: 0,
      weekStartDate: weekStartKey(),
      quizzesThisWeek: 0,
      quizzesLastWeek: 0,
      flashcardsThisWeek: 0,
      flashcardsLastWeek: 0,
      lastActiveDate: null, // null so the very first visit counts as "new day"
      topicProgress: {
        htmlColors: { performance: 18, lastStudiedDate: today },
        cssSyntax: { performance: 24, lastStudiedDate: today },
        jsVariables: { performance: 12, lastStudiedDate: today }
      },
      readinessHistory: [4],
      lastDelta: { html: 0, css: 0, javascript: 0 }
    };
  }

  /* ---------------------------------------------------------
     LOAD / SAVE / VALIDATE
  --------------------------------------------------------- */

  function loadDashboardData() {
    let data;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      data = raw ? JSON.parse(raw) : null;
    } catch (e) {
      data = null;
    }

    const defaults = getDefaultData();
    if (!data || typeof data !== "object") return defaults;

    // Merge with defaults so missing/corrupt fields never break the dashboard.
    const merged = Object.assign({}, defaults, data);
    merged.topicProgress = Object.assign({}, defaults.topicProgress, data.topicProgress || {});
    merged.lastDelta = Object.assign({}, defaults.lastDelta, data.lastDelta || {});
    if (!Array.isArray(merged.readinessHistory) || merged.readinessHistory.length === 0) {
      merged.readinessHistory = defaults.readinessHistory;
    }

    // Clamp everything into sane ranges in case storage was tampered with.
    merged.htmlProgress = clamp(Number(merged.htmlProgress) || 0, 0, 100);
    merged.cssProgress = clamp(Number(merged.cssProgress) || 0, 0, 100);
    merged.javascriptProgress = clamp(Number(merged.javascriptProgress) || 0, 0, 100);
    merged.weeklySessions = clamp(Number(merged.weeklySessions) || 0, 0, WEEKLY_GOAL);
    merged.quizzesCompleted = Math.max(0, Number(merged.quizzesCompleted) || 0);
    merged.flashcardsReviewed = Math.max(0, Number(merged.flashcardsReviewed) || 0);
    merged.readiness = clamp(Number(merged.readiness) || 0, 0, 100);

    return merged;
  }

  function saveDashboardData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      /* storage unavailable — dashboard stays session-only */
    }
  }

  /* ---------------------------------------------------------
     READINESS SCORE
     Weighted blend of subject progress, quiz/flashcard activity
     and weekly consistency — not an unrelated random number.
  --------------------------------------------------------- */

  function computeReadiness(data) {
    const subjectAvg = (data.htmlProgress + data.cssProgress + data.javascriptProgress) / 3;
    const quizScore = Math.min(data.quizzesCompleted * 4, 100);
    const flashScore = Math.min(data.flashcardsReviewed * 2, 100);
    const weeklyScore = (data.weeklySessions / WEEKLY_GOAL) * 100;

    const score =
      subjectAvg * 0.45 +
      quizScore * 0.2 +
      flashScore * 0.15 +
      weeklyScore * 0.2;

    return clamp(Math.round(score), 0, 100);
  }

  /* ---------------------------------------------------------
     DAILY PROGRESS SIMULATION
     Runs once per calendar day (first visit only) so refreshing
     the same day never inflates the numbers.
  --------------------------------------------------------- */

  function simulateDailyProgress(data) {
    const htmlGain = randInt(1, 5);
    const cssGain = randInt(1, 4);
    const jsGain = randInt(1, 4);

    data.htmlProgress = clamp(data.htmlProgress + htmlGain, 0, 100);
    data.cssProgress = clamp(data.cssProgress + cssGain, 0, 100);
    data.javascriptProgress = clamp(data.javascriptProgress + jsGain, 0, 100);
    data.lastDelta = { html: htmlGain, css: cssGain, javascript: jsGain };

    const quizGain = randInt(0, 2);
    const flashGain = randInt(1, 4);
    data.quizzesCompleted += quizGain;
    data.flashcardsReviewed += flashGain;
    data.quizzesThisWeek += quizGain;
    data.flashcardsThisWeek += flashGain;

    data.weeklySessions = clamp(data.weeklySessions + 1, 0, WEEKLY_GOAL);

    reviewOneTopicToday(data);

    data.readiness = computeReadiness(data);
    data.readinessHistory.push(data.readiness);
    if (data.readinessHistory.length > 9) data.readinessHistory.shift();
  }

  // Each day, one weak topic gets "reviewed" (small performance bump +
  // last-studied reset) — rotates by day so all three improve over time.
  function reviewOneTopicToday(data) {
    const keys = ["htmlColors", "cssSyntax", "jsVariables"];
    const dayIndex = Math.floor(Date.now() / 86400000) % keys.length;
    const key = keys[dayIndex];
    const topic = data.topicProgress[key];
    topic.performance = clamp(topic.performance + randInt(3, 9), 0, 100);
    topic.lastStudiedDate = dateKey();
  }

  /* ---------------------------------------------------------
     WEEK ROLLOVER
  --------------------------------------------------------- */

  function rolloverWeekIfNeeded(data) {
    const currentWeek = weekStartKey();
    if (data.weekStartDate !== currentWeek) {
      data.previousWeeklySessions = data.weeklySessions;
      data.weeklySessions = 0;
      data.quizzesLastWeek = data.quizzesThisWeek;
      data.quizzesThisWeek = 0;
      data.flashcardsLastWeek = data.flashcardsThisWeek;
      data.flashcardsThisWeek = 0;
      data.weekStartDate = currentWeek;
    }
  }

  /* ---------------------------------------------------------
     RENDER — small count-up helper for numbers/percentages
  --------------------------------------------------------- */

  function animateNumber(el, from, to, suffix, duration) {
    if (!el) return;
    suffix = suffix || "";
    duration = duration || 700;
    if (from === to) {
      el.textContent = to + suffix;
      return;
    }
    const start = performance.now();
    function step(now) {
      const progress = clamp((now - start) / duration, 0, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = Math.round(from + (to - from) * eased);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function readPreviousNumber(el) {
    const n = parseInt((el && el.textContent) || "0", 10);
    return isNaN(n) ? 0 : n;
  }

  /* ---------------------------------------------------------
     RENDER FUNCTIONS
  --------------------------------------------------------- */

  function updateReadiness(data) {
    const el = document.getElementById("readinessScore");
    if (!el) return;
    animateNumber(el, readPreviousNumber(el), data.readiness, "%");
  }

  function updateSubjectProgress(data) {
    const subjects = [
      { pct: "htmlPercent", delta: "htmlDelta", fill: "htmlFill", value: data.htmlProgress, gain: data.lastDelta.html },
      { pct: "cssPercent", delta: "cssDelta", fill: "cssFill", value: data.cssProgress, gain: data.lastDelta.css },
      { pct: "jsPercent", delta: "jsDelta", fill: "jsFill", value: data.javascriptProgress, gain: data.lastDelta.javascript }
    ];

    subjects.forEach((s) => {
      const pctEl = document.getElementById(s.pct);
      const deltaEl = document.getElementById(s.delta);
      const fillEl = document.getElementById(s.fill);

      if (pctEl) animateNumber(pctEl, readPreviousNumber(pctEl), s.value, "%");
      if (deltaEl) deltaEl.textContent = `+${s.gain || 0}%`;
      if (fillEl) fillEl.style.width = `${s.value}%`;
    });
  }

  function updateStats(data) {
    const quizzesEl = document.getElementById("quizzesCount");
    const quizzesWeekEl = document.getElementById("quizzesWeek");
    const flashEl = document.getElementById("flashcardsCount");
    const flashWeekEl = document.getElementById("flashcardsWeek");

    if (quizzesEl) animateNumber(quizzesEl, readPreviousNumber(quizzesEl), data.quizzesCompleted);
    if (quizzesWeekEl) quizzesWeekEl.textContent = `+${data.quizzesThisWeek} this week`;

    if (flashEl) animateNumber(flashEl, readPreviousNumber(flashEl), data.flashcardsReviewed);
    if (flashWeekEl) flashWeekEl.textContent = `+${data.flashcardsThisWeek} this week`;
  }

  function updateWeeklyGoal(data) {
    const textEl = document.getElementById("weeklyText");
    const fillEl = document.getElementById("weeklyFill");
    const numberEl = document.getElementById("weeklyNumber");
    const percentEl = document.getElementById("weeklyPercent");

    const remaining = WEEKLY_GOAL - data.weeklySessions;
    const percent = Math.round((data.weeklySessions / WEEKLY_GOAL) * 100);

    if (textEl) {
      textEl.textContent =
        remaining <= 0
          ? "Weekly goal complete — great work!"
          : `Complete ${remaining} more study session${remaining === 1 ? "" : "s"} this week`;
    }
    if (fillEl) fillEl.style.width = `${percent}%`;
    if (numberEl) numberEl.textContent = `${data.weeklySessions} / ${WEEKLY_GOAL}`;
    if (percentEl) percentEl.textContent = `${percent}%`;
  }

  function updateDates(data) {
    const el = document.getElementById("weeklyDateRange");
    if (el) el.textContent = formatWeekRange(data.weekStartDate);
  }

  function updateTopics(data) {
    const topics = [
      { key: "htmlColors", perf: "topic1Performance", last: "topic1LastStudied" },
      { key: "cssSyntax", perf: "topic2Performance", last: "topic2LastStudied" },
      { key: "jsVariables", perf: "topic3Performance", last: "topic3LastStudied" }
    ];

    topics.forEach((t) => {
      const topic = data.topicProgress[t.key];
      const perfEl = document.getElementById(t.perf);
      const lastEl = document.getElementById(t.last);

      if (perfEl) perfEl.textContent = `${topic.performance}%`;
      if (lastEl) {
        const days = Math.max(0, daysBetween(topic.lastStudiedDate, dateKey()));
        lastEl.textContent = `Last studied: ${days} day${days === 1 ? "" : "s"} ago`;
      }
    });
  }

  function updateGraph(data) {
    const polyline = document.getElementById("readinessPolyline");
    const dotStart = document.getElementById("readinessDotStart");
    const dotEnd = document.getElementById("readinessDotEnd");
    if (!polyline) return;

    const history = data.readinessHistory.length ? data.readinessHistory : [data.readiness];
    const n = history.length;

    // Map readiness (0-100) onto the existing viewBox (0 0 300 70),
    // keeping the same visual band the original static polyline used.
    const xFor = (i) => (n === 1 ? 5 : 5 + (i * 285) / (n - 1));
    const yFor = (v) => 58 - (clamp(v, 0, 100) / 100) * 46;

    const points = history.map((v, i) => `${xFor(i).toFixed(1)},${yFor(v).toFixed(1)}`).join(" ");
    polyline.setAttribute("points", points);

    if (dotStart) {
      dotStart.setAttribute("cx", xFor(0).toFixed(1));
      dotStart.setAttribute("cy", yFor(history[0]).toFixed(1));
    }
    if (dotEnd) {
      dotEnd.setAttribute("cx", xFor(n - 1).toFixed(1));
      dotEnd.setAttribute("cy", yFor(history[n - 1]).toFixed(1));
    }
  }

  /* ---------------------------------------------------------
     INIT
  --------------------------------------------------------- */

  function initializeDashboard() {
    const data = loadDashboardData();
    const today = dateKey();

    rolloverWeekIfNeeded(data);

    // Only simulate learning progress on the first visit of a new day —
    // refreshing the same day re-renders stored data without new gains.
    if (data.lastActiveDate !== today) {
      simulateDailyProgress(data);
      data.lastActiveDate = today;
    } else {
      data.lastDelta = { html: 0, css: 0, javascript: 0 };
    }

    saveDashboardData(data);

    updateReadiness(data);
    updateSubjectProgress(data);
    updateStats(data);
    updateWeeklyGoal(data);
    updateDates(data);
    updateTopics(data);
    updateGraph(data);
  }

  initializeDashboard();
})();


/* ==========================================================
   MaidStip — Mobile sidebar drawer
   Hamburger toggle, overlay click, Escape key, and auto-close
   on resize back to desktop/tablet widths.
========================================================== */

(function () {
  "use strict";

  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const overlay = document.getElementById("sidebarOverlay");

  if (!sidebar || !toggleBtn || !overlay) return;

  const icon = toggleBtn.querySelector("i");

  function openSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("active");
    document.body.classList.add("no-scroll");
    toggleBtn.setAttribute("aria-expanded", "true");
    if (icon) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    }
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
    toggleBtn.setAttribute("aria-expanded", "false");
    if (icon) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  }

  function toggleSidebar() {
    if (sidebar.classList.contains("open")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  toggleBtn.addEventListener("click", toggleSidebar);
  overlay.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSidebar();
  });

  // If the viewport grows back past the mobile breakpoint, make sure
  // the drawer state doesn't stay stuck open/closed incorrectly.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) closeSidebar();
  });
})();
document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("mobileMenuToggle");
    const sidebar = document.querySelector(".side");

    if (!menuToggle || !sidebar) {
        console.error("Mobile menu elements were not found.");
        return;
    }

    // Create overlay
    let overlay = document.querySelector(".sidebar-overlay");

    if (!overlay) {
        overlay = document.createElement("div");
        overlay.className = "sidebar-overlay";
        document.body.appendChild(overlay);
    }

    function openSidebar() {
        sidebar.classList.add("open");
        overlay.classList.add("show");

        menuToggle.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close menu");

        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        document.body.classList.add("sidebar-open");
    }

    function closeSidebar() {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");

        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

        document.body.classList.remove("sidebar-open");
    }

    menuToggle.addEventListener("click", () => {
        if (sidebar.classList.contains("open")) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    // Close when clicking outside sidebar
    overlay.addEventListener("click", closeSidebar);

    // Close with Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeSidebar();
        }
    });

});