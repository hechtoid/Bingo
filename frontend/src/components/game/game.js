import React from 'react';
import { withRouter } from 'react-router-dom';

import { getWordList } from '../../util/word_list_api_util';
import shuffle from '../../util/array_shuffle';

import Board from './board';
import './board.css';

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phrases: [],
            free: true,
            repeat: true,
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
                name: this.props.location.list.name,
                _id: this.props.location.list._id
            }) 
        } else if (this.props.match.params.id) { 
            getWordList(this.props.match.params.id)
            .then( res => {
                this.setState({
                    phrases: shuffle(res.data.words),
                    name: res.data.name,
                    _id: res.data._id
                }) 
            } )
            .catch( res => {
                this.setState({
                    phrases: []
                }) 
            })
        } else {
            this.setState({
                phrases: ['Bee', 'Eye', 'En', 'Gee', 'Oh']
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
            phrases = phrases.concat(shuffle(this.state.phrases))
        }
        return phrases
    }
render() {
    let phrases = this.phraseLister()
    let linkList = {pathname: `/wordlists/${this.state._id}/${encodeURIComponent(this.state.name)}`, list: {words: this.state.phrases, name: this.state.name, _id: this.state._id}} 
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
                link={linkList}
                key={this.state.key}
            />
        </div>
    )
}
}

export default withRouter(Game)