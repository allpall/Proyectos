import React, {useState} from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import { homeObj2, homeObj3, homeObj4, homeObj5, homeObj6, homeObj7, homeObjOne } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

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
         <InfoSection {...homeObj2}/>
         <InfoSection {...homeObj3}/> 
         <InfoSection {...homeObj4}/>
         <InfoSection {...homeObj5}/>
         <InfoSection {...homeObj6}/>
         <InfoSection {...homeObj7}/> 
         <Footer /> 
        </>
    )
}

export default Home
