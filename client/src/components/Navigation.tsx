import React, { ReactElement } from 'react'
import './Navigation.pcss'

const Navigation: React.FC = (): ReactElement => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <div data-platform="playstation">PlayStation</div>
                    </li>
                    <li>
                        <div data-platform="xbox">Xbox</div>
                    </li>
                    <li>
                        <div data-platform="pc">PC</div>
                    </li>
                    <li>
                        <div data-platform="nintendo">Nintendo</div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation
