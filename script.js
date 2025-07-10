const questions = [
  {
    question : "1. In writing a machine code for a CPU, binary instruction sets defined by the programmer operate on operands stored in storage components called...",
    options: ["Stack", "Registers", "Control Unit(CU)", "Arithmetic Logic Unit(ALU)"],
    answer: "Registers"
  },
  {
    question: "2. A programmer defined 110111 instruction set as an 'ADDITION' operator for ARM x86 CPU, what will be the content of a register R3 after the result of addition operation on R1 with value 5 and R2 with value 24?. Thus R3= 110111 R1,R2.",
    options: ["1111110", "11101", "110011", "100001"],
    answer: "11101"
  },
  {
    question: "3. A C langauge programmer developed an application to take user input and write the content to a screen, which header file should he include in his program?",
    options: ["stdio.h", "stdout.h", "stdio", "iostream"],
    answer: "stdio.h"
  },
  {
    question: "4. Which of the follwoing is an exteneded version of C language?",
    options: ["C#", "C++", "COBOL", "Python"],
    answer: "C++"
  },
  {
    question: "5. C# pronouned 'C Sharp' is a Programming language developed by which Organization?",
    options: ["IBM", "Google", "Microsoft", "Bell Labs"],
    answer: "Microsoft"
  },
  {
    question: "6. What is the starting point of a program in C++?",
    options: ["Start", "Static Void Main", "Main()", "main()"],
    answer: "main()"
  },
  {
    question: "7. The .NET framework helps make C# program excutable in other operating system environments. True or False?",
    options: ["True", "False", "Dont't know", "Neutral"],
    answer: "True"
  },
  {
    question: "8. Which of the following is a programming language designed to be used for making webpages interactive?",
    options: ["Java", "C++", "Javascript", "C"],
    answer: "Javascript"
  },
  {
    question: "9. Programs written in machine language are",
    options: ["CPU dependent", "CPU indepenedent", "Can't tell", "written in English"],
    answer: "CPU independent"
  },
  {
    question: "10. In designing an AMD x64 CPU, A programmer defined 1111101 as a 'CUT' instruction set. As an assistant programmer, how do you move a value stored in register R4 with address 0x00 to Register R7 address 0x01 using machine langauge?",
    options: ["1111101 R4,R7", "1111101 0x00, 0x01", "1111101 0x00 0x01", "1111101 1111101 0x00"],
    answer: "1111101 R4,R7"
  },
   {
    question: "11. MOV R2,R4, JMP R7, DEC R6, EXIT 00.  is an example of a program written in.......?",
    options: ["Machine language", "Python", "Assembly language", "C++"],
    answer: "Assembly language"
  },
  {
    question: "12. .... is a prefered language used in development of AI and Expert systems such as ChatGPT, Gemini, Deepseek, Copilot etc. ",
    options: ["C#", "C", "COBOL", "Python"],
    answer: "Python"
  },
  {
    question: "13. A switch statement excute a block of code if a condition is met, else .....",
    options: ["Default block of code is excuted", "the program exits", "the compiler or the interpreter fails", "the program throws an error "],
    answer: "Default block of code is excuted"
  },
  {
    question: "14. You need a program called...... to translate a C++ code to binary code for a CPU to understand ",
    options: ["Interpreter", "Compiler", "Assembler", ".Net framework"],
    answer: "Compiler"
  },
  {
    question: "15. A C language was developed in which year?",
    options: ["2010", "1995", "2001", "1972"],
    answer: "1972"
  },
  {
    question: "16. In Programming, A boolean expression evaluates to..... based on a specific condition",
    options: ["True", "False", "True or False", "None"],
    answer: "True or False"
  },
  {
    question: "17. In python programming language, if A=10 and B=5. What will be the output of A**B?",
    options: ["10000", "1000000", "100000", "110000"],
    answer: "100000"
  },
  {
    question: "18. std::cout<<'Nunya Academy' is an example of a program statement written in .....",
    options: ["Java", "Python", "COBOL", "C++"],
    answer: "C++"
  },
  {
    question: "19. A programming language that uses neumonics to represent binary instruction that operate on registers is called.... ",
    options: ["Assembly language", "Go language", "Rust", "Basic"],
    answer: "Assembly language"
  },
  {
    question: "20. Indentation is very crucial thing to observe in ..... Language.",
    options: ["C", "C++", "COBOL", "Python"],
    answer: "Python"
  }
];

let currentQuestion = 0;
let score = 0;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("Score");

function showQuestion(index) {
  const q = questions[index];
  questionBox.innerText = q.question;
  optionsBox.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("option-btn");
    btn.onclick = () => selectAnswer(btn, q.answer);
    optionsBox.appendChild(btn);
  });
}

function selectAnswer(button, correctAnswer) {
  const allButtons = document.querySelectorAll(".option-btn");
  allButtons.forEach(btn => btn.disabled = true);

  if (button.innerText === correctAnswer) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    allButtons.forEach(btn => {
      if (btn.innerText === correctAnswer) btn.classList.add("correct");
    });
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreText.innerText = `${score} out of ${questions.length}`;
}

// Initialize
showQuestion(currentQuestion);
