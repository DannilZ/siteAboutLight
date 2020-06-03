import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './footer.css';

export default class App extends Component {
    render () {
        return (
            <footer className="contact"> 
                    <div className="container-xl">
                        <div className="d-flex justify-content-between py-4">
                            <h6 className="text-light">number</h6>
                            <h6 className="text-light">direction</h6>
                            <h6 className="text-light">email</h6>
                        </div>
                        <div className="contsctDecoration mb-4"></div>
                        
                    <div className="d-flex">    
                        <ul className="nav flex-column mr-5">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">О компании</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Новости</a>
                            </li>
                        </ul>
                        <ul className="nav flex-column mr-5">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Каталог</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Аренда</a>
                            </li>
                        </ul>
                        <ul className="nav flex-column mr-5">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Наши проекты</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Сервисное обслуживание</a>
                            </li>
                        </ul>
                    </div>

                    <div className="contsctDecoration my-4"></div>
                    <div className="text-light pb-4"> Учёбный проект </div>
                    </div>

                </footer>
        )
    }
}