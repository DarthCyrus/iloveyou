import './App.css'
import {Routes,Route,Link,} from "react-router-dom"
import Homepage from './pages/Homepage'
import Testpage from './pages/Testpage';
import Navbar from './components/Navbar';
function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/testpage" element={<Testpage />} />
      </Routes>
    </>
  );
}

export default App
