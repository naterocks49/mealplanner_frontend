import './App.css';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <LoginPage/>
      <div style={{height:"5000px"}}>as</div>
    </div>
  );
}

export default App;
