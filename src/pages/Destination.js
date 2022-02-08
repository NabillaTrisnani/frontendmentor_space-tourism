import React from 'react'
import data from '../json/data.json';
import AOS from "aos";
import "aos/dist/aos.css";

function lowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

class Destination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: data.destinations
        };
    }
    componentDidMount() {
        // init AOS;
        AOS.init({
            // initialise with other settings
            duration : 2000,
            disable: function() {
                        var maxWidth = 800;
                        return window.innerWidth < maxWidth;
                    }
        });
    }
    render() {
        return (
            <section className='destination'>
                <h5 className='text-white'><b className='me-4'>01</b>PICK YOUR DESTINATION</h5>
                <div className='destination__content'>
                    <div className='row'>
                        <div className='col-lg-6'></div>
                        <div className='col-lg-6'>
                            <div className="nav nav-pills" id="destination-tab" role="tablist" aria-orientation="vertical">
                                {
                                    this.state.data.map((d, index) =>
                                        <button className={this.state.data[0].id === d.id ? 'nav-link active' : 'nav-link'} id={`${lowerCaseFirstLetter(d.name.replace(/ +/g, ""))}-tab`} data-bs-toggle="pill" data-bs-target={`#${lowerCaseFirstLetter(d.name.replace(/ +/g, ""))}`} type="button" role="tab" aria-controls={lowerCaseFirstLetter(d.name.replace(/ +/g, ""))} aria-selected={this.state.data[0].id === d.id ? 'true' : 'false'} key={index}>
                                            {d.name.toUpperCase()}
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="tab-content text-white" id="destination-tabContent">
                        <div className='row'>
                            <div className='col-lg-6'></div>
                        </div>
                        {
                            this.state.data.map((d, index) =>
                                <div className={this.state.data[0].id === d.id ? 'tab-pane fade show active' : 'tab-pane fade'} id={lowerCaseFirstLetter(d.name.replace(/ +/g, ""))} role="tabpanel" key={index}>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <img className='d-block' src={require(`../assets/img/destination/${d.images.png}`)} alt={d.name} data-aos="fade-left" />
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className='card' data-aos="fade-right">
                                                <h2>{d.name}</h2>
                                                <p className='text-primary'>{d.description}</p>
                                                <div className='card-footer'>
                                                    <div className='d-flex'>
                                                        <div className='w-50'>
                                                            <p className='subheading-2 text-uppercase'>AVG. DISTANCE</p>
                                                            <p className='subheading-1 mb-0'>{d.distance}</p>
                                                        </div>
                                                        <div className='w-50'>
                                                            <p className='subheading-2 text-uppercase'>Est. travel time</p>
                                                            <p className='subheading-1 mb-0'>{d.travel}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Destination;