import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Feature from './Components/Feature/Feature';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ServiceList from './Components/ServiceList/ServiceList';

function App() {
  return (
    <>
      <div className="page-wrapper">
        <Header></Header>
        <Banner></Banner>
        <Feature></Feature>
        <About></About>
        <ServiceList></ServiceList>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
