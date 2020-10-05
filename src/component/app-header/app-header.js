import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './app-header.css';

export default class AppHeader extends Component {

    render() {
        return (
            <div className="app-header">
                <div className="app-header-conteiner">
                    <nav className="menu">
                        <ul className="list-menu">
                            <li className="item-menu"><a>Главная</a></li> 
                            <li className="item-menu"><a>Фильтер</a></li> 
                            <li className="item-menu"><a>Войти</a></li> 
                            <li className="item-menu"><a>Зарегиристрироваться</a></li> 
                            {/* <li className="item-bars btn"><i class="fa fa-bars"></i></li> */}
                        </ul>
                        
                    </nav>

                    <div className="app-header-order">
                        <Link to={'/shopping-cart-table'}><h3>Your Order</h3></Link>
                        <img src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/>
                    </div>  
                </div>

                <div className="title-logo">
                    <Link to={'/'}><h1>MyPurchase</h1></Link>

                            
                    {/* <div className="button-catalog"><span className="item-bars btn"><i className="fa fa-bars"></i></span>Catalog</div> */}

                    <div className="search-panel">
                        <a className="icon-search" href="#"><i className="fa fa-search"></i></a>
                        <input />
                        <button className="button-search">Search</button>
                    </div>
                </div>
                
            </div>   
        );
    };
};