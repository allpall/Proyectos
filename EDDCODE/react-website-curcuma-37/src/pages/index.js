import React, {useState} from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Products from '../components/Products';
import { productData, productData3, productDataTwo } from '../components/Products/data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
         <Hero />
         <InfoSection {...homeObjOne}/>
         <Products id='cake' lightText heading='Elige tu favorito' data={productData} />
         <Products id='cake2' lightText data={productData} />
         <Products 
          id='drink' lightBg darkText
         heading='Refresca tu día' data={productDataTwo} />
         <Products 
          id='hotdrink' lightBg darkText
         heading data={productData3} />
         <Footer /> 
        </>
    )
}

export default Home
