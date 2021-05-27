import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Login" />
                <section className="login-area ptb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-content">
                                    <div className="section-title">
                                        <h2><span className="dot"></span> Entrar</h2>
                                    </div>

                                    <form className="login-form">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Enter your name" id="name" name="name" />
                                        </div>

                                        <div className="form-group">
                                            <label>Senha</label>
                                            <input type="password" className="form-control" placeholder="Enter your password" id="password" name="password" />
                                        </div>

                                        <button type="submit" className="btn btn-primary">Entrar</button>
                                        
                                        <Link href="#">
                                            <a className="forgot-password">Esqueceu a senha?</a>
                                        </Link>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="new-customer-content">
                                    <div className="section-title">
                                        <h2><span className="dot"></span> Novo cadastro</h2>
                                    </div>

                                    <span>Crie uma conta</span>
                                    <p>Cadastre-se para uma conta gratuita em nossa loja. O registro é rápido e fácil. Ele permite que você faça pedidos em nossa loja. Para começar a comprar, clique em registrar.</p>
                                    <Link href="/signup">
                                        <a className="btn btn-light">Crie uma conta</a>
                                    </Link>
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
