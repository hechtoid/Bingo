import React, {  useEffect } from 'react';
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
                
                <div className="wordlists-panel">
                    {props.lists.map( (list,idx) => {
                        return(
                            <ol key={idx}>
                                <Link to={`/wordlists/${list._id}`}>
                                    <h3>{list.name}</h3>
                                </Link>
                                <div>
                                {list.words.map( (word,idx) => <li key={idx}>#{idx+1}: <div>{word}</div></li> )}
                                </div>
                                <div className="delete" onClick={()=>props.removeWordList(list._id)}>DELETE LIST</div>
                            </ol>
                        )
                    })}
                </div>
                <Link to="/wordlists/new">
                    <div>
                        New WordList
                    </div>
                </Link>
            </div>
        )
    
}

export default WordLists;