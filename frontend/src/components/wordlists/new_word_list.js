import React from 'react';
import './word_list.css'

class NewWordList extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        name: `${props.currentUser.handle}'s New Word List ${new Date().toLocaleDateString()}`,
        unlisted: false,
        words: []      
      }
      document.title = 'New WordList - Internet Bingo'
      this.handleSubmit = this.handleSubmit.bind(this)
      this.saveWordList = this.saveWordList.bind(this)
  } 

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
    return (
      <div className="new-wordlist">
        <input type="text" value={this.state.name} onChange={this.updateName()}></input>
        <div 
            className={
              this.state.words.length>5
              ? "save-button"
              : "save-button-disabled"
              } 
            onClick={this.saveWordList}>
          SAVE
        </div>
        <div className={this.state.words.length>5?"hidden":"disclaimer"}>Lists have a strict minimum of 24 words.</div>
        <ol className="wordlist">
          {this.state.words.map( (word,idx) => <li key={idx}>{word}</li>)}
        </ol>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="add new word"></input>
          <input type="submit" value="Add to List" />
        </form>
        <input type="checkbox" onChange={this.updateListed()} checked={this.state.unlisted} />
      </div>
    )
  }
}

export default NewWordList;
