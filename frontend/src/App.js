// import logo from './logo.svg';
// import './App.css';
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="MESSENGER/login" element={<Login/>}/>
          <Route path="MESSENGER/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;   