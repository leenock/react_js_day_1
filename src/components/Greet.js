import react from 'react'


//function Greet(){
 //   return <h1> Good afternoon Enoch</h1>
//}

const Greet = ({name, heroName}) => {
   return (
   <div>
     <h1>
       Hello {name} a.k.a {heroName}
      </h1>
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


// day two - destructure props in functional components