import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './firstPage.css';
import ModalForm from './modalWithForm';

export default class FirstPage extends Component {
    render () {
        return (
<section className="firstPage">
                <section className="navigationFirstPage"> 
                    <div className="logo"></div>
                    <div className="container-xl py-2"> 
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link text-light active" href="#">О компании</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Портфолио</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Каталог</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Сервис</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Контакты</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="container-xl d-flex justify-content-start headerInformation">
                    <section className="decoration">
                    </section>

                    <section className="headerContent">
                            <h1 className="text-light text-left">Светотехническое оборудование в Петербурге</h1>
                            <p className="text-light text-left">Продажа, аренда светотехнического оборудования. Оформление официальных мероприятий под ключ.</p>    
                            <ModalForm buttonLabel='ПОДРОБНЕЕ' about='ПАМ ПАМ'/>
                    </section>
                </div>
</section>
        )
    }
}
