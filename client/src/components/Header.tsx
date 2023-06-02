import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import './Header.pcss'

const Header: React.FC = (): ReactElement => {
    return (
        <>
            <header>
                <Link to="/" className="logo">
                    <h1>
                        GRTL <i className="fas fa-gamepad"></i>
                    </h1>
                </Link>
                <form className="search-container">
                    <input
                        type="search"
                        className="search-container__input"
                        placeholder="Enter search term..."
                        name="q"
                    />
                    <button type="submit" className="search-container__submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
                <div className="buttons">
                    <button className="buttons__user">
                        <i className="fas fa-user"></i>
                    </button>
                    <button className="buttons__basket">
                        <i className="fas fa-shopping-basket"></i>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
