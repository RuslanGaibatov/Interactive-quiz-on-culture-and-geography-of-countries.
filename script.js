const questions = [
    {
        question: "Какой язык является официальным в Бразилии?",
        options: ["Испанский", "Португальский", "Английский", "Французский"],
        answer: 1
    },
    {
        question: "Какая страна известна как 'Страна восходящего солнца'?",
        options: ["Китай", "Япония", "Южная Корея", "Индия"],
        answer: 1
    },
    {
        question: "Какой город является столицей Франции?",
        options: ["Лондон", "Берлин", "Париж", "Мадрид"],
        answer: 2
    },
    {
        question: "Какой континент является самым большим?",
        options: ["Африка", "Азия", "Северная Америка", "Европа"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById('start-quiz').addEventListener('click', startQuiz);
document.getElementById('next-button').addEventListener('click', nextQuestion);
document.getElementById('restart-quiz').addEventListener('click', restartQuiz);

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });

    document.getElementById('next-button').classList.add('hidden');
}

function selectOption(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.answer) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        document.getElementById('next-button').classList.remove('hidden');
    } else {
        showResult();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    document.getElementById('score').innerText = `${score} из ${questions.length}`;
}

function restartQuiz() {
    document.getElementById('result-container').classList.add('hidden');
    startQuiz();
}
