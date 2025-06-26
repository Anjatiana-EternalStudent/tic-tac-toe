
import { useState } from "react";

useState
function Squares(props) {
    return <button className="square" onClick={props.onClickSquares}>{props.value}</button>
}
export default function Board() {
    let status;
    const [isNext, setIsNext] = useState(true);
    const [value, setValue] = useState(Array(9).fill(null));
    const winner = calculateWinner(value);
    if(winner) {
        status = "The winner is " + winner;
     }else {
        status= "Next player is " + (isNext?'X':"O");
     }
    
    function calculateWinner(value) {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let i=0;i<lines.length;i++) {
            const [a, b, c] = lines[i];

            if(value[a] && value[a] === value[b] && value[b] === value[c]) {
                return value[a];
            }
        }
        return null;
    }
    function handleClick(i) {
        if(value[i] || calculateWinner(value)) return;
        const nextSquares = value.slice();
        isNext?nextSquares[i] = 'X':nextSquares[i]='O';
        setValue(nextSquares);
        setIsNext(!isNext);
    }
    return (
    <>
        <h1>TIC-TAC-TOE</h1>
        <h2>{status}</h2>
        <div className="boardRow">
            <Squares value={value[0]} onClickSquares={()=>handleClick(0)}/>
            <Squares value={value[1]} onClickSquares={()=>handleClick(1)}/>
            <Squares value={value[2]} onClickSquares={()=>handleClick(2)}/>
        </div>
        <div className="boardRow">
            <Squares value={value[3]} onClickSquares={()=>handleClick(3)}/>
            <Squares value={value[4]} onClickSquares={()=>handleClick(4)}/>
            <Squares value={value[5]} onClickSquares={()=>handleClick(5)}/>
        </div>
        <div className="boardRow">
            <Squares value={value[6]} onClickSquares={()=>handleClick(6)}/>
            <Squares value={value[7]} onClickSquares={()=>handleClick(7)}/>
            <Squares value={value[8]} onClickSquares={()=>handleClick(8)}/>
        </div>
        <div>
            <button className="btn" onClick={()=>setValue(Array(9).fill(null))}>New game</button>
        </div>
    </>
);
}