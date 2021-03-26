import { request } from './utils/request'

function App() {
  return (
    <div className="App">
      <button onClick={ () => request('first') }>First</button>
      <button onClick={ () => request('second') }>Second</button>
      <button onClick={ () => request('third') }>Third</button>
    </div>
  );
}

export default App;
