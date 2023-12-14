import React, { Component } from 'react';
import RowTable from './RowTable';

class UltimosProdUSer extends Component{
    constructor(){
        super()
        this.state = {
            productList: [],
        }
    }
	componentDidMount(){
        fetch("http://localhost:3001/api/products")
        .then(res => res.json())
        .then(product =>{
            this.setState({productList: product.data})
            console.log(this.state.productList)
        })
    }
    
	render(){
        let ultimoProdIndice = 	this.state.productList.length -1 ; 
        let ultimoProducto = this.state.productList[ultimoProdIndice];
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
							<h1 className="h3 mb-2 text-gray-800">Ultimo Producto</h1>
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre Producto</th>
                                            <th>Precio</th>
                                            <th>Envio</th>
                                            <th>Imagen</th>
											<th>Descripcion</th>
										</tr>
									</thead>
									<tbody>															
									
									 <RowTable  {...ultimoProducto}  key={ultimoProdIndice} />													

									</tbody>
									
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )}
}
export default UltimosProdUSer;