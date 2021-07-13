import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import EmailInput from './components/EmailInput';
import TitleAndInfo from './components/TitleAndInfo';
import Feature1 from './components/Features/Feature1';
import Feature2 from './components/Features/Feature2';
import Phone from './components/Phone/PhoneDefault';
import PhoneNotification from './components/Phone/PhoneNotification';
import PhoneApp from './components/Phone/PhoneApp';
import PhoneApp2 from './components/Phone/PhoneApp2';
import BannerInfo from './components/Banner/BannerInfo';
import BannerLogos from './components/Banner/CompanyLogos';
import Banner from './components/Banner/Banner';
import FeaturesGroup from './components/Features/FeaturesGroup';
import ReadyToStart from './components/ReadyToStart';
import Features from './components/Features/Features';
import HomePage from './components/Pages/HomePage';
import FreePlan from './components/Plans/FreePlan';
import BasicPlan from './components/Plans/BasicPlan';
import PremiumPlan from './components/Plans/PremiumPlan';
import Plans from './components/Plans/Plans';
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
