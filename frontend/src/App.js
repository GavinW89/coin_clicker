import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from "./views/Main.js"
import Shop from "./views/Shop.js"

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
