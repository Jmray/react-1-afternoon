import React, { Component } from 'react';

class Palindrome extends Component{

    constructor(){
        super();

        this.state = {
            userInput: '',
            palindrome: '',

        }
    }
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
            <h4>Palindrome</h4>
            <input className='inputLine' value={this.state.userInput} onChange={(event) => this.handleChange(event.target.value)}/>
            <button className='confirmationButton' onClick={() => this.isPalindrome(this.state.userInput)}>Palindrome?</button>
            <span className='resultsBox'>{this.state.palindrome}</span>

            </div>
        )
    }
    handleChange(value){
        this.setState({
            userInput: value,
        })
    }
    isPalindrome(userInput){
        let forward = this.state.userInput;
        let backward = this.state.userInput;
        
        backward = backward.split('');
        backward = backward.reverse();
        backward = backward.join('')
        
        if(backward === forward){
            this.setState({palindrome: 'true'});
        }
        else{this.setState({palindrome:'false'})}
        
        this.setState({
            userInput: '',
        })

    }
}

export default Palindrome;