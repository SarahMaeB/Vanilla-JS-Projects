const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "black", "coral", "aqua"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0-3 = colors[1,2,3]
    // const randomNumm = getRandomNum()
    const randomNum = Math.floor(Math.random() * colors.length);
    // can't input directly because the background and text will not match
    console.log(randomNum)
    document.body.style.backgroundColor = colors[randomNum]
    color.textContent = colors[randomNum];
    // console.log(document.body);
})

// no need to make a function, can directly input the function
function getRandomNum(){
    return Math.floor(Math.random() * colors.length);
    // Math.floor( ) rounds a floating-point value down to the closest integer.
    // Math.round( ) , which rounds up or down to the nearest integer.
}
