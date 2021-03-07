import React from 'react';
import { withRouter } from 'react-router-dom';

import { getWordList } from '../../util/word_list_api_util';
import shuffle from '../../util/array_shuffle';

import Board from './board';

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phrases: [],
            free: true,
            repeat: false,
            size: 5,
            key: 1
        }        
    }
    componentDidMount() {
        this.makeList()
    }

    makeList = () => {
        if (this.props.location.list) {
            this.setState({
                phrases: shuffle(this.props.location.list.words),
                name: this.props.location.list.name
            }) 
        } else if (this.props.match.params.id) { 
            getWordList(this.props.match.params.id)
            .then( res => {
                this.setState({
                    phrases: shuffle(res.data.words),
                    name: res.data.name
                }) 
            } )
            .catch( res => {
                this.setState({
                    phrases: []
                }) 
            })
        } else {
            this.setState({
                phrases: ["Boring", "Default", "Words"]
            }) 
        }
        
    }
    shuffleList = () => {
        this.setState({
            phrases: shuffle(this.state.phrases)
        })    
    }
    setFree = () => {
        this.setState({
            free: !this.state.free,
            key: this.state.key + 1
        })
    }
    setRepeat = () => {
        this.setState({
            repeat: !this.state.repeat,
            key: this.state.key + 1
        })
    }
    bigger = () => {
        this.setState({
            size: this.state.size + 1,
            key: this.state.key + 1

        })
    }
    smaller = () => {
        if (this.state.size > 2) {
        this.setState({
            size: this.state.size - 1,
            key: this.state.key + 1
        })}
    }
    phraseLister = () => {
        let phrases = this.state.phrases
        while (this.state.repeat && phrases.length > 0 && phrases.length <= this.state.size**2) {
            phrases = phrases.concat(this.state.phrases)
        }
        return phrases
    }
render() {
    let phrases = this.phraseLister()
    return (
        <div className="games">
            <Board 
                name={this.state.name}
                list={phrases} 
                shuffleList={this.shuffleList}
                free={this.state.free} 
                setFree={this.setFree}
                repeat={this.state.repeat}
                setRepeat={this.setRepeat}
                size={this.state.size} 
                bigger={this.bigger}
                smaller={this.smaller}
                key={this.state.key}
            />
        </div>
    )
}




}



export default withRouter(Game)