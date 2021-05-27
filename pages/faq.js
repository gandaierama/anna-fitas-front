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
                <Breadcrumb title="Customer Service" />
                <section className="customer-service-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2><span className="dot"></span> FAQ</h2>
                        </div>

                        <div className="customer-service-content">
                            <h3><i className="fas fa-gift"></i> O site Anna Fitas é confiável?</h3>
                            <p>Sim pois conta com um banco de dados Criptografado com segurança SSL não compartilha dados de clientes com outros site. E os pagamentos com Cartão são feitos dentro da plataforma do Mercado Pago gerando mais confiança a nossos clientes.</p>

                            <h3><i className="fas fa-gift"></i> Fiz meu pagamento mas meu pedido está com status de Aguardando Pagamento por que?</h3>
                            <p>Não se Preocupe, o seu pagamento é analisado e modificado manualmente por um de nossos funcionários, e se você tiver feito pagamento pelo cartão de Credito e não recebeu nenhum email de Recusado Certamente seu pedido será aprovado por nossa equipe e se você fez pagamento por deposito ou transferência é preciso que tire foto do comprovante e nos envie clicando no botão enviar comprovante pelo whatsapp assim seu pedido terá mais agilidade na aprovação.</p>

                            <h3><i className="fas fa-gift"></i> Fiz meu pedido e pagamento e agora o que faço?</h3>
                            <p>Aguarde no máximo de 3 Dias ele será postado e caso atrase ou passe desses 3 dias você pode entrar em contato conosco e reclamar cobrando seu pedido.</p>
                            
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