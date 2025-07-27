import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <BrowserRouter>
  <div className="App">
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    <Footer />
  </div>
</BrowserRouter>

  );
}

export default App;
