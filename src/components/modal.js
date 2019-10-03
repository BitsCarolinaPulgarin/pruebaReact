import React, { Component } from 'react'


export default class Modal extends Component {
    render() {
        const { historial } = this.props;
        return (
            <div>
                <div className="modal" id="myModal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">Historial de pagos</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>


                            <div className="modal-body table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Periodo</th>
                                            <th>Valor de la factura</th>
                                            <th>Saldo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            historial.map((h, index) => {

                                                return (
                                                    < tr key={index}>
                                                        <td>{h.period}</td>
                                                        <td>{h.amount}</td>
                                                        <td>{h.balance}</td>
                                                    </tr>
                                                )

                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}
