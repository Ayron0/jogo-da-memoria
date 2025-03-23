import { useState } from 'react'
import { GameOver } from './Components/GameOver'

type Show = {
    show: boolean;
}

export function MemoryGame() {
    
    const [gameOver, steGameOver] = useState(false);

    function restart() {
        steGameOver(false)
    }

    return (
        <div>
            <GameOver show ={gameOver} handleRestart={restart}/>
        </div>
    )
}