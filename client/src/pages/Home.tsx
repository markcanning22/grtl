import React from 'react'
import Carousel from '../components/Carousel.tsx'
import NewestReleases from '../components/NewestReleases.tsx'
import HeroSlide from '../components/HeroSlide.tsx'

const Home: React.FC = () => {
    return (
        <>
            <Carousel
                slides={[
                    {
                        html: <HeroSlide />,
                        delay: 5,
                        description: 'Slide 1',
                    },
                    {
                        image: '/images/retro.jpg',
                        delay: 5,
                        description: 'Slide 2',
                    },
                    {
                        image: '/images/arcade.jpeg',
                        delay: 5,
                        description: 'Slide 3',
                    },
                ]}
            />
            <NewestReleases />
        </>
    )
}

export default Home
