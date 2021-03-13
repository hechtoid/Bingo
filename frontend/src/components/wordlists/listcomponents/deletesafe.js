import React from 'react';
import { useState } from 'react';

const DeleteSafe = props => {
    const [toggleState, toggleToggleState] = useState(false)

return (
    <div className="delete" onClick={()=>toggleToggleState(!toggleState)}>

        <div className={toggleState?"confirm":"zero"} onClick={props.delete}>CONFIRM</div>
        <div className={toggleState?"zero":"question"}>DELETE&nbsp;LIST</div>
        <div className={toggleState?"cancel":"zero"} onClick={()=>toggleToggleState(!toggleState)}>CANCEL</div>
    </div>
)    
}

export default DeleteSafe;