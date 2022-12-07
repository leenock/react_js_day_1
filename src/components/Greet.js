import react from 'react'


//function Greet(){
 //   return <h1> Good afternoon Enoch</h1>
//}

const Greet = (props) => {
   console.log(props)
   return (
   <div>
     <h1>
       Hello {props.name} a.k.a {props.heroName}
      </h1>
       {props.children}
   </div>
   )
}

export default Greet


// functional component  

// advantages 

// 1. simple functions - try to use them as much as possible 
// 2. absence of 'this' keyword
// 3. solution without using state
// 4. mainly responsible for the ui
// 5. stateless/ dumb/ presentation
