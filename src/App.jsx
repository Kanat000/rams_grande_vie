import './App.scss'
import {BrowserRouter} from "react-router-dom";
import Landing from "./components/Landing.jsx";

function App() {

  return (
      <div className={'vie-app-container'}>
          <BrowserRouter>
            <Landing />
          </BrowserRouter>
      </div>
  )
}

export default App
