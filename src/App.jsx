import './App.scss'
import {BrowserRouter} from "react-router-dom";
import Landing from "./components/Landing.jsx";

function App() {

  return (
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
  )
}

export default App
