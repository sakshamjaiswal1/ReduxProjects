import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
<Route path='/' exact component={ProductListing}  />
<Route path='/product/:productId' exact component={ProductDetails}  />
<Route>
  404 Not Found
</Route>
</Switch>
      </Router>
   
    </div>
  );
}

export default App;
