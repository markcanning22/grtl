import React, {
    Dispatch,
    ReactElement,
    SetStateAction,
    useEffect,
    useState,
} from 'react'
import './NewestReleases.pcss'
import axios, { AxiosResponse } from 'axios'
import Game, { GameProps } from './Game.tsx'

const NewestReleases: React.FC = (): ReactElement => {
    const [games, setGames]: [
        games: Array<GameProps>,
        setGames: Dispatch<SetStateAction<[]>>
    ] = useState([])

    useEffect((): void => {
        axios
            .get('/api/newest-releases')
            .then((response: AxiosResponse): void => {
                setGames(response.data)
            })
    }, [])

    return (
        <section className="newest-releases">
            <h3>Newest Releases</h3>
            <div className="newest-releases__games">
                {typeof games !== 'undefined' &&
                    games.map((game: GameProps) => (
                        <Game
                            cover={game.cover}
                            title={game.title}
                            platform={game.platform}
                        />
                    ))}
            </div>
        </section>
    )
}

export default NewestReleases
