import React, { Component } from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }
    render(){
       
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input  className='inputLine' onChange={ (event) => this.handleChange(event.target.value) }></input>

                <button className='confirmationButton' onClick={ () => this.assignEvensAndOdds(this.state.userInput)}>Split</button>
                <span className='resultsBox'>Evens:{this.state.evenArray} </span>
                <span className='resultsBox'>Odds:{this.state.oddArray} </span>

            </div>
        )
    }
    
    handleChange(value){
        this.setState({userInput: value});
    }
    
    assignEvensAndOdds(userInput){
        let evenArray = [];
        let oddArray = [];
        let arr = userInput.split(',')

        arr.forEach(num => {if(num % 2 === 0){evenArray.push(num)}else{oddArray.push(num)}});

        this.setState({
            evenArray,
            oddArray,
        });
}
}
export default EvenAndOdd;