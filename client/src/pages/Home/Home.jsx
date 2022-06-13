import React from 'react'
import Annoucement from '../../components/Annoucement/Annoucement'
import Slider from '../../components/Slider/Slider'
import { dataSlide } from '../../resources/Data'
import Categories from '../../components/Categories/Categories'
import ProductsSample from '../../components/ProductSample/ProductSample'
import Search from '../../components/Search/Search'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return (
        <>
            <Annoucement />
            <Slider slides={dataSlide} />
            <Categories />
            <ProductsSample />
            <Search/>
            <Footer />      
        </>
)}
