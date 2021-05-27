import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Contact Us" />
                <section className="contact-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2><span className="dot"></span> Contato</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="contact-info">
                                    <h3>Mais informações</h3>
                                    <p>Have a question? You may find an answer in our FAQs. But you can also contact us.</p>

                                    <ul className="contact-list">
                                        <li><i className="fas fa-map-marker-alt"></i> Location: 2750 Quadra Street Victoria, Canada</li>
                                        <li><i className="fas fa-phone"></i> Ligue: <a href="#">(11) 9 5030-8224</a></li>
                                        <li><i className="far fa-envelope"></i> E-mail: <a href="#">comercial@annafitas.com.br </a></li>
                                        <li><i className="fas fa-business"></i> CNPJ: 30.036.357/0001-90</li>
                                    </ul>

                                    <h3>Horário de funcionamento:</h3>
                                    <ul className="opening-hours">
                                        <li><span>Segunda:</span> 8AM - 6PM</li>
                                        <li><span>Terça:</span> 8AM - 6PM</li>
                                        <li><span>Quarta:</span> 8AM - 6PM</li>
                                        <li><span>Quinta - Sexta:</span> 8AM - 6PM</li>
                                        <li><span>Sábado:</span> Fechado</li>
                                    </ul>

                                    <h3>Siga nós:</h3>
                                    <ul className="social">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                     
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="contact-form">
                                    <h3>Envie uma mensagem</h3>
                                    <p>Ficaremos feliz eem responder qualquer dúvida ou ajudar com qualquer problema.</p>

                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Nome <span>*</span></label>
                                                    <input type="text" name="name" id="name" className="form-control" required={true} data-error="Preencha seu nome" placeholder="Preencha seu nome" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>E-mail <span>*</span></label>
                                                    <input type="email" name="email" id="email" className="form-control" required={true} data-error="Preencha seu e-mail" placeholder="Preencha seu e-mail" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Telefone <span>*</span></label>
                                                    <input type="text" name="phone_number" id="phone_number" className="form-control" required={true} data-error="Preencha seu telefone" placeholder="Preencha seu telefone" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Mensagem <span>*</span></label>
                                                    <textarea name="message" id="message" cols="30" rows="8" required={true} data-error="Digite sua mensagem" className="form-control" placeholder="Digite sua mensagem" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="btn btn-primary">Enviar</button>
                                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;