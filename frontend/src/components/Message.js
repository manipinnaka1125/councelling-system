import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello Visitor',
    };
  }

  ChangeMessage() {
    this.setState({ message: 'Thank you For Subscribing ' });
  }

  render() {
    return (
      <div>
        <center>
          <h1>{this.state.message}</h1>
          <button onClick={() => this.ChangeMessage()}>Subscribe</button>
        </center>
      </div>
    );
  }
}

export default Message;
