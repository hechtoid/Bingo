import React, { useState, useEffect } from 'react';

function Board(props) {
    const initialGameBoard = Array.from(Array(props.size), () => Array.from(Array(props.size), () => false))
    const [gameBoard, setGameBoard] = useState(initialGameBoard)
    useEffect(() => free(), [props.free])    
    const free = () => {
        if (props.free && props.size % 2 === 1) {
            let newBoard = gameBoard.slice()
            let mid = Math.floor(props.size / 2)
            newBoard[mid][mid] = true
            setGameBoard(newBoard)
        }
    }
    const clear = () => {
        if (props.free && props.size % 2 === 1) {
            let mid = Math.floor(props.size / 2)
            initialGameBoard[mid][mid] = true
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
    const rows = () => {
        let win
        for (let idxV = 0; idxV < props.size; idxV++) {
            let win = true
            for (let idxH = 0; idxH < props.size; idxH++) {
                if (gameBoard[idxV][idxH] === false ) {
                    win = false
                }
            } 
            if (win) { return win }
        }
        return win
    }
    const columns = () => {
        let win
        for (let idxH = 0; idxH < props.size; idxH++) {
            let win = true
            for (let idxV = 0; idxV < props.size; idxV++) {
                if (gameBoard[idxV][idxH] === false ) {
                    win = false
                }
            } 
            if (win) { return win }
        }
        return win
    }
    const diagonalA = () => {
        let win = true
        for (let i = 0; i < props.size; i++) {
                if (gameBoard[i][i] === false ) {
                    win = false
                }
        }
        return win
    }
    const diagonalB = () => {
        let win = true
        for (let i = 0; i < props.size; i++) {
                if (gameBoard[i][(props.size-1-i)] === false ) {
                    win = false
                }
        }
        return win
    }
    const blackout = () => {
        let win = true
        for (let idxV = 0; idxV < props.size; idxV++) {
            for (let idxH = 0; idxH < props.size; idxH++) {
                if (gameBoard[idxV][idxH] === false ) {
                    win = false
                }
            } 
        }
        return win
    }
    const win = () => rows() || columns() || diagonalA() || diagonalB()
    useEffect(() => {document.title = `Playing Board: ${props.name} - Internet Bingo`}, [props.name])
    let list = props.list.slice()
return (
    <div className="game"> 
        <div>
            { win() 
            ? <div className="win">BINGO</div>
            : <div className="play">BINGO</div>
            }
            { blackout() 
            ? <div className="win">BLACKOUT</div>
            : <div className="play">BLACKOUT</div>
            }
        </div> 
        <div>
            <div className="thead">{props.name}</div>
        <table>
            <tbody>
            { gameBoard.map( (row, idxV) => {
                return (
                    <tr key={idxV}>
                        { row.map( (square, idxH) => {
                            if ( props.free 
                                && props.size % 2 === 1
                                && idxV === Math.floor(props.size / 2)
                                && idxH === Math.floor(props.size / 2) ) 
                                { return (
                                    <td className="free-spot" key={idxH}>
                                        <div>
                                            FREE
                                        </div>
                                    </td>
                                )    
                            } else {
                                return (
                                    <td 
                                        key={idxH}
                                        className={square?"clicked":"unclicked"}
                                        onClick={()=>toggleGameBoardSquare(idxV, idxH)}
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
            </tbody>
        </table>
        </div>
        <div>
            <button onClick={clear}>CLEAR</button>
            <button onClick={shuffleThis}>CLEAR & SHUFFLE</button>
            <button onClick={props.smaller} disabled={props.size<=2}>smaller</button>
            <button onClick={props.bigger}>BIGGER</button>
            <label className={ props.size % 2 === 0 ? "disabled":"" }>
                <input 
                    type="checkbox" 
                    onChange={props.setFree} 
                    checked={props.free && props.size % 2 === 1} 
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