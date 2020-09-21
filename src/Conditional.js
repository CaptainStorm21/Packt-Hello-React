import React, { Component } from 'react'

export default class Conditional extends Component {
    constructor(props) {
        super(props);
        this.state = {
         showSecret: false
     };
       }
     
       secretMessage() {
        if (!this.state.showSecret) { return; }
        return (
        <div className="secret-message">
          I am the secret message!
        </div>
        )
    
      }
       toggleSecretMessage() {
        this.setState({
          showSecret: !this.state.showSecret
        });
      }

       render() {
        return (
         <div className="secret blocks">
          <button  className = "button-style" onClick={this.toggleSecretMessage.bind(this)}>
              Click to show the secret message!
          </button>
          { this.secretMessage() }
        </div>
       );
      }
    }