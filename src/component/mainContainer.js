import React from 'react';
// import UserContainer from './userContainer';
import FormContainer from './formContainer';
import ChatContainer from './chatContainer'

class MainContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          messages:[]
      }
    }
    handleAddTodo = xe => {
        const a = 'abcdefghijklmnopqrstuvwxyz'.split('')
        const aRandom = Math.floor(Math.random()*26)        
        const today = new Date()
        const random = Math.random(2020,100000)
        const number = today.getHours() + ':' + a[aRandom] + ':'+ today.getMinutes()+ a[aRandom] + ':' + today.getSeconds() + a[aRandom] + ':'+ random

        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();   
        if (this.state.messages) {
            console.log(this.state.messages);
            
            this.setState({
                messages:[...this.state.messages, { message: xe.value, time: time, button: xe.myChat, id: number}]
            })
        }   
    }
    render(){        
        return (
            <div className="App">
            <header className="App-header">
              <h2 className ='Header-title'>Live chat</h2>
            </header>
            <section className='Section-container'>
              <div className="User-container">
                <div className='Chat-container'>
                <ChatContainer message= {this.state.messages}/>
                </div>
                <FormContainer message={this.handleAddTodo}/>
              </div>
              <div className='Image-container'></div>
            </section>
          </div>
          );
    }
}
export default MainContainer;