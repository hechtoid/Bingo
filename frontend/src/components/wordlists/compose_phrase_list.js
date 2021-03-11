import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import Phrase from './phrase'

import { getWordList } from '../../util/word_list_api_util';
import { hotDate } from '../../util/date_util';

import './word_list.css'

class ComposePhraseList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        unlisted: false,
        words: []
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.saveWordList = this.saveWordList.bind(this)
      this.deletePhraseAt = this.deletePhraseAt.bind(this)
  } 
  selectID(e) { e.target.select()}
  
  componentDidMount() {
    this.makeList()
  }
  componentDidUpdate() {
    document.title = `Writing List: ${this.state.name} - Internet Bingo`
  }
  makeList = () => {
    if (this.props.location.list) {
      this.setState(this.props.location.list)
    } 
    else if (this.props.match.params.id) {
      getWordList(this.props.match.params.id)
      .then( res => {
        this.setState(res.data)
      } )
      .catch( this.setState({
        name: `${this.props.currentUser.handle}'s New Phrase List - ${hotDate()}`,
        unlisted: false,
        words: []      
      }) )
    } else {
      this.setState({
        name: `${this.props.currentUser.handle}'s New Phrase List - ${hotDate()}`,
        unlisted: false,
        words: []      
      })
    }
  }


  saveWordList(e) {
    e.preventDefault()
    if (this.state.words.length >= 3) {
      this.props.saveWordList(this.state);
      this.props.history.push('/wordlists')
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    if (e.target[0].value.length>0) {
      this.setState({
        words: [...this.state.words, e.target[0].value]
      })
      e.target[0].value = ''
    }
  }

  deletePhraseAt(idx) {
    return e => {
      let words = this.state.words
      words.splice(idx, 1)
      this.setState({
        words
      })
    }
  }
  updateName() {
    return e => this.setState({
      name: e.currentTarget.value
    });
  }
  updateListed() {
    return e => this.setState({
      unlisted: e.currentTarget.checked
    })
  }

  render() {
    let words = this.state.words.map( (phrase,idx) => <Phrase phrase={phrase} key={idx} delete={this.deletePhraseAt(idx)}/> )
    let gameLink = this.state._id 
                ? { pathname: `/game/${this.state._id}`, list: this.state }
                : { pathname: `/game/new`, list: {words: this.state.words, name: this.state.name, _id: 'new'} }            
    return (
      <div className="new-wordlist">
      <div>
        <div className="title">
          <Link to={gameLink}>
            <button title="Start Game">
              <div>
                <span title="Start Game" aria-label="Start Game" role="img">
                  🎰    
                </span>
              </div>
            </button>
          </Link>
          <input 
            type="text" 
            value={this.state.name} 
            onChange={this.updateName()} 
            onFocus={this.selectID}
            autoFocus
            >
          </input>
          <label>
            <input type="checkbox" onChange={this.updateListed()} checked={this.state.unlisted} />
            UnListed
          </label>
        </div>
        <div 
          className={ this.state.words.length >= 4
            ? "save-button"
            : "save-button-disabled" } 
          onClick={this.saveWordList}
          title="SAVE"
        >
          SAVE
        </div>
        <div 
          className={ this.state.words.length >= 24 
          ? ["hidden", "disclaimer"].join(' ')
          : "disclaimer" }
        >
          Lists need at least 24 phrases to play a standard 5x5 board without repeats. 
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <span>
                {this.state.words.length} 
              </span>
              Phrases
            </div>
            <input type="text" placeholder="Add Phrase"></input>
            <input type="submit" value="Add to List" />
          </div>
        </form>        
        <ul className="wordlist">
          {words}
        </ul>
      </div>
      </div>
    )
  }
}

export default withRouter(ComposePhraseList);
