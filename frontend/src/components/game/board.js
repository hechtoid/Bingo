import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const rows = (gameBoard, size) => {
    let win
    for (let idxV = 0; idxV < size; idxV++) {
        let win = true
        for (let idxH = 0; idxH < size; idxH++) {
            if (gameBoard[idxV][idxH] === false ) {
                win = false
            }
        } 
        if (win) { return win }
    }
    // return win
// }
// const columns = (gameBoard, size) => {
    // let win
    for (let idxH = 0; idxH < size; idxH++) {
        let win = true
        for (let idxV = 0; idxV < size; idxV++) {
            if (gameBoard[idxV][idxH] === false ) {
                win = false
            }
        } 
        if (win) { return win }
    }
    return win
}
const diagonalA = (gameBoard, size) => {
    let win = true
    for (let i = 0; i < size; i++) {
            if (gameBoard[i][i] === false ) {
                win = false
            }
    }
    return win
}
const diagonalB = (gameBoard, size) => {
    let win = true
    for (let i = 0; i < size; i++) {
            if (gameBoard[i][(size-1-i)] === false ) {
                win = false
            }
    }
    return win
}
const winCheck = (gameBoard, size) => {
    return (rows(gameBoard, size) 
        // || columns(gameBoard, size) 
        || diagonalA(gameBoard, size) 
        || diagonalB(gameBoard, size))
}
const blackoutCheck = (gameBoard, size) => {
    let win = true
    for (let idxV = 0; idxV < size; idxV++) {
        for (let idxH = 0; idxH < size; idxH++) {
            if (gameBoard[idxV][idxH] === false ) {
                win = false
            }
        } 
    }
    return win
}

function Board(props) {
    const initialGameBoard = Array.from(Array(props.size), () => Array.from(Array(props.size), () => false))
    const [gameBoard, setGameBoard] = useState(initialGameBoard)
    useEffect(() => free(), [props.free])    
    const midForFree = props.free && props.size % 2 === 1 ? Math.floor(props.size / 2) : false
    const free = () => {
        if (midForFree) {
            let newBoard = gameBoard.slice()
            newBoard[midForFree][midForFree] = true
            setGameBoard(newBoard)
        }
    }
    const clear = () => {
        if (midForFree) {
            initialGameBoard[midForFree][midForFree] = true
        }
        setGameBoard(initialGameBoard)
    }
    const shuffleThis = () => {
        clear();
        props.shuffleList()
    }
    const toggleGameBoardSquare = (idxV, idxH) => {
        let newBoard = gameBoard.slice()
        newBoard[idxV][idxH] = !newBoard[idxV][idxH]
        setGameBoard(newBoard)
    }
    const blackout = blackoutCheck(gameBoard, props.size)
    const win = winCheck(gameBoard, props.size)
    useEffect(() => {document.title = `Playing Board: ${props.name} ${props.size}x${props.size} - Internet Bingo`}, [props.name, props.size])
    let list = props.list.slice()

    
return (
    <div className="game"> 
        <div>
            { win 
            ? <div className="win">BINGO</div>
            : <div className="play">BINGO</div>
            }
            { blackout 
            ? <div className="win">BLACKOUT</div>
            : <div className="play">BLACKOUT</div>
            }
        </div> 
        <div>
            <div className="thead">
                { props._id ? 
                    <Link to={ {pathname: `/wordlists/${props._id}`, list: {words: props.list, name: props.name, _id: props._id}} }>
                        <button title="Edit List">
                            <div>
                                <span className="pencil" title="Edit List" aria-label="Edit List" role="img">
                                    ✏️
                                </span>
                            </div>
                        </button>
                    </Link>
                    : "" }
                <div>
                    {props.name}
                </div>   
                <div>
                </div>   
            </div>
            <table className={ blackout ? "blackout" : "" }>
                <tbody>
                { gameBoard.map( (row, idxV) => {
                    return (
                        <tr key={idxV}>
                            { row.map( (square, idxH) => {
                                if ( midForFree
                                    && idxV === midForFree
                                    && idxH === midForFree ) 
                                    { return (
                                        <td className={ win ? ["winner", "free-spot"].join(' ') : "free-spot" } key={idxH}>
                                            <div>
                                                FREE
                                            </div>
                                        </td>
                                    )    
                                } else {
                                    return (
                                        <td 
                                            key={idxH}
                                            className={ square
                                                        ? win 
                                                            ? "winner"
                                                            : "clicked"
                                                        : "unclicked" }
                                            onClick={() => toggleGameBoardSquare(idxV, idxH)}
                                        > 
                                        <div>
                                            {list.pop()}
                                        </div>
                                        </td>
                                    )
                                }
                            }) }
                        </tr>
                    )
                }) }
                </tbody>
            </table>
        </div>
        <div>
            <button onClick={clear}>CLEAR</button>
            <button onClick={shuffleThis}>CLEAR & SHUFFLE</button>
            <button onClick={props.smaller} disabled={props.size<=2}>smaller</button>
            <button onClick={props.bigger}>BIGGER</button>
            <label className={ props.size % 2 === 0 ? "disabled" : "" }>
                <input 
                    type="checkbox" 
                    onChange={props.setFree} 
                    checked={midForFree} 
                    disabled={props.size % 2 === 0}
                /> 
                Free Square
            </label>
            <label>
                <input 
                    type="checkbox" 
                    onChange={props.setRepeat} 
                    checked={props.repeat} 
                /> 
                Repeat Phrases
            </label>
        </div>
    </div>
    )
}

export default Board;