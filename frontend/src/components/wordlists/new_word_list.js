import React from 'react';
import './word_list.css'

class NewWordList extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        name: 'My New Word List',
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



  render() {
    return (
      <div className="new-wordlist">
        <div 
            className={
              this.state.words.length>5
              ? "save-button"
              : "save-button-disabled"
              } 
            onClick={this.saveWordList}>
          SAVE
        </div>
        <ol className="wordlist">
          {this.state.words.map( (word,idx) => <li key={idx}>{word}</li>)}
        </ol>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="add new word"></input>
          <input type="submit" value="Add to List" />
        </form>
      </div>
    )
  }
}

export default NewWordList;
