import React, { Component } from 'react'
import BoardForm from './BoardForm'

export default class BoardContainer extends Component {

    state = {
        rows: 0,
        columns: 0,
        formShown: true,
        boardSet: true,
    }
    boardArr = [];

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name] : value , boardSet: false})
    }

    handleSubmit = event => {
        this.setState({boardSet: true})
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <BoardForm 
                    rows={this.state.rows} 
                    columns={this.state.columns} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                />
                <div className="board">
                    <div className="board-box"></div> 
                </div>
  
            </div>
        )
    }
}
