import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './catalog.css';
import ModalForm  from '../firstPage/modalWithForm';




export default class Catalog extends Component {



    render () {
        return (
            <section className="catalog container-xl">
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center"> 
                        <div className="decorationSlider">
                            <div className="first"></div>
                            <div className="second"></div>
                        </div>
                        <div className="ml-5">
                            <h3 className="text-uppercase">Каталог продукции</h3>
                        </div>
                    </div>  
                    <div>
                        <ModalForm buttonLabel='Получить каталог' about='ПАМ ПАМ'/>
                    </div>
                </div>
            

                        <div className="d-flex justify-content-between mt-5">
                            <div className="product firstProduct">
                                <div className="productInfo text-light"><p>Статичные светодиодные приборы</p></div>
                            </div>
                            <div className="product secondProduct">
                                <div className="productInfo text-light"><p>Контроллеры</p></div>
                            </div>
                            <div className="product thirdProduct">
                                <div className="productInfo text-light"><p>Аксессуары</p></div>
                            </div> 
                        </div>                    
            </section>
        )
    }
}