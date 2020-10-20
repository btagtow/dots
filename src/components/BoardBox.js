import React from 'react'

export default function BoardBox({x, y}) {
    return (
        <div>
            <div className="board-box"  onClick={event => console.log(event.target)}></div> 
        </div>
    )
}
