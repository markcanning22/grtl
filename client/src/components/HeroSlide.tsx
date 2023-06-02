import React, { ReactElement } from 'react'
import './HeroSlide.pcss'

const HeroSlide: React.FC = (): ReactElement => {
    return (
        <>
            <img className="carousel__image" src="/images/controller.jpg" />
            <h2 className="hero-slide__lead">
                Try, rent or buy games from as little as &pound;3.99/month
            </h2>
            <div className="carousel__description">
                <ul className="usp-list">
                    <li>Try FREE for 28 days</li>
                    <li>Free next day delivery*</li>
                    <li>Over 100,000+ games</li>
                </ul>
            </div>
        </>
    )
}

export default HeroSlide
