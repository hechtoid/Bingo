import React from 'react';
import { Link } from 'react-router-dom';
import './word_list.css'

class WordLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wordlists: []
        }
        document.title = `${this.props.currentUser.handle}'s WordLists - Internet Bingo`
       
    }
    componentDidMount() {
        this.props.fetchUserWordLists(this.props.currentUser.id)
    }

    render() {
        return (
            <div className="wordlists">
                <Link to="/wordlists/new">
                    <div>
                        New WordList
                    </div>
                </Link>
                {this.props.lists.map( (list,idx) => {
                    return(
                        <ol key={idx}>
                            #{idx+1}
                            {list.words.map( (word,idx) => <li key={idx}>{word}</li> )}
                        </ol>
                    )
                })}
            </div>
        )
    }
}

export default WordLists;