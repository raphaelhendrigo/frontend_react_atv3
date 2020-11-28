import React, { useState } from 'react';
import View from './View';
function Array() {
  
 
   const [frase, setFrase]=useState('');
  
  
  return (
    <div>
	
	<input 
            onChange={(event)=> setFrase(event.target.value)}
           
          />
		  
		   <View array= {frase.length}/>
		   
		  </div>
  );
}
export default Array;