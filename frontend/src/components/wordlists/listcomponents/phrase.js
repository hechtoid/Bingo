import React from 'react';
import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const selectID = (e) => { e.target.select()}

const Phrase = props => {
    const [editable, setEditable] = useState(false)
    const inputRef = React.createRef();
    const handleEditToggle = (e) => {
        if (editable) {
            handleSubmit(e)
        } else {
            setEditable(true)             
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputRef.current.value.length>0) {
            props.edit(props.idx, inputRef.current.value)
        }
        setEditable(false)
    }
return (
    <div className="phrase">
        <li>
            <div>
            { props.edit && 
                    <button title="Edit Phrase" onClick={handleEditToggle}>
                        <div>
                            <span className="pencil" title="Edit Phrase" aria-label="Edit Phrase" role="img">
                                ✏️
                            </span>
                        </div>
                    </button> }
                { editable ? <>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            ref={inputRef} 
                            defaultValue={props.phrase} 
                            onFocus={selectID} 
                            autoFocus>
                        </input>
                    </form>
                    <button title="Cancel" onClick={()=>setEditable(false)}>
                        <div>
                            <span title="Cancel" aria-label="Cancel" role="img"> 
                                ❌ 
                            </span>
                        </div>
                    </button>
                </>
                : props.phrase }  
            </div>
            { props.delete && !editable &&
            <button title="Delete Phrase" onClick={props.delete(props.idx)}>
                <div>
                    <span title="Delete Phrase" aria-label="Delete Phrase" role="img"> 
                        🗑️ 
                    </span>
                </div>
            </button> }
        </li>
        <CopyToClipboard text={props.phrase}>
            <div title="Click to Copy"></div>
        </CopyToClipboard>
    </div>
)
}

export default Phrase;