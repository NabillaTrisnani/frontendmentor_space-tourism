import React from 'react';
import data from '../json/data.json';
import AOS from "aos";
import "aos/dist/aos.css";

function lowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

class Technology extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: data.technology
        };

        console.log(this.state.data);
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
            <section className="technology">
                <h5 className='text-white'><b className='me-4'>03</b>SPACE LAUNCH 101</h5>
                <div className="technology__content">
                    <div className="nav flex-lg-column nav-pills" id="technology-tab" role="tablist" aria-orientation="vertical">
                        {
                            this.state.data.map((d, index) =>
                                <button className={this.state.data[0].id === d.id ? 'nav-link active' : 'nav-link'} id={`${lowerCaseFirstLetter(d.name.replace(/ +/g, ""))}-tab`} data-bs-toggle="pill" data-bs-target={`#${lowerCaseFirstLetter(d.name.replace(/ +/g, ""))}`} type="button" role="tab" aria-controls={lowerCaseFirstLetter(d.name.replace(/ +/g, ""))} aria-selected={this.state.data[0].id === d.id ? 'true' : 'false'} key={index}>{index + 1}</button>
                            )
                        }
                    </div>
                    <div className="tab-content text-white" id="technology-tabContent">
                        {
                            this.state.data.map((d, index) =>
                                <div className={this.state.data[0].id === d.id ? 'tab-pane fade show active' : 'tab-pane fade'} id={lowerCaseFirstLetter(d.name.replace(/ +/g, ""))} role="tabpanel" key={index}>
                                    <div className='card' data-aos="fade-up">
                                        <p className='card-header p-0 text-primary'>THE TERMINOLOGY…</p>
                                        <h3>{d.name}</h3>
                                        <p className='text-primary'>{d.description}</p>
                                    </div>
                                    <img className='d-none d-lg-block' src={require(`../assets/img/technology/${d.images.portrait}`)} alt={d.name} data-aos="fade-left" />
                                    <img className='d-lg-none' src={require(`../assets/img/technology/${d.images.landscape}`)} alt={d.name} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Technology;