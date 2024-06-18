// set initial count to 0
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(btns)
btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        } else if (styles.contains('reset')){
            count = 0;
        } else {
            count++;
        }
        if (count > 0){
            value.style.color = 'blue'
        } else if (count < 0){
            value.style.color = 'red'
        } else {
            value.style.color = '#222'
        }
        value.textContent = count;
        // console.log(e.currentTarget);
    })
    // console.log(btn)
})

// with arrow function
// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//     const styles = e.currentTarget.classList;
//     count = styles.contains('decrease') ? count - 1 : 
//             styles.contains('increase') ? count + 1 : count = 0;
//     value.style.color = 
//             count > 0 ? 'blue' :
//             count < 0 ? 'red' : 'black'
//         value.textContent = count
//         // console.log(e.currentTarget) 
//     })
//     // console.log(btn)
// })