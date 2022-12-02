import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Views from './Views/Views';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="main">
        <Views />
      </div>
      <Footer />
    </div>
  );
}

export default App;
