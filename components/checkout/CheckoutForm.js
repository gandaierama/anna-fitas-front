import React from 'react';
import { connect } from 'react-redux';
import OrderSummary from './OrderSummary';
import Payment from '../payments/Payment';
import useForm from './userForm';

function CheckoutForm({total, shipping}) {

    function handleSubmit() {
        console.log("Form submitted.");
    }

    let totalAmount = (total + shipping).toFixed(2)
    
    const stateSchema = {
        firstName: {value: "", error: ""},
        lastName: {value: "", error: ""},
        address: {value: "", error: ""},
        city: {value: "", error: ""},
        state: {value: "", error: ""},
        zip: {value: "", error: ""},
        email: {value: "", error: ""},
        phone: {value: "", error: ""}
    };

    const validationStateSchema = {
        firstName: {
            required: true,
            validator: {
            regEx: /^[a-zA-Z]+$/,
            error: "Nome inválido"
            }
        },

        lastName: {
            required: true,
            validator: {
            regEx: /^[a-zA-Z]+$/,
            error: "Sobrenome inválido"
            }
        },

        address: {
            required: true,
            validator: {
                error: "Endereço inválido"
            }
        },

        city: {
            required: true,
            validator: {
                error: "Cidade inválida"
            }
        },

        state: {
            required: true,
            validator: {
                error: "Estado inválido."
            }
        },

        zip: {
            required: true,
            validator: {
                regEx: /^\d{5}$|^\d{5}-\d{4}$/,
                error: "Digite o cep corretamente."
            }
        },

        email: {
            required: true,
            validator: {
                regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                error: "E-mail inválido."
            }
        },

        phone: {
            required: true,
            validator: {
                regEx: /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/,
                error: "Digite seu telefone corretamente."
            }
        }
    };

    const { state, handleOnChange, handleOnSubmit, disable } = useForm (
        stateSchema,
        validationStateSchema,
        handleSubmit
    );
    
    const errorStyle = {
        color: "red",
        fontSize: "13px"
    };
    

    return (
        <section className="checkout-area ptb-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="user-actions">
                            <i className="fas fa-sign-in-alt"></i>
                            <span>Já tem cadastro? <a href="#">Clique aqui para entrar</a></span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleOnSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                                <h3 className="title">Detalhes da compra</h3>

                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>País <span className="required">*</span></label>
                                            <div className="select-box">
                                                <select 
                                                    className="form-control"
                                                    name="country"
                                                >
                                                    <option value="5">Brasil</option>
                                                    <option value="1">China</option>
                                                    <option value="2">United Kingdom</option>
                                                    <option value="0">Germany</option>
                                                    <option value="3">France</option>
                                                    <option value="4">Japan</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Nome <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="firstName"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.firstName.value}
                                            />
                                            {state.firstName.error && <p style={errorStyle}>{state.firstName.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Sobrenome <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="lastName"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.lastName.value}
                                            />
                                            {state.lastName.error && <p style={errorStyle}>{state.lastName.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Empresa</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Endereço <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="address"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.address.value}
                                            />
                                            {state.address.error && <p style={errorStyle}>{state.address.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Cidade <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="city"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.city.value}
                                            />
                                            {state.city.error && <p style={errorStyle}>{state.city.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Estado <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="state"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.state.value}
                                            />
                                            {state.state.error && <p style={errorStyle}>{state.state.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>CEP <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="zip"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                value={state.zip.value}
                                            />
                                            {state.zip.error && <p style={errorStyle}>{state.zip.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>E-mail <span className="required">*</span></label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.email.value}
                                            />
                                            {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Telefone <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="phone"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.phone.value}
                                            />
                                            {state.phone.error && <p style={errorStyle}>{state.phone.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="create-an-account" />
                                            <label className="form-check-label" htmlFor="create-an-account">Criar conta?</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="ship-different-address" />
                                            <label className="form-check-label" htmlFor="ship-different-address">Entrega em lugar diferente?</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="notes" id="notes" cols="30" rows="6" placeholder="Peddidos antigos" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="order-details">
                                <h3 className="title">Seu pedido</h3>

                                <OrderSummary />

                                <div className="payment-method">
                                    <p>
                                        <input type="radio" id="direct-bank-transfer" name="radio-group" defaultChecked={true} />
                                        <label htmlFor="direct-bank-transfer">Depósito bancário</label>

                                        
                                    </p>
                                    <p>
                                        <input type="radio" id="paypal" name="radio-group" />
                                        <label htmlFor="paypal">Mercado Pago</label>
                                    </p>
                                    
                                </div>

                                <Payment 
                                    amount={totalAmount * 100}
                                    disabled={disable}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        total: state.total,
        shipping: state.shipping
    }
}

export default connect(
    mapStateToProps
)(CheckoutForm)

