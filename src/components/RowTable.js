import React from "react";

function RowTable(props) {

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.envio}</td>
      <td>{props.img}</td>
      <td>{props.description}</td>
    </tr>
  );
}






export default RowTable;