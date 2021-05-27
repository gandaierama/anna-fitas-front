import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderSummary extends Component {
    render() {
        return (
            <div className="order-table table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Nome do produto</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.products.map((data, idx) => (
                            <tr key={idx}>
                                <td className="product-name">
                                    <a href="#">{data.title}</a>
                                </td>

                                <td className="product-total">
                                    <span className="subtotal-amount">${data.price * data.quantity}</span>
                                </td>
                            </tr>
                        ))}

                        <tr>
                            <td className="order-subtotal">
                                <span>Subtotal</span>
                            </td>

                            <td className="order-subtotal-price">
                                <span className="order-subtotal-amount">${this.props.total}</span>
                            </td>
                        </tr>

                        <tr>
                            <td className="order-shipping">
                                <span>Frete</span>
                            </td>

                            <td className="shipping-price">
                                <span>${this.props.shipping}</span>
                            </td>
                        </tr>
                        
                        
                        <tr>
                            <td className="total-price">
                                <span>Total do pedido</span>
                            </td>

                            <td className="product-subtotal">
                                <span className="subtotal-amount">${this.props.total + this.props.shipping}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems,
        total: state.total,
        shipping: state.shipping
    }
}

export default connect(
    mapStateToProps
)(OrderSummary)
