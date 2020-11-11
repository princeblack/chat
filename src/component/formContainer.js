import React from "react";

class FormContainer extends React.Component {
  state = {
    value: "",
    myChat: true
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value.length > 0 ) {
      this.props.message(this.state);
    this.setState({ value: "" });
    const messageContainer = document.querySelector('.Chat-container');
  // messageContainer.scrollTop= messageContainer.scrollHeight 
  // messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
  // console.log(messageContainer.scrollTop);
  // console.log(messageContainer.scrollHeight);
    }
    
  };
  handleClik = () => {
    this.setState({ myChat: false });
  };
  handleUserInput = ()=> {
    this.setState({ myChat: true });
  }
  render() {
    return (
      <div>
        <form className="UserForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            className="UserInput"
            placeholder="write something Special"
            onChange={this.handleChange}
          ></input>
          <button type="submit" className="SubmitButton">
            SEND
          </button>
        </form>
        
        <label className="UserSection">
          <button
            className={this.state.myChat ? "show" : "hidden"}
            onClick={this.handleUserInput}
          >
            YOU{" "}
          </button>

          <button
            className={!this.state.myChat ? "show" : "hidden"}
            onClick={this.handleClik}
          >
            {" "}
            YOUR IMAGINERY FRIEND{" "}
          </button>
        </label>
      </div>
    );
  }
}
export default FormContainer;
