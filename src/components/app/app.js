import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import FirstPage from '../firstPage';
import Prodject from '../prodject';
import Catalog from '../catalog';
import Rent from '../rent';
import News from '../news'; 
import Footer from '../footer';


export default class App extends Component {
    render () {
        return (
            <>
                <FirstPage/>
                <Prodject/>
                <Catalog/>
                <Rent/> 
                <News/>
                <Footer/>
            </>
        );
    }
}

