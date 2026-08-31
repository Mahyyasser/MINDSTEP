document.addEventListener("DOMContentLoaded", () => {
    const savedResult = localStorage.getItem("testResult");
    const progress = document.getElementById("overallProgress");
    const score = document.getElementById("overallScore");
    const message = document.getElementById("resultMessage");
    const htmlBar = document.getElementById("htmlBar");
    const htmlPercentage = document.getElementById("htmlPercentage");
    const cssBar = document.getElementById("cssBar");
    const cssPercentage = document.getElementById("cssPercentage");
    const javascriptBar = document.getElementById("javascriptBar");
    const javascriptPercentage = document.getElementById("javascriptPercentage");
    if (!savedResult) {
        if (score) score.textContent = "0";
        if (message) message.textContent = "";
        if (htmlBar) htmlBar.style.width = "0%";
        if (htmlPercentage) htmlPercentage.textContent = "";
        if (cssBar) cssBar.style.width = "0%";
        if (cssPercentage) cssPercentage.textContent = "";
        if (javascriptBar) javascriptBar.style.width = "0%";
        if (javascriptPercentage) javascriptPercentage.textContent = "";
        return;
    }

    const result = JSON.parse(savedResult);
    const answers = result.answers || [];
    let htmlCorrect = 0;
    let cssCorrect = 0;
    let javascriptCorrect = 0;

    answers.forEach(answer => {
        if (!answer.isCorrect) return;
        if (answer.question >= 1 && answer.question <= 10) {
            htmlCorrect++;
        } else if (answer.question >= 11 && answer.question <= 20) {
            cssCorrect++;
        } else if (answer.question >= 21 && answer.question <= 30) {
            javascriptCorrect++;
        }
    });
    const html = htmlCorrect * 10;
    const css = cssCorrect * 10;
    const javascript = javascriptCorrect * 10;
    const overall = Math.round(
        (htmlCorrect + cssCorrect + javascriptCorrect) / 30 * 100
    );

    if (score) {
        score.textContent = overall;
    }
    if (progress) {
        const pathLength = progress.getTotalLength();
        progress.style.display = "block";
        progress.style.strokeDasharray = pathLength;
        progress.style.strokeDashoffset =
            pathLength * (1 - overall / 100);
    }
    if (message) {
        if (overall >= 80) {
            message.textContent = "Excellent work!";
        } else if (overall >= 60) {
            message.textContent = "Good job! Keep improving.";
        } else if (overall >= 50) {
            message.textContent = "Keep going! You can do better.";
        } else {
            message.textContent = "Keep practicing and try again.";
        }
    }
    if (htmlBar) {
        htmlBar.style.width = `${html}%`;
    }
    if (htmlPercentage) {
        htmlPercentage.textContent = `${html}%`;
    }
    if (cssBar) {
        cssBar.style.width = `${css}%`;
    }
    if (cssPercentage) {
        cssPercentage.textContent = `${css}%`;
    }
    if (javascriptBar) {
        javascriptBar.style.width = `${javascript}%`;
    }
    if (javascriptPercentage) {
        javascriptPercentage.textContent = `${javascript}%`;
    }
});