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
        this.sizeArray = [...Array(this.props.size).keys()]
    }

render() {
    let list = this.props.list.slice()
    let board = 
    <table><tbody>
        { this.sizeArray.map( i => {
            return (
                <tr key={i}>
                    { this.sizeArray.map( j => {
                        let key = i+':'+j
                        return (
                            <td 
                                key={j}
                                className={this.state[key] ?"clicked":"unclicked"}
                                onClick={()=>this.setState({ [key]: !this.state[key] }) }
                            >
                                {list.pop()}
                            </td>)
                    }) }
                </tr>
            )
        }) }
    </tbody></table>
    
    return (
        <div className="game">  
            {board}
        </div>
    )
}
}


export default Board;