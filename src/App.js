import './App.css';
import { HeaderLogin } from './Components/Header/Header';
import Home from './Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Package from './Pages/Package';
import MyOrders from './Components/MyOrders/MyOrders';
import AllOrders from './Components/AllOrders/AllOrders';
import AddNewPackage from './Components/AddNewPackage/AddNewPackage';
import AddPackage from './Pages/AddPackage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>

          <Switch>

            <Route exact path="/" >
              <Home></Home>
            </Route>
            <Route exact path="/package" >
              <Package></Package>
            </Route>
            <Route path="/login" >
              <HeaderLogin></HeaderLogin>
            </Route>
            <PrivateRoute path="/my-orders" >
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path="/all-orders" >
              <AllOrders></AllOrders>
            </Route>
            <Route path="/add-package" >
              <AddPackage></AddPackage>
            </Route>

          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
