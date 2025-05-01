type Card = {
    id: string;
    icon: string;
    flipped: boolean;
}

interface CardElementProps {
    card: Card;
    handleFlip: (card: Card) => void;
}

export function CardElement(props: CardElementProps) {
    return(
        <div onClick={()=> {props.handleFlip(props.card)}} id={props.card.id} className={`card ${props.card.flipped?"flip":""}`}>
            <div className="card_front">
                <img src={`assets/images/${props.card.icon}.png`} alt={props.card.icon} className="icon" />
            </div>
            <div className="card_back">
                {"</>"}
            </div>
        </div>
    )
}