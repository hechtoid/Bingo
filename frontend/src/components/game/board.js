import React from 'react';
import './board.css';


class Board extends React.Component {
    constructor(props) {
        super(props)
        let board = {}
        for (let i = 0; i < this.props.size; i++) {
            for (let j = 0; j < this.props.size; j++) {
                board[i+':'+j] = false               
            } 
        }
        this.state = board
    }
    //make the array for keys  in the props
render() {
    let board = []
    // for (let i = 0; i < this.props.size; i++) {

        
    // }
    
    return (
        <div className="game">

        {Object.keys(this.state).map( key => {
            return (
                <div 
                    className={this.state[key] ?"clicked":"unclicked"}
                    onClick={()=>this.setState({ [key]: !this.state[key] }) }
                    >
                    {key} "Food!"
                </div>
            )
        })}
            <div onClick= {() => this.setState({
                ['5:4']: {phrase:'phrase',clicked: true}
            }) }>
                Foo
        </div>
    </div>
    )
}
}


export default Board;