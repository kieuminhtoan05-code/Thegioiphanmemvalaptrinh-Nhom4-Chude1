// ====================
// MÀN HÌNH GIỚI THIỆU
// ====================

const startButton =
    document.getElementById("startButton");

const home =
    document.getElementById("home");

const jobs =
    document.getElementById("jobs");


startButton.addEventListener("click", function() {

    home.style.display = "none";

    jobs.style.display = "block";

});


// ====================
// LẬP TRÌNH VIÊN
// ====================

const programmerButton =
    document.getElementById("programmerButton");

const programmerDetail =
    document.getElementById("programmerDetail");

const backProgrammer =
    document.getElementById("backProgrammer");


programmerButton.addEventListener("click", function() {

    jobs.style.display = "none";

    programmerDetail.style.display = "flex";

});


backProgrammer.addEventListener("click", function() {

    programmerDetail.style.display = "none";

    jobs.style.display = "block";

});


// ====================
// KỸ SƯ AI
// ====================

const aiButton =
    document.getElementById("aiButton");

const aiDetail =
    document.getElementById("aiDetail");

const backAI =
    document.getElementById("backAI");


aiButton.addEventListener("click", function() {

    jobs.style.display = "none";

    aiDetail.style.display = "flex";

});


backAI.addEventListener("click", function() {

    aiDetail.style.display = "none";

    jobs.style.display = "block";

});


// ====================
// AN NINH MẠNG
// ====================

const cyberButton =
    document.getElementById("cyberButton");

const cyberDetail =
    document.getElementById("cyberDetail");

const backCyber =
    document.getElementById("backCyber");


cyberButton.addEventListener("click", function() {

    jobs.style.display = "none";

    cyberDetail.style.display = "flex";

});


backCyber.addEventListener("click", function() {

    cyberDetail.style.display = "none";

    jobs.style.display = "block";

});


// ====================
// UI/UX DESIGNER
// ====================

const uiuxButton =
    document.getElementById("uiuxButton");

const uiuxDetail =
    document.getElementById("uiuxDetail");

const backUIUX =
    document.getElementById("backUIUX");


uiuxButton.addEventListener("click", function() {

    jobs.style.display = "none";

    uiuxDetail.style.display = "flex";

});


backUIUX.addEventListener("click", function() {

    uiuxDetail.style.display = "none";

    jobs.style.display = "block";

});