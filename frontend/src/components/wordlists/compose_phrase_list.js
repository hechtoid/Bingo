import React from 'react';
import { withRouter } from 'react-router-dom';

import Phrase from './phrase'

import { getWordList } from '../../util/word_list_api_util';

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
        name: `${this.props.currentUser.handle}'s New Phrase List ${new Date().toLocaleDateString()}`,
        unlisted: false,
        words: []      
      }) )
    } else {
      this.setState({
        name: `${this.props.currentUser.handle}'s New Phrase List ${new Date().toLocaleDateString()}`,
        unlisted: false,
        words: []      
      })
    }
  }


  saveWordList(e) {
    e.preventDefault()
    if (this.state.words.length >= 3){
      this.props.saveWordList(this.state);
      this.props.history.push('/wordlists')
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    if (e.currentTarget.firstChild.value.length>0){
      this.setState({
        words: [...this.state.words, e.currentTarget.firstChild.value]
      })
      e.currentTarget.firstChild.value = ''
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
    return (
      <div className="new-wordlist">
      <div>
        <div className="title">
          <input 
            type="text" 
            value={this.state.name} 
            onChange={this.updateName()} 
            onFocus={this.selectID}>
          </input>
        </div>
        <div>
            <span>
              {this.state.words.length} 
            </span>
            phrases
            <label>
             &nbsp;/ UnListed
            <input type="checkbox" onChange={this.updateListed()} checked={this.state.unlisted} />
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
          <input type="text" placeholder="Add Phrase"></input>
          <input type="submit" value="Add to List" />
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
