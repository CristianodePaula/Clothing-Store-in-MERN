import React, { useState, useEffect, useRef } from 'react'
import {
    Container,
    Gallery,
    Image,
    Arrow
} from './SliderStyle'
import { dataSlide } from '../../resources/Data'
import { 
    FaAngleDoubleLeft, 
    FaAngleDoubleRight 
} from 'react-icons/fa'

const Slider = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const timeout = useRef(null)

    useEffect(
        () => {
            const nextSlide = () => {
                setCurrent(current => (current === length - 1 ? 0 : current + 1))
            }
            timeout.current = setTimeout(nextSlide, 3000)

            return function () {
                if (timeout.current) {
                    clearTimeout(timeout.current)
                }
            }
        }, [current, length])

    return (
        <Container id='slider' >
            <Gallery>
                {dataSlide.map((slide, index) => (
                    <div key={index} className={index === current ? 'slide active' : 'slide'}>
                        {index === current && (<Image src={slide.img} />)}
                    </div>
                ))}
            </Gallery>
            <Arrow 
                direction="left" 
                onClick={prevSlide}
            ><FaAngleDoubleLeft /></Arrow>
            <Arrow 
                direction="right" 
                onClick={nextSlide}
            ><FaAngleDoubleRight /></Arrow>
        </Container>
    )
}
export default Slider

