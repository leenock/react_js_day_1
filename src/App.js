import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Hello2 from './components/Hello2'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionalClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Message /> */}
      {/* <Counter />*/}
       {/* <Greet name = "clark" heroName="SuperMan" />
       <p>This is children props</p><Greet />
       <Greet  name = "Bruse" heroName="BatMan" />
       <button>Action</button>
       <Greet name = "diana" heroName="CatWoman" />
       <Welcome name = "clark" heroName="SuperMan" />
       <Welcome name = "Bruse" heroName="Batman" />
       <Welcome name = "diana" heroName="CatWoman" /> */}
      {/*<Greet name = "Enoch" heroName="Superman" />
      <Welcome name = "Bruse" heroName="Batman" />*/}

    </div>
  );
}

export default App;

 // jsx 

 // https://www.youtube.com/watch?v=uirRaVjRsf4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=11

 // https://www.cometchat.com/tutorials

 
