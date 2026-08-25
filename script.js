let score = 0;

let question1Answered = false;
let question2Answered = false;

let question1Correct = false;
let question2Correct = false;

function checkAnswer() {

    const answer = document.getElementById("answer").value;
    const feedback = document.getElementById("feedback");

    question1Answered = true;

    if (Number(answer) === 4) {

        feedback.textContent =
            "Correct! 3(4) + 6 = 18.";

        if (!question1Correct) {
            score++;
            question1Correct = true;
            updateScore();
        }

    } else {

        feedback.textContent =
            "Not quite. Try solving the equation step by step.";

        updateScore();
    }
}


function checkChoice(choice) {

    const feedback =
        document.getElementById("choiceFeedback");

    question2Answered = true;

    if (choice === "B") {

        feedback.textContent =
            "Correct! First subtract 4 from both sides.";

        if (!question2Correct) {
            score++;
            question2Correct = true;
            updateScore();
        }

    } else {

        feedback.textContent =
            "Not quite. First undo the addition by subtracting 4.";

        updateScore();
    }
}


function updateScore() {

    document.getElementById("score").textContent =
        "Score: " + score + " / 2";

    if (question1Answered && question2Answered) {

        if (score === 2) {

            document.getElementById("completion").textContent =
                "Great work! You've demonstrated that you can solve two-step equations.";

        } else {

            document.getElementById("completion").textContent =
                "Needs More Practice: Review the steps above and try the activities again.";
        }
    }
}

function resetLesson() {

    score = 0;

    question1Answered = false;
    question2Answered = false;

    question1Correct = false;
    question2Correct = false;

    document.getElementById("answer").value = "";

    document.getElementById("feedback").textContent = "";

    document.getElementById("choiceFeedback").textContent = "";

    document.getElementById("completion").textContent = "";

    updateScore();
}