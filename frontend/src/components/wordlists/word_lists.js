import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';

import Word from './word'

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
                
                <div className="wordlists-panel">
                    {props.lists.map( (list,idx) => {
                        return(
                            <ol key={idx}>
                                <Link to={`/wordlists/${list._id}`}>
                                    <h3>{list.name}</h3>
                                </Link>
                                <div>
                                {list.words.map( (word,idx) => <Word word={word} idx={idx} /> )}
                                </div>
                                <div className="delete" onClick={()=>props.removeWordList(list._id)}>DELETE LIST</div>
                            </ol>
                        )
                    })}
                </div>
                <Link to="/wordlists/new">
                    <div>
                        Compose New Phrase List
                    </div>
                </Link>
            </div>
        )
    
}

export default WordLists;