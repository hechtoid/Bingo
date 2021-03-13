import React from 'react';

const Phrase = props => {
    return (
        <div className="phrase">
        <li>
          <div>
          { props.edit ?
            <button title="Edit List" onClick={props.edit(props.idx, 'edit')}>
                            <div>
                                <span className="pencil" title="Edit List" aria-label="Edit List" role="img">
                                    ✏️
                                </span>
                            </div>
                </button>
          : "" }
              {props.phrase} 
          </div>
          { props.delete ?
            <button title="Delete Phrase" onClick={props.delete(props.idx)}>
              <div>
                <span title="Delete Phrase" aria-label="Delete Phrase" role="img"> 
                  🗑️ 
                </span>
              </div>
            </button>
          : "" }
        </li>
        </div>
    )
}

export default Phrase;