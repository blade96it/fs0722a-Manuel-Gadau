const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "Falso",
        incorrect_answers: "Vero",
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "Falso",
        incorrect_answers: "Vero",
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "Falso",
        incorrect_answers: "Vero",
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];

const setDomande = [
    {
        tipo: "multipla",
        domandaSet: "What does CPU stand for?",
        risposteSet: [
            "Central Processing Unit",
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ]
    },
    {
        tipo: "boolean",
        domandaSet: "Ti piace la patata?",
        risposteSet: [
            "Vero",
            "Falso",
        ]
    },
    {
        tipo: "multipla",
        domandaSet: "What does GPU stand for?",
        risposteSet: [
            "Central Processdfsdsing Unit",
            "Central aaaaProcesdfsdfss Unit",
            "Computer sssPersosdfsdfnal Unit",
            "Central hhhProcessdfsdfsor Unit",
        ]
    }, {
        tipo: "multipla",
        domandaSet: "What asdnd for?",
        risposteSet: [
            "Central Processdfsdsing Unit",
            "Central aaaaProcesdfsdfss Unit",
            "Computer sssPersosdfsdfnal Unit",
            "Central hhhProcessdfsdfsor Unit",
        ]
    }

]

let domanda = document.querySelector("#titolo-test")
let risposte = document.querySelectorAll("label");
let radios = document.querySelectorAll("input");
let bottone = document.querySelector("#button-conferma")
let contatore = document.querySelector("#contatore-domande");

let risposteFornite = [];
let questionNumber = 0;




window.onload = function () {
    contatore.textContent = questionNumber + 1 + "/10";
    domanda.textContent = setDomande[questionNumber].domandaSet;
    for (let i = 0; i < 4; i++) {
        risposte[i].textContent = setDomande[questionNumber].risposteSet[i];
    }
    
    bottone.addEventListener("click", function () {       
        for (let c = 0; c < radios.length; c++) {
            
            if (radios[c].checked) {
                risposteFornite.push(risposte[c].textContent)
                questionNumber++;
                if (questionNumber == setDomande.length) {
                    window.location.href = "result.html"
                }
                contatore.textContent = questionNumber + 1 + "/10";
                radios[c].checked = false;
                domanda.textContent = setDomande[questionNumber].domandaSet;
                if (setDomande[questionNumber].tipo == "multipla") {
                    for (let i = 0; i < 4; i++) {
                        risposte[i].textContent = setDomande[questionNumber].risposteSet[i];
                    }
                    radios[2].style.display = "inline";
                    radios[3].style.display = "inline";
                    risposte[2].style.display = "inline";
                    risposte[3].style.display = "inline";
                }
                else {
                    for (let i = 0; i < 2; i++) {
                        risposte[i].textContent = setDomande[questionNumber].risposteSet[i];

                    }
                    radios[2].style.display = "none"
                    risposte[2].style.display = "none";
                    radios[3].style.display = "none";
                    risposte[3].style.display = "none";
                }
            }
        }

    })
}
console.log(risposteFornite);
