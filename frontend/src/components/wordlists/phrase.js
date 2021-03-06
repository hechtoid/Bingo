import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Phrase = props => {
    return (
        <div className="word">
        <li key={props.idx}>
          <div>
            <CopyToClipboard text={props.phrase}>
            <button>
              <div>
                <span title="Copy Phrase" aria-label="Copy Phrase" role="img"> 
                  📋
                </span>
              </div>
            </button>
            </CopyToClipboard>
            {props.phrase} 
          </div>
          { props.delete ?
            <button onClick={props.delete}>
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