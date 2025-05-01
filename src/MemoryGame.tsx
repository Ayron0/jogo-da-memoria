import { useEffect, useState } from 'react'
import { GameOver } from './Components/GameOver'
import { GameBoard } from './Components/GameBoard';
import game from './game/index'

import { Card } from "./types/types";

export function MemoryGame() {
    
    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(()=> {
        setCards(game.createCardsFromTechs())
    }, [])

    function restart() {
        game.clearCards()
        setCards(game.createCardsFromTechs())
        setGameOver(false)
    }

    function handleFlip(card: Card) {
        game.flipCard(card.id, ()=> {
            // GameOverCallback
            setGameOver(true)
        }, ()=> {
            //NoMatchCallback
            setCards([...game.cards])
        })
        setCards([...game.cards])
    }

    return (
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}/>
            <GameOver show ={gameOver} handleRestart={restart}/>
        </div>
    )
}