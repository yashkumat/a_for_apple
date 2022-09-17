let alphabets = [
    {
        id: 0,
        letter: 'A',
        image: 'apple'
    },
    {
        id: 1,
        letter: 'B',
        image: 'ball'
    },
    {
        id: 2,
        letter: 'C',
        image: 'cat'
    },
    {
        id: 3,
        letter: 'D',
        image: 'dog'
    },
    {
        id: 4,
        letter: 'E',
        image: 'elephant'
    },
    {
        id: 5,
        letter: 'F',
        image: 'fish'
    },
    {
        id: 6,
        letter: 'G',
        image: 'goat'
    },
    {
        id: 7,
        letter: 'H',
        image: 'hat'
    },
    {
        id: 8,
        letter: 'I',
        image: 'icecream'
    },
    {
        id: 9,
        letter: 'J',
        image: 'jeans'
    },
    {
        id: 10,
        letter: 'K',
        image: 'kite'
    },
    {
        id: 11,
        letter: 'L',
        image: 'lion'
    },
    {
        id: 12,
        letter: 'M',
        image: 'monkey'
    },
    {
        id: 13,
        letter: 'N',
        image: 'nest'
    },
    {
        id: 14,
        letter: 'O',
        image: 'orange'
    },
    {
        id: 15,
        letter: 'P',
        image: 'parrot'
    },
    {
        id: 16,
        letter: 'Q',
        image: 'queen'
    },
    {
        id: 17,
        letter: 'R',
        image: 'rat'
    },
    {
        id: 18,
        letter: 'S',
        image: 'strawberry'
    },
    {
        id: 19,
        letter: 'T',
        image: 'tea'
    },
    {
        id: 20,
        letter: 'U',
        image: 'umbrella'
    },
    {
        id: 21,
        letter: 'V',
        image: 'van'
    },
    {
        id: 22,
        letter: 'W',
        image: 'watch'
    },
    {
        id: 23,
        letter: 'X',
        image: 'xmasstree'
    },
    {
        id: 24,
        letter: 'Y',
        image: 'yatch'
    },
    {
        id: 25,
        letter: 'Z',
        image: 'zebra'
    },
]

let image1 = document.getElementById('image1')
let image2 = document.getElementById('image2')
let image3 = document.getElementById('image3')
let letter_container = document.getElementById('letter')
let player_score = document.getElementById('score')
let player_name = document.getElementById('name')

let score = 0

let alphabet_object;

function start_game(){
    let name_input = document.getElementById('player_name_input')
    if(name_input.value == ""){
        name_input.focus()
    }else{
        speakData.text  = "hi, "+name_input.value
        speechSynthesis.speak(speakData);
        player_name.innerHTML = name_input.value.trim().split(" ")[0]
        document.getElementById('start-menu').style.display = 'none'
        document.getElementById('restart-menu').style.display = 'none'
    }
}

function newBoard(){

    var arr = [];

    while(arr.length < 3){
        var r = Math.floor(Math.random() * 26)
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    alphabet_object = alphabets[arr[Math.floor(Math.random() * 3)]]
    
    letter_container.innerHTML = alphabet_object['letter']

    image1.src = `${alphabets[arr[0]]['image']}.png`
    image2.src = `${alphabets[arr[1]]['image']}.png`
    image3.src = `${alphabets[arr[2]]['image']}.png`
    image1.alt = `${alphabets[arr[0]]['id']}`
    image2.alt = `${alphabets[arr[1]]['id']}`
    image3.alt = `${alphabets[arr[2]]['id']}`
}

let images = document.getElementsByClassName('image')

for (let index = 0; index < images.length; index++) {
    const element = images[index];
    element.addEventListener('click',()=>{
        
        if(element.alt == alphabet_object['id']){
            score++
            result(1)
        }else{
            if(score > 0){
                score--
                result(0)
            }else{
                result('end')
            }
        }

        if(score < 9){
            player_score.innerHTML = '0'+score
        }else{
            player_score.innerHTML = score
        }

    })
}

newBoard()

let speakData = new SpeechSynthesisUtterance();


function result(flag){

    if(flag == 1){
        speakData.text  = "Correct Answer"
        player_score.style.color = 'green'
        newBoard()
    }else if(flag == 0){
        speakData.text  = "Try Again"
        player_score.style.color = 'red'
    }else{
        speakData.text  = "Game Over"
        document.getElementById('restart-menu').style.display = 'flex'
    }
    
    speechSynthesis.speak(speakData);
}

function restart_game(){
    document.getElementById('restart-menu').style.display = 'none'
    player_score.innerHTML = '0'+0
}

function exit_game(){
    speakData.text  = "Good Bye!"
    speechSynthesis.speak(speakData);
    open(location, '_self').close();
}
