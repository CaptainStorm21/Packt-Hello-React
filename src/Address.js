import React, { Component } from 'react'

export default class Address extends Component {
    state = {
        city: "",
        state: "",
        errors: [],
      };
      validateUsernameOnBlur = (event) => {
        console.log("I should validate whatever is in ", event.target.value);
        this.setState();
      };
      displayForm() {
        return (
          <div >
            City: <input type="text" onBlur={this.validateUsernameOnBlur} />
            <br />
            State: <input type="text" onBlur={this.validateUsernameOnBlur} />
            <br />
            <button onClick={this.submitForm}>Submit</button>
          </div>
        );
      }
      submitForm(event) {
        console.log("Submitting the form now...");
        console.log(event);
      }
      render() {
        return (
          <div className = "city-state blocks">
            Create Account
            <hr />
            {this.displayForm()}
          </div>
        );
      }
    }