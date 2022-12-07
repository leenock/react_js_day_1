import react, {Component} from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message: 'welcome visitor'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render(){
        return (
            <div>
              <h1>{this.state.message}</h1>
               <button onClick={() => this.changeMessage()}>Subscribe</button>
             </div>
            )
          
    }
}

export default Message


// class component 

// advantages

//1. maintain their own private data - state
//2. complex ui logic
// 3. provide lifecycle hooks
// 4. stateful/smart/container

// state can be changed within the component 