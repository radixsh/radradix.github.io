var counter = 1;

function flip() {
    counter++;
    if(counter%2===0){ // if it's odd, meaning it's currently light theme
        document.getElementById("theme-link").href="dark-theme.css"
        return console.log("Successful change to dark-theme.css")
    } else if(counter%2===1){
        document.getElementById("theme-link").href="light-theme.css";
        return console.log("Successful change to light-theme.css")
    }
}
