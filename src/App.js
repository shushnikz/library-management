import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Bookhome from './Books/Bookhome';
import Boorowbook from './Borrow books/Boorowbook';
import Addbook from './Books/Addbook';
import AddborrowBook from './Borrow books/AddborrowBook';
import Viewbook from './Books/Viewbook';
import Viewborrowbook from './Borrow books/Viewborrowbook';
import Editbook from './Books/Editbook';
import Editborrowbook from './Borrow books/Editborrowbook';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/book" element={<Bookhome />} />
        <Route path="/borrow" element={<Boorowbook />} />
        <Route path="/book/add" element={<Addbook />} />
        <Route path="/borrow/add" element={<AddborrowBook />} />
        <Route path="/book/:id" element={<Viewbook />} />
        <Route path="/borrow/:id" element={<Viewborrowbook />} />
        <Route path="/book/edit/:id" element={<Editbook />} />
        <Route path="/borrow/edit/:id" element={<Editborrowbook />} />

      </Routes>
    </div>
  );
}

export default App;
