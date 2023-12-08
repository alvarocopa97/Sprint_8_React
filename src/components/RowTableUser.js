import React from "react";

function RowTableUser(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.password}</td>
      <td>{props.country}</td>
      <td>{props.avatar}</td>
    </tr>
  );
}






export default RowTableUser;