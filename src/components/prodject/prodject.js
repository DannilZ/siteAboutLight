import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './slider.css';
import { UncontrolledCarousel } from 'reactstrap';
import slide1 from '../img/slide1.png';
import slide2 from '../img/slide2.png';
import ModalForm from '../firstPage/modalWithForm';
    

export default class Prodject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    src: slide1,
                    // altText: 'Slide 1',
                    caption: '',     
                    // header: 'Slide 1',
                    key: '4'
                },    
                {
                    src: slide2,
                    // altText: 'Slide 2',
                    caption: '',     
                    // header: 'Slide 2',
                    key: '5'
                }, 

            ]
        };
    }
	render () {
        return (
            <section className="slider container-xl">
            <div className="d-flex justify-content-between">

                <div className="d-flex align-items-center"> 
                    <div className="decorationSlider">
                        <div className="first"></div> 
                        <div className="second"></div>
                    </div>
                    <div className="ml-5">
                        <h3>ПРОЕКТЫ</h3>
                    </div>
                </div>

                <div>
                    <ModalForm buttonLabel='Узнать больше' about='ПАМ ПАМ' />
                </div>
            </div>

            <div className="slider mt-5"> 
                <UncontrolledCarousel  items={this.state.items} />
            </div>

        </section>
            );
    }
}