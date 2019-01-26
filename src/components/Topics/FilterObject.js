import React, { Component } from 'react';

class FilterObject extends Component{

    constructor(){
        super();

        this.state = {
            unFilteredArray: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: '',
            filteredArray:[],
        }
    }
    
    render(){
        console.log(<div/>)
        return(
            <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray, null, 1)}</span>
            <input className='inputLine' onChange={event => this.handleInputChange(event.target.value)}/>
            <button className='confirmationButton' onClick={() => this.filterArray(this.state.userInput)}>filter</button>
            <span className='resultsBox filterObjectPB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 1)}</span>
            </div>
        )
    }


handleInputChange(value){
    this.setState({userInput: value});
}

filterArray(userInput){
    
    let {unFilteredArray} = this.state;
    let filteredArray = [];

    for(let index = 0; index < unFilteredArray.length; index++){
        const obj = unFilteredArray[index];
        if (obj.hasOwnProperty(userInput)){
            filteredArray.push(unFilteredArray[index]);
        }
    }


    this.setState({
        filteredArray,

    });
}
}


export default FilterObject;