import React from 'react';
import { useState } from 'react';

const DeleteSafe = props => {
    const [toggleState, toggleToggleState] = useState(false)

return (
    <div className="delete" onClick={()=>toggleToggleState(!toggleState)}>

        <div className={toggleState?"confirm":"zero"} onClick={props.delete}>
            <span>
                CONFIRM
            </span>
        </div>
        <div className={toggleState?"zero":"question"}>
            <span>
                DELETE&nbsp;LIST
            </span>
        </div>
        <div className={toggleState?"cancel":"zero"} onClick={()=>toggleToggleState(!toggleState)}>
            <span>
                CANCEL
            </span>
        </div>
    </div>
)    
}

export default DeleteSafe;