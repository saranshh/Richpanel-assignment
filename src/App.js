import './App.css';
import { UserAuthContextProvidor } from './context/UserAuthContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Signup from './components/Signup';
import Signin from './components/Signin';
import FbLogin from './components/FbLogin';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <UserAuthContextProvidor>
      <Routes>
        <Route path="/" exact element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/fblogin" element={<FbLogin />} />
        <Route path="/messages" element={<Dashboard />} />
      </Routes>
      </UserAuthContextProvidor>
    </Router>
  );
}

export default App;
