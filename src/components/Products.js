
import React, { useEffect, useState, Component} from "react";

import RowTable from "./RowTable";

class Products extends Component{
    constructor(){
        super()
        this.state = {
            productList: [],
        }
    }
	//const [products, setProducts] = useState([]);
	//const api = "http://localhost:3001/api/products"
	//   useEffect(() => {
	// 	fetch(api)
	// 	  .then((res) => res.json())
	// 	  .then((product) => {
	// 		setProducts({products: product.data});
	// 	  });
	//   }, []);
	componentDidMount(){
        fetch("http://localhost:3001/api/products")
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
							<div className="table-responsive">
							<h1 className="h3 mb-2 text-gray-800">Productos en la BD</h1>
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
									{
										
									this.state.productList.map((prod,index)=>{
										return  <RowTable  {...prod}  key={index} />
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
export default Products;