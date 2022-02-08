import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
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
    }
    render() {
        return (
            <section className="home">
                <div className="container h-100">
                    <div className="row h-100 align-items-end">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="card">
                                <h5 className="mb-3 mb-md-4 text-primary">SO, YOU WANT TO TRAVEL TO</h5>
                                <h1 className="mb-3 mb-md-4 text-white">SPACE</h1>
                                <p className="text-primary">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <Link to="/destination" className="btn ms-auto">
                                EXPLORE
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;