import React from 'react';

class WordLists extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
      
      }
      document.title = 'Word Lists - Internet Bingo'
  } 

  componentDidMount(){
    this.props.fetchWordLists(this.props.currentUser.id);
  }

  

  handleSubmit(e) {
    e.preventDefault();
    let top = {
      name: this.state.name,
      color: this.state.color,
      hot: this.state.hot,
      formal: this.state.formal,
      wet: this.state.wet,
      athleisure: this.state.athleisure
    };

    this.props.composeTop(top); 
    this.setState({
      name: '', 
      color: "white",
      hot: false,
      formal: false,
      wet: false,
      athleisure: false,
      newPant: ""});
    // window.location.reload();
  }

  updateName() {
    return e => this.setState({
      name: e.currentTarget.value
    });
  }
  updateColor() {
    return e => this.setState({
      color: e.currentTarget.value
    });
  }
  updateHot() {
    return e => this.setState({
      hot: e.currentTarget.checked
    });
  }
  updateFormal() {
    return e => this.setState({
      formal: e.currentTarget.checked
    });
  }
  updateWet() {
    return e => this.setState({
      wet: e.currentTarget.checked
    });
  }
  updateAthleisure() {
    return e => this.setState({
      athleisure: e.currentTarget.checked
    });
  }

  render() {
    return (
      <div className="create-page">
        <div className="create-form">
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              className="clothing-input"
              value={this.state.name}
              onChange={this.updateName()}
              placeholder="item name"
              required
            />
            <select className="color-btn" value={this.state.color} onChange={this.updateColor()}>
              <option value="white">white</option>
              <option value="red">red</option>
              <option value="orange">orange</option>
              <option value="yellow">yellow</option>
              <option value="green">green</option>
              <option value="blue">blue</option>
              <option value="pink">pink</option>
              <option value="violet">violet</option>
              <option value="black">black</option>
            </select>
            <div className="radios">
              <div className="form-left">
              <label>
                  Formal?
                  <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateFormal()}
                    checked={this.state.formal}
                  />
                </label>
                <label>
                  Hot?
                    <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateHot()}
                    checked={this.state.hot}
                  />
                </label>
              </div>
              <div className="form-right">
                <label>
                  Athleisure?
                  <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateAthleisure()}
                    checked={this.state.athleisure}
                  />
                </label>
                <label>
                  Waterproof?
                  <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateWet()}
                    checked={this.state.wet}
                  />
                </label>
              </div>
            </div>
            <input className="add-submit-btn" type="submit" value="Save Item" />
          </form>
        </div>
        <br />
        <div className="garment-container">
          <div className="demo-item-container">
          </div>
          <br/>
          {this.props.tops.map(top => (
            <div className="garment-item" onClick={this.itemModalHandler.bind(this, top, "top")} key={top._id}>
              
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default WordLists;
