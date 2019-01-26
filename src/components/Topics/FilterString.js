import React, { Component } from 'react';

class FilterString extends Component{
    constructor(){
        super();

        this.state = {
            unFilteredArray: ['hellooooo ', 'mynameistheperson ','randomstringsforthewin ','this is an array of strings'],
            userInput: '',
            filteredArray: [],

        }
    }
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            <span className='puzzleText'>{this.state.unFilteredArray}</span>
            <input className='inputLine' onChange={event => this.handleChange(event.target.value)}/>
            <button className='confirmationButton' onClick={() => this.findContainer(this.state.userInput)}>filter</button>
            <span className='resultBox filterStringRb'>{this.state.filteredArray}</span>
            </div>
        )
    }
    handleChange(value){
        this.setState({
        userInput: value
        });
    }
    findContainer(userInput){
        this.setState({
            filteredArray: [],        });
        let filteredArray = this.state.unFilteredArray.filter(element => element.indexOf(userInput) !== -1);

        this.setState({
            filteredArray,
        })
    }
}


export default FilterString;