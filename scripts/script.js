function showAnswer(el) {
    // NOTE: el == article.answered-question
    // get faq-question for this element
    const question = el.getElementsByClassName("faq-question")[0];
    // get the p.faq-answer for this element
    const answer = el.getElementsByClassName("faq-answer")[0];
    // get the clicked elements arrow
    const img = answer.previousElementSibling;
    // get all the questions
    const questions = document.getElementsByClassName("faq-question");
    // get all the answers
    const answers = document.getElementsByClassName("faq-answer");
    const arrows = document.getElementsByClassName("up");
    
    // reset all question fonts
    for (let i = 0; i < answers.length; i++) {
        questions[i].style.fontWeight = "400";
    }
    // close all answer divs
    for (let i = 0; i < questions.length; i++) {
        answers[i].style.display = "none";
    }

    // if we are clicking an already open element
    if (img.classList.contains("up")) {
        img.classList.replace("up", "down");
        question.style.fontWeight = "400";
        return;
    }

    // make THIS question bold
    question.style.fontWeight = "700";
    // open THIS answer div
    answer.style.display = "block";

    // reset all arrows to down (there should ever be just one or zero "up")
    if (arrows.length) {
        arrows[0].classList.replace("up", "down");
    }

    // set THIS arrow to up
    img.classList.replace("down", "up");
    

}