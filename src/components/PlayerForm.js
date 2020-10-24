import React from 'react'

export default function BoardForm({ setPlayers }) {
    return (
        <div>
            <form className="board-setter">
                <label>Player 1:</label>
                <input
                    type="string"
                    name="player1"

                />
                <label>Player 2:</label>
                <input
                    type="string"
                    name="player2"

                />
                <input type="submit"/>

            </form>
        </div>
    )
}
