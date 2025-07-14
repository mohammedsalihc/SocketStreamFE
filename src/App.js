import './App.css';

import { Toaster } from 'react-hot-toast';
import './index.css'
import AppRoutes from './routes/AppRoutes';
function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <AppRoutes/>
    </>
   
  );
}

export default App;
