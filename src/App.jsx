import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Topbar from "./topbar/Topbar";
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'

import { BrowserRouter as Router,
Route,
Routes,

 } from "react-router-dom";



function App() {

    const user = true;

  return (
    <div className="app">
     <Router>
        <Topbar />
        <Routes >
	              <Route path="/" element={<><Home /></>}/>
	              <Route path="/login" element={(user ) ? <Home/>:<Login />} />
	              <Route path="/Settings" element={(user ) ? <Settings/>:<Register />} />
                <Route path="/Write" element={(user ) ? <Write/>:<Register />} />
                <Route path="/Register" element={ (user ) ? <Home/>:<Register />} />
                <Route path="/Post:postId" element={<Single />} />
        </Routes>
      </Router>
     

    </div>
   

  );
}

export default App;
