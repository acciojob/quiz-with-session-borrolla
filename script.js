//your JS code here
// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Load progress from sessionStorage or initialize
let userAnswers = JSON.parse(sessionStorage.getItem("progress")) || {};

const questionsElement = document.getElementById("questions");
const scoreElement = document.getElementById("score");

// Display the quiz questions and choices
function renderQuestions() {

	 const questionsElement = document.getElementById("questions");
     questionsElement.innerHTML = ""; // Clear previous content

	
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
	  
     const questionText = document.createTextNode(question.question);
     questionElement.appendChild(questionText);
	  
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
		
      choiceElement.setAttribute("type", "radio");
		
      choiceElement.setAttribute("name", `question-${i}`);
		
      choiceElement.setAttribute("value", choice);
		
      if (userAnswers[`question-${i}`] === choice) {
        choiceElement.setAttribute("checked", true);
      }

		// Save selection to sessionStorage when changed
      choiceElement.addEventListener("change", () => {
        userAnswers[`question-${i}`] = choiceElement.value;
        sessionStorage.setItem("progress", JSON.stringify(userAnswers));
      });
		
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}

 document.getElementById('submit').addEventListener('click', function () {
	let score = 0;
	 for(let i=0; i<questions.length; i++)
		 {
			 const userAnswer = userAnswers[`question-${i}`];
			 if(userAnswer === questions[i].answer)
			 {
				 score++;
			 }
		 }
	 scoreElement.textContent = `Your score is ${score} out of ${questions.length}.`;
  localStorage.setItem("score", score);
});


// Show score from previous submission if available
const storedScore = localStorage.getItem("score");
if(storedScore !== null)
{
	scoreElement.textContent = `Your score is ${storedScore} out of ${questions.length}.`;  
}

renderQuestions();


