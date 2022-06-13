import React, { useRef, useEffect } from 'react'
import { Container } from './AnnoucementStyle'
import { init } from 'ityped'

export default function Annoucement() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 20,
            strings: [
                'Aproveite nossas ofertas especiais!',
                'Descontos de até 30%,',
                'Enviamos para todo o país'
            ],
        })
    }, [])

    return (
        <Container ref={textRef}></Container>
    )
}
