import react, {Component} from 'react'

class Welcome extends Component {
    render(){
        const {name, heroName} = this.props
        const {state1, state2} = this.state // when it comes to states
        return <h1>Welcome {name} a.ka. {heroName} </h1> 
    }
}

export default Welcome


// class component 

// advantages

//1. maintain their own private data - state
//2. complex ui logic
// 3. provide lifecycle hooks
// 4. stateful/smart/container

// day two = destructuring class componets - props - states