import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './rent.css';
import { UncontrolledCarousel } from 'reactstrap';


export default class Rent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                items: [
                    {
                        src: 'https://www.takefoto.ru/userfiles/image/Dlya%20Statey/27.11.2012/light/lighting-36.jpg',
                        altText: 'Slide 1',
                        caption: 'Some information',     
                        header: 'Slide 1',
                        key: '1'
                    },
                    {
                        src: 'https://www.takefoto.ru/userfiles/image/Dlya%20Statey/27.11.2012/light/lighting-36.jpg',
                        altText: 'Slide 2',
                        caption: 'Some information',     
                        header: 'Slide 2',
                        key: '2'
                    },
                    {
                        src: 'https://www.takefoto.ru/userfiles/image/Dlya%20Statey/27.11.2012/light/lighting-36.jpg',
                        altText: 'Slide 3',
                        caption: 'Some information',     
                        header: 'Slide 3',
                        key: '3'
                    },
                ]
            };
        }
    render() {
        return (
            <section className="rent container-xl">
                <div className="d-flex align-items-center"> 
                            <div className="decorationSlider"> 
                                <div className="first"></div>
                                <div className="second"></div>
                            </div>
                            <div className="ml-5">
                                <h3 className="text-uppercase">Аренда оборудования</h3>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between mt-5">
                            <div className="text-justify rentText">
                                Мы занимаемся прокатом светового и сценического оборудования ведущих 
                                мировых производителей, таких как Robe, SGM, 
                                StudioDue, ChainMaster, Milos, Universal Effects, 
                                ArtLighting, MobilTech, Lampo, Martin, 
                                Spotlight, Compulite, Eurolite и др.
                            </div>
                            <div className="rentInfo">

                                <div className="aboutEquipment text-danger">
                                    <UncontrolledCarousel  items={this.state.items} />
                                </div>
                            </div>
                        </div> 
                </section>
        )
    }
}