// Your code goes here
document.addEventListener("DOMContentLoaded", function(){
    this.getElementById("text").textContent = "This is really cool!"
    console.log("The DOM has loaded")})

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
)