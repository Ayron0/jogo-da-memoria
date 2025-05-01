import { Fragment } from "react/jsx-runtime";

interface GameOverProps {
    show: boolean;
    handleRestart: () => void;
}

export function GameOver(props: GameOverProps) {
    return(props.show ?
        <div id="gameOver">
            <div>
                Parabéns, você completou o jogo!
            </div>
            <button id="restart" onClick={props.handleRestart}>Jogue novamente</button>
        </div> : <Fragment/>
    )
}