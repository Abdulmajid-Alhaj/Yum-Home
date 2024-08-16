import './App.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import HomePage from './Pages/HomePage/HomePage';
import Verification from './Components/AllComponent/Verificatin/Verification';
import { BrowserRouter, Route , Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/verify" element={<Verification />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
