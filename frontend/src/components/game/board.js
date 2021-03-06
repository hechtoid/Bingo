import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './board.css';


class Board extends React.Component {
    constructor(props) {
        super(props)
        this.sizeArray = [...Array(this.props.size).keys()]
        this.keyArray = []
        this.state = this.boardmaker()
        if (this.props.free && this.props.size % 2 === 1) {
            let i = Math.floor(this.props.size / 2 )
            this.freeKey = i+':'+i
        }
        document.title = 'Game Board - Internet Bingo'
    }
    
    boardmaker = () => {
        let board = {}
        for (let i = 0; i < this.props.size; i++) {
            for (let j = 0; j < this.props.size; j++) {
                let key = i+':'+j
                board[key] = false   
                this.keyArray.push(key)            
            } 
        }
        return board
    }
    reset = () => {
        let board = {}
        this.keyArray.map( key => board[key] = false )
        this.setState(board)
    }
    rows = () => {
        let win
        for (let i = 0; i < this.props.size; i++) {
            let win = true
            for (let j = 0; j < this.props.size; j++) {
                if (this.state[i+':'+j] === false ) {
                    win = false
                }
            } 
            if (win) {return win}
        }
        return win
    }
    columns = () => {
        let win
        for (let i = 0; i < this.props.size; i++) {
            let win = true
            for (let j = 0; j < this.props.size; j++) {
                if (this.state[j+':'+i] === false ) {
                    win = false
                }
            } 
            if (win) {return win}
        }
        return win
    }
    diagonalA = () => {
        let win = true
        for (let i = 0; i < this.props.size; i++) {
                if (this.state[i+':'+i] === false ) {
                    win = false
                }
        }
        return win
    }
    diagonalB = () => {
        let win = true
        for (let i = 0; i < this.props.size; i++) {
                if (this.state[i+':'+(this.props.size-1-i)] === false ) {
                    win = false
                }
        }
        return win
    }
    
    win = () => this.rows() || this.columns() || this.diagonalA() || this.diagonalB()
    
    blackout = () => this.keyArray.every( key => this.state[key] )
    
    free = () =>  {if (this.freeKey) {
        if (!this.state[this.freeKey]) this.setState({ [this.freeKey]: true })
    }}

    componentDidMount() { this.free() }
    componentDidUpdate() { this.free() }

render() {
    let list = this.props.list ? this.props.list.slice() : []
    let board = 
        <table><tbody>
            { this.sizeArray.map( i => {
                return (
                    <tr key={i}>
                        { this.sizeArray.map( j => {
                            let key = i+':'+j
                            if (this.freeKey && this.freeKey === key) {
                                return (
                                    <td className="free-spot" key={j}>
                                        <div>
                                            FREE
                                        </div>
                                    </td>
                                )    
                            } else {
                                return (
                                    <td 
                                        key={j}
                                        className={this.state[key]?"clicked":"unclicked"}
                                        onClick={()=>this.setState({ [key]: !this.state[key] }) }
                                    > 
                                    <div>
                                        {list.pop()}
                                    </div>
                                    </td>
                                )
                            }
                        })}
                    </tr>
                )
            }) }
        </tbody></table>

    return (
        <div className="game"> 
            {board}
            <div onClick={this.reset}>RESET</div>
            {this.win()? "BINGO":""}
            <div></div>
            {this.blackout()? "BLACKOUT":""}


    
        </div>
    )
}
}


export default withRouter(Board);