import React, { Component } from 'react';

class Shipping extends Component {
    render() {
        const { closeShipModal } = this.props;
        return (
            <div 
                className="modal fade productShippingModal show" style={{paddingRight: '16px', display: 'block'}}
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" onClick={closeShipModal} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="fas fa-times"></i></span>
                        </button>

                        <div className="shipping-content">
                            <h3>Frete</h3>
                            <ul>
                                <li>Saiba mais sobre frete bgr[atis</li>
                                
                            </ul>

                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shipping;
