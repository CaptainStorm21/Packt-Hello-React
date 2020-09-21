import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.bookTitle ="Last on Mars";
        this.state = { 
            clickCounter: 0,
            numberOfBooks: 10
        };
      }
      renderClickCount() {
        return <p>I've been clicked {this.state.clickCounter} times!</p>;
      }
      render() {
        return (
          <div>
            {this.renderClickCount()}
            <p>Number of books in store: {this.state.numberOfBooks}</p>
            <p> Number 1 seller is {this.bookTitle}</p>
          </div>
        );
      }
    }
