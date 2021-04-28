import React from 'react';
import ImageOne from '../images/sushi-5.jpg';
import ImageTwo from '../images/sushi-3.jpg';
import Image3 from '../images/sushi-4.jpg';

const Content = () => {
    return (
     <>   
      <div className='menu-card'>
        <img src={ImageOne} alt='sushi' className='h-full rounded
           mb-20 shadow' />   
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Misonabe</h2>
          <p className='mb-2'>Fondo de pasta miso servido con fideos
          soba, camaron, pollo, calabaza, zanahoria y 
          champiñon.</p> 
          <span>$119</span>  
        </div>  
      </div>
      <div className='menu-card'>
        <img src={ImageTwo} alt='sushi' className='h-full rounded
           mb-20 shadow' />   
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Hamburguesas de arroz</h2>
          <p className='mb-2'>Tapas de gohan con queso crema o manchego,
            aguacate, espinaca y aderezo chipotle (2pz por orden).</p> 
          <span>Pollo $89 ; Camaron $99  ;  Res $99</span>  
        </div>  
      </div>
      <div className='menu-card'>
        <img src={Image3} alt='sushi' className='h-full rounded
           mb-20 shadow' />   
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Tempura Udon</h2>
          <p className='mb-2'>Fondo tempura, servido con fideos Udon
          ,vegetales y camarones en pasta tempura.</p> 
          <span>$119</span>  
        </div>  
      </div>
     </> 
    );
};

export default Content
