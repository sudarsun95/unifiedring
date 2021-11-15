import logo from './logo.svg';
import './App.scss';
import LandingPage from './LandingPage/LandingPage';
import RouterLinks from './Router/RouterLinks';
function App() {
  return (
    <RouterLinks>
    <div className="App">
     <LandingPage/>
    </div>
    </RouterLinks>
  );
}

export default App;
