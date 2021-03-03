import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './word_list.css'

function WordLists(props) {
    useEffect(() => {
        async function fetchData() {
          await props.fetchUserWordLists(props.currentUser.id)
        }
        fetchData();
      }, []);
        return (
            <div className="wordlists">
                <Link to="/wordlists/new">
                    <div>
                        New WordList
                    </div>
                </Link>
                {props.lists.map( (list,idx) => {
                    return(
                        <ol key={idx} onClick={()=>props.removeWordList(list._id)}>
                            #{idx+1}
                            {list.words.map( (word,idx) => <li key={idx}>{word}</li> )}
                        </ol>
                    )
                })}
            </div>
        )
    
}

export default WordLists;