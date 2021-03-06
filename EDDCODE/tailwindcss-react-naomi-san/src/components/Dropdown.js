import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div 
        className={isOpen 
            ? 'grid grid-rows-4 text-center items-center bg-red-100' 
         : 'hidden'
         }
         onClick={toggle}
         >
          <Link className='p-4' to='/'>Home</Link>
          <Link className='p-4' to='/menu'>Menu</Link>
          <Link className='p-4' to='/nosotros'>Nosotros</Link>
          <Link className='p-4' to='/contacto'>Contacto</Link>  
        </div>
    )
}

export default Dropdown
