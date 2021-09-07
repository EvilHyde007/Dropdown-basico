import React, {useState} from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import data from './data'

function Dropdown () {
    const[isActive, setIsActive] = useState(false);
    const[state, setState]= useState('click me')   
   
    return (      
        <div className="dropdown">
            <div className="dropdown-btn" onClick={()=> setIsActive (!isActive)}>
               {state}
                <span > <AiFillCaretDown /> </span>
            </div>           
               {isActive && (
               <div className="dropdown-content"> 
               {
                   data.map((option)=> {
                       const{id,text,value}= option;
                       return(
                           <> 
                            <div key={id} alt={text}
                            className="dropdown-item" 
                            onClick={()=> {setState(value); setIsActive (!isActive)}}                            
                            > 
                             {value} 
                           
                            </div>
                           </>                           
                       )
                   })
               }                 
               </div>             
               )}
        </div>
    )
};

export default Dropdown;