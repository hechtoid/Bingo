import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import shuffle from '../../util/array_shuffle'

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
        if (this.props.free && this.props.size % 2 === 1) {
            let i = Math.floor(this.props.size / 2 )
            this.freeKey = i+':'+i
        }
        this.list = 
            this.props.location.list
            ? shuffle(this.props.location.list.words)
            : ["food", "dood", "pood", "lood", "nood", "rood", "tood", "yood", "zood"]
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
    
    blackout = () => Object.keys(this.state).every( key => this.state[key] )
    
    free = () =>  {if (this.freeKey) {
        if (!this.state[this.freeKey]) this.setState({ [this.freeKey]: true })
    }}

    componentDidMount() { this.free() }
    componentDidUpdate() { this.free() }

render() {
    let list = this.list.slice()
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
                                        FREE
                                    </td>
                                )    
                            } else {
                                return (
                                    <td 
                                        key={j}
                                        className={this.state[key]?"clicked":"unclicked"}
                                        onClick={()=>this.setState({ [key]: !this.state[key] }) }
                                    >
                                        {list.pop()}
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
            {this.win()? "WINRAR":""}
            <div></div>
            {this.blackout()? "BLACKOUT":""}



        </div>
    )
}
}


export default withRouter(Board);