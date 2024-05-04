
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTINOS  = {
    AGUA:'water',
    FOGO:'fire',
    TERRA:'earth'

}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}
const playMachine = () => {

    const choices = [GAME_OPTINOS.AGUA, GAME_OPTINOS.AGUA,GAME_OPTINOS.TERRA]

    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}
const playTheGame = (human, machine) => {

    console.log('Humano:' + human + 'Maquina:' + machine)

    if 
        (human === machine) {

        result.innerHTML = 'Empate!'
    }
    else if 
        ((human === 'water' && machine === 'fire') ||
        (human === 'fire' && machine === 'earth') ||
        (human === 'earth' && machine === 'water')) 
    
    {  
    
        humanScoreNumber ++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você Ganhou !'


    }
    else {
     
        machineScoreNumber ++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = ' Você Perdeu !'

    }






}