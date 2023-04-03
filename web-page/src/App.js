import Home from "./Components/home/Home";
let data = require('./Data/db.json');

function App() {
  
  return (
    <Home data={data}/>
  );
}

export default App;
