import React, { Component } from 'react';
import facturas from '../data/facturas.json'
import '../App.css';
import DetailFacutra from './detalleFactura'
import Buscar from './buscar'
import ListaFacturas from './listaFacturas'

export default class Facturas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            current: 1,
            facturas: [],
            idFactura: '',
            serchFactura: [],
            factAxiliar:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/facturas')
            .then(res => res.json())
            .then(results => {
                this.setState({ facturas: results, datos: [results[0]], serchFactura:results, factAxiliar:results })
            })
    }


    detalleFactura = id => {
        const datos = facturas.filter(f => f.ID == id);
        this.setState({ datos, current: id });

    }

    filtrarFacturas = (celular) => {

        const datos = this.state.serchFactura.filter(f => f.line_number.toLowerCase().indexOf(celular.toLowerCase()) > -1);
        console.log(datos)
        this.setState({ facturas: datos});
    }


    eliminarFactura = dato => {

        var index = this.state.factAxiliar.map(f => f.ID).indexOf(parseInt(dato));
        this.state.factAxiliar.splice(index, 1);
        this.setState({ facturas: this.state.factAxiliar, datos: [this.state.factAxiliar[0]], serchFactura:this.state.factAxiliar });


        if (this.state.factAxiliar[0] != null) {
            var x = this.state.factAxiliar[0]['ID'];
            this.setState({ current: x })
        }

    }


    render() {
        return (
            <div className='card-body'>
                <div className="row">
                    <div className="col-5 ">
                        <Buscar filtrarFacturas={this.filtrarFacturas} />
                        <br></br>
                        <ul className="list-group scroll">
                            <ListaFacturas listaFacturas={this.state.facturas} current={this.state.current} detalleFactura={this.detalleFactura} />
                        </ul>
                    </div>
                    <div className="col-7">
                        {
                            this.state.facturas[0] == null
                                ? 'NO HAY FACTURAS PARA PAGAR'
                                : <DetailFacutra detalle={this.state.datos} eliminarFactura={this.eliminarFactura} />

                        }

                    </div>
                </div>
            </div>

        )
    }
}


