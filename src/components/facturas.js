import React, { Component } from 'react';
import facturas from '../data/facturas.json'
import '../App.css';
import DetailFacutra from './detalleFactura'
import Buscar from './buscar'

export default class Facturas extends Component {


    constructor(props) {
        super(props);
        this.state = {
            datos: [facturas[0]],
            current: 1,
            facturas: facturas,
            serchFactura: '',
            idFactura: ''
        }
    }


    detalleFactura = id => {
        const datos = facturas.filter(f => f.ID == id);
        this.setState({ datos, current: id });

    }

    filtrarFacturas(celular) {

        const datos = facturas.filter(f => f.line_number.toLowerCase().indexOf(celular.toLowerCase()) > -1);
        console.log(datos)
        this.setState({ facturas: datos, serchFactura: celular });
    }

    handleBuscar = (e) => {
        const celular = e.target.value
        this.filtrarFacturas(celular)
    }

    eliminarFactura = dato => {

        var index = facturas.map(f => f.ID).indexOf(parseInt(dato));
        this.state.facturas.splice(index, 1);
        this.setState({ facturas: facturas, datos: facturas });
        
        if (facturas[0] != undefined) {
            var x = facturas[0]['ID'];
            this.setState({ current: x })
        }

    }


    getId = event => {
        const id = event.currentTarget.id;
        this.detalleFactura(id);
    }

    render() {
        return (

            <div className='card-body'>
                <div className="row">
                    <div className="col-5 ">
                        <input className="form-control" type="text" placeholder="Buscar" onChange={this.handleBuscar} />
                        <br></br>
                        <ul className="list-group scroll">
                            {
                                this.state.facturas.map(fact => {
                                    return (
                                        <li key={fact.ID} className={`list-group-item  ${fact.ID == this.state.current ? 'active' : ''}`} id={fact.ID} onClick={this.getId}>
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
                            }
                        </ul>
                    </div>
                    <div className="col-7">
                        <DetailFacutra detalle={this.state.datos} eliminarFactura={this.eliminarFactura} />
                    </div>
                </div>
            </div>

        )
    }
}


