import React, { Component } from 'react';
import Modal from './modal'

export default class DetailFacutra extends Component {



    handleEliminar = e =>{
        const {eliminarFactura} = this.props;
        const dato =  e.target.value
        eliminarFactura(dato);
    }


    render() {
        const { ID, expiration_date, payment_reference, invoice_status, amount, last_payment_date, formatted_line_number, payment_history } = this.props.detalle[0];
        
        return (

            <div className="container border bg-light">
                <h2><b>(+57){formatted_line_number}</b></h2>
                <br></br>
                <div className="row">
                    <div className="col-6">
                        <span className="float-left">Fecha de vencimiento:</span>
                        <br></br>
                        <span className="float-left">{expiration_date}</span>
                    </div>
                    <div className="col-6">
                        <span className="float-right">Referencia de pago:</span>
                        <br></br>
                        <span className="float-right"><b>{payment_reference}</b></span>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-4">
                        <span className="float-left">Fecha de último pago:</span>
                        <span className="float-left">{last_payment_date}</span>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-6">
                        <span className="float-left">Estado de factura:</span>
                        <br></br>
                        <h4 className="float-left text-danger">{invoice_status}</h4>
                    </div>
                    <div className="col-6">
                        <span className="float-right">Valor a pagar:</span>
                        <br></br>
                        <h1 className="float-right">{amount}</h1>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col">
                        <a className="float-left" href='#myModal' data-toggle="modal" data-target="#myModal" >Ver historial de pagos</a>
                    </div>
                    <div className="col-4">
                        <button className="float-right btn btn-success block" value={ID} onClick={this.handleEliminar}>Pagar</button>
                    </div>
                </div>
                <br></br>
                <Modal  historial={payment_history}/>
            </div>

        )
    }
}
