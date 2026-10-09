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

if (localStorage.getItem("Theme")) {
    bodyClass.add(localStorage.getItem("Theme"))
}

function changeTheme() {
    if (winmatch.matches) {
        Dark()
        localStorage.setItem("Theme", "dark")
    }
    else {
        light()
        localStorage.setItem("Theme", "light")
    }
};

function togl() {
    if (bodyClass.contains("dark")) {
        light()
        localStorage.setItem("Theme", "light")
    }
    else {
        Dark()
        localStorage.setItem("Theme", "dark")
    }
};

winmatch.addEventListener("change", ()=>{
    changeTheme()
});


let chng = content.addEventListener("click", (strg)=>{
    togl()
});