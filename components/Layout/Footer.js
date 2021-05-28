    import React, { Component } from 'react';
import Link from "next/link";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="index.html">
                                        <a>
                                            <img src={require("../../images/logo.png")} alt="logo" />
                                        </a>
                                    </Link>
                                </div>

                                <p>A Anna Fitas Loja online de Materiais para artesanatos foi fundada em 2017, na cidade de São Paulo, bairro de Itaquera, sua principal missão é levar o que há de melhor em moda artesanal a preços justos. </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Links</h3>

                                <ul className="quick-links">
                                    <li><a href="#">FAQ's</a></li>
                                    <li><a href="#">Promoçoes</a></li>
                                    <li><a href="#">Contato</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Informações</h3>

                                <ul className="information-links">
                                    <li><a href="#">Sobre nós</a></li>
                                    <li><a href="#">Contato</a></li>
                           
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Anna Fitas</h3>

                                <ul className="footer-contact-info">
                                    <li>Anna Fitas Comercio de Pecas para Artesanatos. </li>
                                        <li><i className="fas fa-phone"></i> Ligue: <a href="#">(11) 9 5030-8224</a></li>
                                        <li><i className="far fa-envelope"></i> E-mail: <a href="#">comercial@annafitas.com.br </a></li>
                                        <li><i className="fas fa-business"></i> CNPJ: 30.036.357/0001-90</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyrite @ 2019 Anna Fitas. All Rights Reserved</p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul className="payment-card">
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src={require("../../images/visa.png")} alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src={require("../../images/mastercard.png")} alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src={require("../../images/mastercard2.png")} alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src={require("../../images/visa2.png")} alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src={require("../../images/expresscard.png")} alt="image" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
