import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darktheme } from './Theme/DarkTheme';
import { Home } from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRoute from './Routers/CustomerRoute';
import { useEffect } from 'react';
import { getUser } from './component/State/Authentication/Action';
import { useDispatch, useSelector } from 'react-redux';
import { findCart } from './component/State/Cart/Action';
import Routers from './Routers/Routers';

function App() {

const dispatch = useDispatch();
const jwt = localStorage.getItem("jwt");
const {auth} = useSelector((store) => store);

useEffect(() => {
  dispatch(getUser(auth.jwt || jwt));
  dispatch(findCart(jwt));
}, [auth.jwt]);

  return (
    <ThemeProvider theme={darktheme}>
      <CssBaseline/>
      <Routers/>
    </ThemeProvider>
  );
}

export default App;
