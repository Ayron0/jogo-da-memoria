import { useEffect, useState } from 'react'
import { GameOver } from './Components/GameOver'
import { GameBoard } from './Components/GameBoard';
import game from './game/index'


export function MemoryGame() {
    
    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([])

    useEffect(()=> {
        setCards(game.createCardsFromTechs())
    }, [])

    function restart() {
        setGameOver(false)
    }

    return (
        <div>
            <GameBoard cards={cards}/>
            <GameOver show ={gameOver} handleRestart={restart}/>
        </div>
    )
}