import React, { Component } from 'react';

export default class Buscar extends Component {

    handleBuscar = (e) => {
        const { filtrarFacturas } = this.props
        const celular = e.target.value
        filtrarFacturas(celular)
    }

    render() {

        return (
            <div>
                <input className="form-control"  type="text" placeholder="Buscar" onChange={this.handleBuscar} />
            </div>
        )
    }
}