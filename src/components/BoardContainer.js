import React, { Component } from 'react'
import BoardForm from './BoardForm'
import BoardBox from './BoardBox'

export default class BoardContainer extends Component {

    state = {
        rows: 0,
        columns: 0,
        formShown: true,
        boardSet: true,
        boardArr: [],
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name] : value , boardSet: false})
    }

    handleSubmit = event => {
        this.setState({boardSet: true})
        this.createBoardArr()
        this.drawBoard()
        event.preventDefault()
    }

    createBoardArr = () => {
        const boardArr = []
        for ( let i=0; i<this.state.rows; i++ ){
            let columns = [];
            columns.length = this.state.columns
            boardArr.push(columns)
        }
        this.setState({boardArr: boardArr}) 
    }

    selectBoardSpot = (x, y) => {
        if (x > this.state.rows.length && y > this.state.columns.length){
            return this.setState({
                boardArr: [...this.state.boardArr, (this.state.boardArr[x][y] = <BoardBox />)], 
            })
        }

    }

    drawBoard = () => {
        
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
                {this.drawBoard()}
                <div className="board">
                    <div className="board-box"></div> 
                </div>
  
            </div>
        )
    }
}
