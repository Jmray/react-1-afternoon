import React, { Component } from 'react';

class Sum extends Component{
    constructor(){
        super();

        this.state = {
            numOne: 0,
            numTwo: 0,
            sum: null,
        }
    }
    render(){
        return(
            <div className='puzzleBox sumPB'>
            <h4>Sum</h4>
            <input className='inputLine' type='number' onChange={event => this.handleChangeN1(event.target.value)}/>
            <input className='inputLine' type='number' onChange={event => this.handleChangeN2(event.target.value)}/>
            <button className='confirmationButton' onClick={() => this.sum(this.state.numOne, this.state.numTwo)}>Sum</button>
            <span className='resultsBox'>{this.state.sum}</span>            

            </div>
        )
    }
    handleChangeN1(value){
        this.setState({
            numOne: parseInt(value),
        });
    }
    handleChangeN2(value){
        this.setState({
            numTwo: parseInt(value),
        });
    }
    sum(num1, num2){
        console.log(num1 ,num2)
        let result = num1 + num2;
        this.setState({
            sum: result,
        })
    }
}

export default Sum;