import React, { ReactElement } from 'react'
import './Game.pcss'

export interface GameProps {
    cover: string
    title: string
    platform: string
}

const Game: React.FC<GameProps> = ({
    cover,
    title,
    platform,
}): ReactElement => {
    return (
        <div className="game" data-platform={platform}>
            <div className="game__platform" data-platform={platform}>
                {platform}
            </div>
            <img className="game__cover" src={cover} alt={title} />
            <div className="game__title">{title}</div>
        </div>
    )
}

export default Game
