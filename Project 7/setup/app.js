//using selectors inside the element

// const questions = document.querySelectorAll('.question')

// questions.forEach((question) => {
//     // console.log(question)
//     const btn = question.querySelector('.question-btn');
//     // console.log(btn)
//     btn.addEventListener('click', () => {
//         questions.forEach((item) => {
//             // if (item !== question){
//             //     item.classList.remove('show-text')
//             // }
//             // use of ternary operator
//             item = item !== question ? item.classList.remove('show-text') : item
//         })
//         question.classList.toggle('show-text')
//         // question.classList.toggle('plus-icon')
//     })
// })



// traversing the dom

const btns = document.querySelectorAll('.question-btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text')
        btns.forEach((item) => {
            // if (item !== btn) {
            //     item.parentElement.parentElement.classList.remove('show-text');
            // }
            item = item !== btn ? item.parentElement.parentElement.classList.remove('show-text') : item
        })
        

        // btn.classList.toggle('minus-icon')
    })
})