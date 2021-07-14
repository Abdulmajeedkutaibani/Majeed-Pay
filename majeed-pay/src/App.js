import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/Pages/HomePage';
import PricingPage from './components/Pages/PricingPage';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route exact path='/pricing'>
            <PricingPage />
          </Route>
          <Route path='/about' exact>
            <AboutPage />
          </Route>
          <Route path='/contact' exact>
            <ContactPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
