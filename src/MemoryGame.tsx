import { useState } from 'react'
import { GameOver } from './Components/GameOver'


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