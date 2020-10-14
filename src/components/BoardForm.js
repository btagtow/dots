import React from 'react'

export default function BoardForm({ handleChange, handleSubmit, rows, columns }) {
    return (
        <div>
            <form className="board-setter" onSubmit={handleSubmit}>
                <label>Rows:</label>
                <input
                    type="number"
                    name="rows"
                    min={0}
                    max={20}
                    value={rows}
                    onChange = {handleChange}

                />
                <label>Columns:</label>
                <input
                    type="number"
                    name="columns"
                    min={0}
                    max={20}
                    value={columns}
                    onChange = {handleChange}
                />
                <input type="submit"/>

            </form>
        </div>
    )
}
