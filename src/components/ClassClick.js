import React, { Component } from 'react'

export class ClassClick extends Component {
    classHandler(){
        console.log('cliked the button')
    } 
  render() {
    return (
      <div>
        <button onClick={this.classHandler}>click me </button>
      </div>
    )
  }
}

export default ClassClick

// rce => class component snippet