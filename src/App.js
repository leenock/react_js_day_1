import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Hello2 from './components/Hello2'
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message />
       {/* <Greet name = "clark" heroName="SuperMan" />
       <p>This is children props</p><Greet />
       <Greet  name = "Bruse" heroName="BatMan" />
       <button>Action</button>
       <Greet name = "diana" heroName="CatWoman" />
       <Welcome name = "clark" heroName="SuperMan" />
       <Welcome name = "Bruse" heroName="Batman" />
       <Welcome name = "diana" heroName="CatWoman" /> */}
    </div>
  );
}

export default App;

 // jsx 

 // https://www.youtube.com/watch?v=uirRaVjRsf4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=11