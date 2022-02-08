import React from 'react';
import data from '../json/data.json';
import AOS from "aos";
import "aos/dist/aos.css";

function lowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

class Crew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            data: data.crew
        };
    }
    
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
            // initialise with other settings
            duration : 2000,
            disable: function() {
                        var maxWidth = 800;
                        return window.innerWidth < maxWidth;
                    }
        });
    };

    render() {
        return (
            <section className='crew'>
                <h5 className='text-white'><b className='me-4'>02</b>MEET YOUR CREW</h5>
                <div className='crew__content'>
                    <div className="tab-content text-white" id="crew-tabContent">
                        <div className='row'>
                            <div className='col-lg-6'></div>
                        </div>
                        {
                            this.state.data.map((d, index) =>
                                <div className={this.state.data[0].id === d.id ? 'tab-pane fade show active' : 'tab-pane fade'} id={lowerCaseFirstLetter(d.name.replace(/ +/g, ""))} role="tabpanel" key={index}>
                                    <div className='row'>
                                        <div className='col-lg-7 order-2 order-sm-0'>
                                            <div className='card' data-aos="fade-right">
                                                <h4>{d.role}</h4>
                                                <h3>{d.name}</h3>
                                                <p className='text-primary'>{d.bio}</p>
                                            </div>
                                        </div>
                                        <div className='col-lg-5'>
                                            <img className='d-block' src={require(`../assets/img/crew/${d.images.png}`)} alt={d.name} data-aos="fade-left" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='row'>
                        <div className='col-lg-7'>
                            <div className="nav nav-pills" id="crew-tab" role="tablist">
                                {
                                    this.state.data.map((d, index) =>
                                        <button className={this.state.data[0].id === d.id ? 'nav-link active' : 'nav-link'} id={`${lowerCaseFirstLetter(d.name.replace(/ +/g, ""))}-tab`} data-bs-toggle="pill" data-bs-target={`#${lowerCaseFirstLetter(d.name.replace(/ +/g, ""))}`} type="button" role="tab" aria-controls={lowerCaseFirstLetter(d.name.replace(/ +/g, ""))} aria-selected={this.state.data[0].id === d.id ? 'true' : 'false'} key={index}></button>
                                    )
                                }
                            </div>
                        </div>
                        <div className='col-lg-5'></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Crew;