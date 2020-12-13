//const theme = document.querySelector("#theme-link");
//document.cookie = "light=false";
console.log(localStorage);

function flip() {
/*    if(document.cookie.includes("light=true")){
        document.cookie = "light=false";
        document.getElementById("theme-link").href="dark-theme.css";
    } else if(document.cookie.includes("light=false")){
        document.cookie = "light=true";
        document.getElementById("theme-link").href="light-theme.css";
    }
    console.log("cookies after flip: " + document.cookie);*/

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "light") {
      document.getElementById("theme-link").href="dark-theme.css";
      localStorage.setItem("theme","dark");
    } else if (currentTheme == "dark") {
      document.getElementById("theme-link").href="light-theme.css";
      localStorage.setItem("theme","light");
    }
    console.log(localStorage);
}


/*
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Select the button
const btn = document.querySelector(".btn-toggle");
// Check for dark mode preference at the OS level
//const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem("theme");
// If the user's preference in localStorage is dark...
if (currentTheme == "dark") {
  // ...let's toggle the .dark-theme class on the body
  document.body.classList.toggle("dark-mode");
// Otherwise, if the user's preference in localStorage is light...
} else if (currentTheme == "light") {
  // ...let's toggle the .light-theme class on the body
  document.body.classList.toggle("light-mode");
}

// Listen for a click on the button
btn.addEventListener("click", function() {
  // If the user's OS setting is dark and matches our .dark-mode class...
  if (prefersDarkScheme.matches) {
    // ...then toggle the light mode class
    document.body.classList.toggle("light-mode");
    // ...but use .dark-mode if the .light-mode class is already on the body,
    var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
  } else {
    // Otherwise, let's do the same thing, but for .dark-mode
    document.body.classList.toggle("dark-mode");
    var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  }
  // Finally, let's save the current preference to localStorage to keep using it
  localStorage.setItem("theme", theme);
});
*/

