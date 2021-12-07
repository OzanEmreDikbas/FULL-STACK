import './App.css';
import AddEventsClass from './components/addEventClass/AddEventsClass';
import AddEvents from './components/addEvents/AddEvents';
import EventBind from './components/eventBinding/EventBind';
import MouseEvents from './components/mouseEvents/MouseEvents';

function App() {
  return (
    <div className="App">
      <h1>Events in React Js</h1>
      {/* <AddEvents /> */}
      {/* <AddEventsClass /> */}
      {/* <EventBind /> */}
      <MouseEvents />
    </div>
  );
}

export default App;
