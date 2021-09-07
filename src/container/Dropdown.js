import React, {useState} from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

function Dropdown () {
    const[isActive, setIsActive] = useState(false);
    const[state, setStatet]= useState('click me')
    const options = ["test1", "test2", "test3"];
   
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={()=> setIsActive (!isActive)}>
               {state}
                <span > <AiFillCaretDown /> </span>
            </div>
           
               {isActive && (
               <div className="dropdown-content"> 
               {
                   options.map((option)=> {
                       /* const[test1, test2, test3]= option; */
                       return(
                           <> 
                            <div 
                            className="dropdown-item" 
                            onClick={()=> setStatet(option)}
                            > 
                                {option}
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