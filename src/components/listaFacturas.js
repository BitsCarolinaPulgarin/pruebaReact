import React, { Component } from 'react';

export default class ListaFacturas extends Component {
    
    
    getId = event => {
        const {detalleFactura} = this.props
        const id = event.currentTarget.id;
        detalleFactura(id);
    }
    

    render() {
        const { listaFacturas, current } = this.props
        return (
            listaFacturas.map(fact => {
                return (
                    <li key={fact.ID} className={`list-group-item  ${fact.ID == current ? 'active' : ''}`} id={fact.ID} onClick={this.getId}>
                        <div className='row'>
                            <div className="col">
                                <span className="float-left">{'(' + fact.country_mobile_code + ') ' + fact.formatted_line_number}</span>
                                <span className="float-right text-danger">{fact.invoice_status}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4 className="float-left">{fact.currency + fact.amount}</h4>
                                <span className="float-right">{fact.expiration_date}</span>
                            </div>
                        </div>
                    </li>
                )
            })
        )
    }
}