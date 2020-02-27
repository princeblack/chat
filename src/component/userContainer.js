import React from 'react';

class UserContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myChat: true
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleClik = this.handleClik.bind(this);
    }
    handleClik(){
            this.setState({myChat: false}) 
    }
    handleUserInput(){
            this.setState({myChat: true})
    }
    render(){
        return(
            <label className ="UserSection">
                <button className = { (this.state.myChat ? 'show' : 'hidden')} onClick={ this.handleUserInput}>YOU </button>

                <button className = {(!this.state.myChat ? 'show' : 'hidden')} onClick={this.handleClik}> YOUR IMAGINERY FRIEND </button>
            </label>
        )
    }
}

export default UserContainer;