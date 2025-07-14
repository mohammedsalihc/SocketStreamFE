import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ChatRoom from './pages/ChatRoom';
import { Toaster } from 'react-hot-toast';
import './index.css'
function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <Router>
    <Routes>
      <Route path='/'element={<Login/>}></Route>
      <Route path='/register'element={<Register/>}></Route>
      <Route path='/home'element={<Home/>}></Route>
      <Route path='/chat/:roomId'element={<ChatRoom/>}></Route>
    </Routes>
   </Router>
    </>
   
  );
}

export default App;
