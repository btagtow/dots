import React, { Component } from 'react'
import BoardForm from './BoardForm'
import BoardBox from './BoardBox'

export default class BoardContainer extends Component {

    state = {
        columns: 0,
        rows: 0,
        formShown: true,
        boardSet: true,
        boardArr: [],
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name] : value , boardSet: false})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({boardSet: true})
        this.createBoardArr()
        // this.drawBoard()
    }

    createBoardArr = () => {
        const boardArr = [];
        for ( let i=0; i<this.state.columns; i++ ){
            let rows = [];
            rows.length = this.state.rows;
            for ( let y = 0; y<this.state.rows; y++){
                rows[y] = <BoardBox id={y} />
            }
            boardArr.push(rows)
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
        return this.state.boardArr.map(x => {
            return (
                <div className="board-row">
                    {x.map( y => {
                        return(
                            <div className="board-column">{
                                <BoardBox />
                            }</div>
                        )
                    })}
                </div>
            )
        })
    }
    
    render() {
        // this.createBoardArr
        return (
            <div>
                <BoardForm 
                    rows={this.state.rows} 
                    columns={this.state.columns} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                />
                
                <div className="board">
                    {this.drawBoard()}
                    {/* <button onClick={this.drawBoard}></button> */}
                </div>
  
            </div>
        )
    }
}
