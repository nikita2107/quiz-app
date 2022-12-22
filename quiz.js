const quest = [
    {
        'ques': 'Where is the Statue Of Liberty located?',
        'a': 'Qatar',
        'b': 'New York',
        'c': 'India',
        'd': 'China',
        'correct':'b'
    },
    {
        'ques': 'Which language runs in a web browser',
        'a': 'javascript',
        'b': 'C',
        'c': 'Python',
        'd': 'Java',
        'correct':'a'
    },
    {
        'ques': 'What does XML stand for?',
        'a': 'eXtra Multi-Program Language',
        'b': 'eXtensible Markup Language',
        'c': 'eXamine Multiple Language',
        'd': 'eXecutable Markup Language',
        'correct':'b'
    },
    {
        'ques': 'What is 300 + 200',
        'a': '100',
        'b': '400',
        'c': '600',
        'd': '500',
        'correct':'d'
    },
    {
        'ques': 'Which is the only continent in the world without a desert',
        'a': 'Asia',
        'b': 'North America',
        'c': 'Europe',
        'd': 'Africa',
        'correct':'c'
    }

]
let index = 0;
let total = quest.length;
let right=0, wrong=0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.option')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = quest[index]
    console.log(data)
    quesBox.innerText = ` ${index + 1}) ${data.ques} `;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = quest[index];
    const ans = getAns()
    if (ans === data.correct){
        right ++;
    }else {
        wrong ++;
    }
    index ++;
    loadQuestion();
    return;
}

const getAns = () => {
    let ans;
     optionInputs.forEach(
        (input) => {
            if(input.checked){
                ans = input.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <h2 class= "final"> You've successfully played the Quiz</h3><br> <br>
    <h1 class= "final"> ${right} / ${total} are answered correctly !</h2>
    `
}



loadQuestion();