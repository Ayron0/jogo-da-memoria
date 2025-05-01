import { CardElement } from "./CardElement";
import { Card } from "../types/types";

interface GameBoardProps {
    cards: Card[];
    handleFlip: (card: Card) => void;
}

export function GameBoard(props: GameBoardProps) {
    return(
        <div id="gameBoard">
            {props.cards.map((card, index)=>
            <CardElement handleFlip={props.handleFlip} key={index} card={card} />
            )}
        </div>
    )
}