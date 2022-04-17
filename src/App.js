import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ServiceList from './Components/ServiceList/ServiceList';


function App() {
  return (
    <>
      <div className="page-wrapper">
        <Header></Header>
        <Routes>
           <Route path="/" element={<Home></Home>}> </Route>
           <Route path="/services" element={<ServiceList></ServiceList>}></Route>
           <Route path="/about" element={<About></About>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
