// declaração de variavies
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    "question": "PHP foi desenvolvido para qual fim?",
    "answers": [
      {
        "answer": "back-end",
        "correct": true
      },
      {
        "answer": "front-end",
        "correct": false
      },
      {
        "answer": "Sistema operacional",
        "correct": false
      },
      {
        "answer": "Banco de dados",
        "correct": false
      },
    ]
  },
  {
    "question": "Uma forma de declarar variável em JavaScript:",
    "answers": [
      {
        "answer": "$var",
        "correct": false
      },
      {
        "answer": "var",
        "correct": true
      },
      {
        "answer": "@var",
        "correct": false
      },
      {
        "answer": "#let",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual o seletor de id no CSS?",
    "answers": [
      {
        "answer": "#",
        "correct": true
      },
      {
        "answer": ".",
        "correct": false
      },
      {
        "answer": "@",
        "correct": false
      },
      {
        "answer": "/",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual linguagem de programação é de banco de dados?",
    "answers": [
      {
        "answer": "SQL",
        "correct": true
      },
      {
        "answer": "COBOL",
        "correct": false
      },
      {
        "answer": "Rust",
        "correct": false
      },
      {
        "answer": "Ruby",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual foi a promeira linguagem de programação",
    "answers": [
      {
        "answer": "Fortran",
        "correct": true
      },
      {
        "answer": "C#",
        "correct": false
      },
      {
        "answer": "Assembly",
        "correct": false
      },
      {
        "answer": "Basic",
        "correct": false
      },
    ]
  },
  {
    "question": "Para que se usa // em programação",
    "answers": [
      {
        "answer": "Para fazer um print do texto",
        "correct": false
      },
      {
        "answer": "Para comentar o código",
        "correct": true
      },
      {
        "answer": "Para terminar o script",
        "correct": false
      },
      {
        "answer": "Para fazer uma quebra de linha",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual e a linguagem de Marcação de HiperTexto?",
    "answers": [
      {
        "answer": "JSON",
        "correct": false
      },
      {
        "answer": "Prolog",
        "correct": false
      },
      {
        "answer": "Scheme",
        "correct": false
      },
      {
        "answer": "HTML",
        "correct": true
      },
    ]
  },
  {
    "question": "A linguagem php é usada no:",
    "answers": [
      {
        "answer": "Front-end",
        "correct": false
      },
      {
        "answer": "Back-end",
        "correct": true
      },
    ]
  },
  {
    "question": "Qual e a linguagem de programação manipula os elementos no DOM do HTML?",
    "answers": [
      {
        "answer": "JSON",
        "correct": false
      },
      {
        "answer": "JavaScript",
        "correct": true
      },
      {
        "answer": "CSS",
        "correct": false
      },
      {
        "answer": "VS code",
        "correct": false
      },
    ]
  },
]

// Substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// Cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answersBox.querySelectorAll("button");
  oldButtons.forEach(function(btn) {
    btn.remove();
  });

  // Alterar texto da pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i+1;

  // insere as alternativas
  questions[i].answers.forEach(function(answer, i) {
    // cria o template do botao do quizz
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);
    
    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    //remover hide e template class
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template" );

    // inserir a alternativa na tela
    answersBox.appendChild(answerTemplate);

    // inserir evento click no botao
    answerTemplate.addEventListener("click", function() {
      checkAnswer(this);
    })
  })

  //incrementar o numero da questão
  actualQuestion++
}

// verificar resposta do ususario
function checkAnswer(btn) {
  // seleciona todos os botoes
  const buttons = answersBox.querySelectorAll("button");

  // verifica se a resposta esta correta e adiciona classes nos botoes
  buttons.forEach(function(button) {
    if(button.getAttribute("correct-answer") === "true") {
      button.classList.add('correct-answer');

      //checar se o usuario acertou a pergunta
      if(btn === button) {
        points++;
      }
    } else {
      button.classList.add("wrong-answer");
    }
  });

  // exibir proxima pergunta
  nextQuestion();
}

// Exibir a proxima pergunta no quizz
function nextQuestion() {
  // timer para o usuario ver as respostas
  setTimeout(function() {
    // verifica se ainda ha perguntas
    if(actualQuestion >= questions.length) {
      showSuccessMessage();
      return;
    }
    createQuestion(actualQuestion);
  }, 1500)
}

function showSuccessMessage() {
  hideOrShowQuizz();
  //trocar dados da tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);
  const displayScore = document.querySelector("#display-score span");
  displayScore.textContent = score.toString();

  //alterar o numero de perguntas corretas
  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  //alterar o total de perguntas
  const totalQuestions = document.querySelector("#questions-qtd");
  totalQuestions.textContent = questions.length;
}

// mostra ou escond score 
function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
}

//reiniciar quizz
const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener('click', function() {
  // zerar o jogo
  actualQuestion = 0;
  points =0;
  hideOrShowQuizz();
  init();
})

// Inicialização do Quizz
init();