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
                                <h3>Faci;idade de compra</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <i className="fas fa-money-check-alt"></i>
                                </div>
                                <h3>Site seguro</h3>
                            </div> 
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <i className="far fa-credit-card"></i>
                                </div>
                                <h3>Muitas formas de pagamento</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <i className="fas fa-headset"></i>
                                </div>
                                <h3>Suporte online 24 horas</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Facility;
