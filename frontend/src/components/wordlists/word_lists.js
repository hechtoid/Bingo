import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';

import Phrase from './phrase'

import './word_list.css'

function WordLists(props) {
    useEffect(() => {
        document.title = 'List of Phrase Lists - Internet Bingo'
        async function fetchData() {
          await props.fetchUserWordLists(props.currentUser.id)
        }
        fetchData();
      }, []);
        return (
            <div className="wordlists">
            <div>
            <Link to="/wordlists/new">
                    <div>
                        Compose New Phrase List
                    </div>
                </Link>
                    {props.lists.map( (list,idx) => {
                        return(
                            <ul key={idx}>
                            <div className="title">
                                <Link to={{ pathname: `/game/${list._id}`, list }}>
                                    <div>{list.name}</div>
                                </Link>   
                                <Link to={{ pathname: `/wordlists/${list._id}`, list }}>
                                    <div><span title="Edit List" aria-label="Edit List" role="img">✏️</span></div>
                                </Link>
                            </div>
                                <div>
                                    {list.words.map( (phrase,idx) => <Phrase phrase={phrase} idx={idx} key={idx} /> )}
                                </div>
                                <div className="delete" onClick={()=>props.removeWordList(list._id)}>DELETE LIST</div>
                            </ul>
                        )
                    })}

            </div>
            </div>
        )
    
}

export default WordLists;