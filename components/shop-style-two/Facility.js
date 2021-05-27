import React, { Component } from 'react';

class Facility extends Component {
    render() {
        return (
            <section className="facility-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <i className="fas fa-plane"></i>
                                </div>
                                <h3>Frete para todo Brasil</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <i className="fas fa-money-check-alt"></i>
                                </div>
                                <h3>100% seguro - site com SSL</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <i className="far fa-credit-card"></i>
                                </div>
                                <h3>Diversas formas de pagamento</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <i className="fas fa-headset"></i>
                                </div>
                                <h3>Suporte onlione 24 horas</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Facility;
