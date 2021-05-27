import React, { Component } from 'react';

class Subscribe extends Component {
    render() {
        return (
            <section className="subscribe-area ptb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="newsletter-content">
                                <h3>Inscreva-se em nossa newsletter</h3>
                                <p>Digite seu e-mail para se inscrever</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <form className="newsletter-form" data-toggle="validator">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Digite seu e-mail" 
                                    name="EMAIL" 
                                    required={true} 
                                    autoComplete="off" 
                                />
                                <button type="submit">Increver</button>
                                <div id="validator-newsletter" className="form-result"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Subscribe;
