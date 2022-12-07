import react, {Component} from 'react'

class Welcome extends Component {
    render(){
        return <h1>Welcome {this.props.name} a.ka. {this.props.heroName} </h1> 
    }
}

export default Welcome


// class component 

// advantages

//1. maintain their own private data - state
//2. complex ui logic
// 3. provide lifecycle hooks
// 4. stateful/smart/container