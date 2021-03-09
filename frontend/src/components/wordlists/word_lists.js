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
                <div className="new">
                    <Link to="/wordlists/new">
                        <div>
                        <div className="title">
                            Compose New Phrase List 
                        </div>
                        <button title="New List">
                            <div>
                                <span className="pencil" title="New List" aria-label="New List" role="img">
                                    ✏️
                                </span>
                            </div>
                        </button>   
                        </div>
                        <div>
                            Make a New Phrase List to share with your Friends!                 
                        </div>
                    </Link>
                    <div>
                        or Click a Green Title to Start a Game!
                    </div>
                </div>
                {props.lists.map( (list,idx) => {
                    return(
                        <ul key={idx}>
                            <div className="title" title="Play Game">
                                <div>
                                    <Link to={{ pathname: `/game/${list._id}/${list.name}`, list }}>
                                        {list.name}
                                    </Link>   
                                </div>

                                <div>
                                    <Link to={{ pathname: `/wordlists/${list._id}/${list.name}`, list }}>
                                        <button title="Edit List">
                                            <div>
                                            <span className="pencil" title="Edit List" aria-label="Edit List" role="img">
                                                ✏️
                                            </span>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                {list.words.map( (phrase,idx) => <Phrase phrase={phrase} key={idx} /> )}
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