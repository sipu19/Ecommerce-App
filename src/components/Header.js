import React from "react";
import './Header.scss';
import  AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";


const Header=()=>{
  const { myReducer } = useStateValue();
  const [ data ] = myReducer;
  console.log(data.authInfo)
return(
    <header className="header">
        <div className="header__logo">
        <Link to="/">
          <AddBusinessIcon fontSize="large"/>&nbsp;
          <span className="header__logoName">E-shop</span>
        </Link>
        </div>                    
        <div className="header__search">
          <input/>
        </div>
        <div className="header__nav">
      
          <div className="header__nav__user">
            
          </div>
        
          <div className="header__nav__itemBasket">
          <Link to="/checkout">
          <ShoppingCartIcon fontSize="small"/> {data.cartList.length}  &nbsp;Cart
          </Link>
          </div>                      
        </div>
    </header>
)
}
export default Header;