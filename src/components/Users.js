
import React, { useEffect, useState, Component} from "react";

import RowTableUser from "./RowTableUser";

class Users extends Component{
    constructor(){
        super()
        this.state = {
            productList: [],
        }
    }
	componentDidMount(){
        fetch("http://localhost:3001/api/users")
        .then(res => res.json())
        .then(product =>{
            this.setState({productList: product.data})
            console.log(this.state.productList)
        })
    }
	render(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
						<h1 className="h3 mb-2 text-gray-800">Usuarios en la BD</h1>
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Email</th>
                                            <th>Contraseña Encriptada</th>
                                            <th>Pais</th>
											<th>Foto</th>
										</tr>
									</thead>
									<tbody>
									{
									this.state.productList.map((prod,index)=>{
										return  <RowTableUser  {...prod}  key={index} />
									})
									}

									</tbody>
									
									{/* {products.map((prod, i) => (
										<RowTable
										key={i}
										id={prod.id}
										name={prod.name}
										price={prod.price}
										envio={prod.envio}
										img={prod.img}
										description ={prod.description}
										/>
									))} */}
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )}
}
export default Users;