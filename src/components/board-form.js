import React, { Component } from 'react'

export default class boardForm extends Component {
    state = {
        rows:0,
        columns:0,
    }
    render() {
        // columns = this.state.columns
        return (
            <div>
                <form className = "auth-form login" onSubmit={this.handleSubmit}>
                    <label>Rows:</label>
                    <input
                        type="number"
                        min={0}
                        max={20}
                        value="rows"
                    />
                    <label>Columns:</label>
                    <input
                        type="number"
                        min={0}
                        max={20}
                        value="columns"
                    />
                    {/* <input type="submit" value="login" className="auth-button"/>
                    {this.state.error ? console.log(this.state.error) : null} */}
                </form>
            </div>
        )
    }
}
