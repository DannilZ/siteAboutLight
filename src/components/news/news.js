import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './news.css';

export default class App extends Component {
    render() {
        return (
            <section className="news container-xl">
            <div className="d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center"> 
                    <div className="decorationSlider">
                        <div className="first"></div>
                        <div className="second"></div>
                    </div>
                    <div className="ml-5">
                        <h3 className="text-uppercase">новости</h3>
                    </div>
                </div>

                <div>
                    <button className="btn btn-primary btn-lg text-uppercase">Все новости</button>
                </div>
            </div>

            <div className="d-flex mt-5">
                <div className="newsBlock blockOne"></div> 
                <div className="newsBlock">
                    <h6>Семинар Milos</h6>
                    <p>Наши сотрудники прошли последний семинар от компании Milos. 
                        Они получили новый объем знаний, который позволит нашей 
                        компании заниматься оборудованием не только мероприятий, 
                        но производственных помещений.</p>
                    <button className="btn text-primary">Читать далее</button>
                </div>
                <div className="newsBlock">
                    <h6>Выставка Prolight+Sound NAMM Russia 2016</h6>
                    <p>30 контрактов, тысячи восторженных посетителей.</p>
                    <div className="imgNewsBlock"></div>
                </div>
                <div className="newsBlock">
                    <h6>Семинар <br></br> Robe</h6>   
                    <p>30 января 2017 года наши сотрудники побывали в Берлине.</p>
                    <div className="imgNewsBlock"></div>
                </div>
            </div>
        </section>

        )
    }
}