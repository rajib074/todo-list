import './App.css';
import Footer from './Component/Footer/Footer';
import { Routes, Route,} from "react-router-dom";
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import ToDo from './Component/To-Do/ToDo';
import Completed from './Component/Completed/Completed';
import Calendar from './Component/Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <Navbar />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<ToDo />} />
        <Route path="completed" element={<Completed />} />
        <Route path="calender" element={<Calendar />} />
      </Routes>
    
      <Footer />
     
    </div>
  );
}

export default App;
