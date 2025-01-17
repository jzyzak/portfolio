import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.tsx';
import Profile from './components/Profile/Profile.tsx';

function App() {
  return (
    <div className="bg-gradient-to-b from-slate-800 to-cyan-600 h-screen">
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
