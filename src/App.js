import { request } from './utils/request'

const logRequestData = async (type) => console.log(await request(type))

function App() {
  return (
    <div className="App">
      <button onClick={ () => logRequestData('first') }>First</button>
      <button onClick={ () => logRequestData('second') }>Second</button>
      <button onClick={ () => logRequestData('third') }>Third</button>
    </div>
  );
}

export default App;
