import React, {
    ReactElement,
    ReactNode,
    useState,
    useEffect,
    SetStateAction,
    Dispatch,
} from 'react'
import './Carousel.pcss'

type Slide = {
    image?: string
    html?: ReactNode
    delay: number
    description: string
}

interface CarouselProps {
    slides: Array<Slide>
}

const Carousel: React.FC<CarouselProps> = ({ slides }): ReactElement => {
    const [slide, setSlide]: [
        slide: Slide,
        setSlide: Dispatch<SetStateAction<Slide>>
    ] = useState<Slide>(slides[0])

    let currentSlide: number = 0

    const delay = (seconds: number) =>
        new Promise((resolve) => setTimeout(resolve, seconds * 1000))

    const loop = (): void => {
        setSlide(slides[currentSlide])

        if (currentSlide < slides.length - 1) {
            currentSlide++
        } else {
            currentSlide = 0
        }

        delay(slide.delay).then(loop)
    }

    useEffect(() => loop, [])

    return (
        <>
            <div className="carousel">
                {typeof slide.image !== 'undefined' && (
                    <>
                        <img
                            className="carousel__image"
                            src={slide.image}
                            alt={slide.description}
                        />
                        <div className="carousel__description">
                            <span>{slide.description}</span>
                        </div>
                    </>
                )}
                {typeof slide.html !== 'undefined' && slide.html}
            </div>
        </>
    )
}

export default Carousel
