import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Phrase from './phrase'

import './word_list.css'

class ComposePhraseList extends React.Component {
  constructor(props) {
      super(props);
      if (this.props.location.list) {
        this.state = this.props.location.list
      } else {
        this.state = {
          name: `${props.currentUser.handle}'s New Phrase List ${new Date().toLocaleDateString()}`,
          unlisted: false,
          words: []      
        }
      }
      document.title = 'Compose New Phrase List - Internet Bingo'
      this.handleSubmit = this.handleSubmit.bind(this)
      this.saveWordList = this.saveWordList.bind(this)
      this.deletePhraseAt = this.deletePhraseAt.bind(this)
  } 

  selectID(e) { e.target.select()}
  
  saveWordList(e) {
    e.preventDefault()
    if (this.state.words.length>5){
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
    let words = this.state.words.map( (phrase,idx) => <Phrase phrase={phrase} idx={idx} delete={this.deletePhraseAt(idx)}/> )
    return (
      <div className="new-wordlist">
      <div>
        <input 
          type="text" 
          value={this.state.name} 
          onChange={this.updateName()} 
          onFocus={this.selectID}>
        </input>
        <div 
            className={
              this.state.words.length > 5
              ? "save-button"
              : "save-button-disabled"
            } 
            onClick={this.saveWordList}>
          SAVE
        </div>
        <div className={this.state.words.length>5?"hidden":"disclaimer"}>Lists have a strict minimum of 24 words.</div>
        <ul className="wordlist">
          {words}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="add new word"></input>
          <input type="submit" value="Add to List" />
        </form>
        <label><input type="checkbox" onChange={this.updateListed()} checked={this.state.unlisted} />Private List</label>
      </div>

      <Link to='/wordlists'>
          <div>Back to List of Lists</div>
      </Link>
      </div>
    )
  }
}

export default withRouter(ComposePhraseList);
