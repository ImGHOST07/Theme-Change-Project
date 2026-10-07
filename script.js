const winmatch = window.matchMedia("(prefers-color-scheme: dark)");
let bodyClass = document.body.classList;
let body = document.querySelector("body");
let content = document.querySelector("div");

function Dark() {
    bodyClass.add("dark")
    bodyClass.remove("light")
};

function light() {
    bodyClass.add("light")
    bodyClass.remove("dark")
};

function changeTheme() {
    if (winmatch.matches) {
        Dark()
    }
    else {
        light()
    }
};

function togl() {
    if (bodyClass.contains("dark")) {
        light()
    }
    else {
        Dark()
    }
};

winmatch.addEventListener("change", ()=>{
    changeTheme()
});


let chng = content.addEventListener("click", (strg)=>{
    togl()
    // localStorage.setItem("Theme", JSON.stringify(strg.target.offsetParent.classList.value))
    // console.log(strg.target.offsetParent.classList.value)
});