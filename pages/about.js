import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import Testimonials from '../components/Common/Testimonials';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="About Us" />
                <section className="about-area ptb-60">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h2>Sobre nós</h2>
                                    <p>A Anna Fitas Loja online de Materiais para artesanatos foi fundada em 2017, na cidade de São Paulo, bairro de Itaquera, sua principal missão é levar o que há de melhor em moda artesanal a preços justos. Atualmente contamos com 4 funcionários e nossos principais clientes são as (os) artesãs de todo Brasil fazendo belíssimas artes e sempre inovando o mercado da moda. Desde 2017 passamos a vender Materiais online.</p>

                                    <div className="signature mb-0">
                                        <img src={require("../images/signature.png")} alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <img src={require("../images/logo.png")} className="about-img1" alt="image" />

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonials />
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
