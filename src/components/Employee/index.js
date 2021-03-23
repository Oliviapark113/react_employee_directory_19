import React from "react";
import "./style.css";

function Employee(props) {
  return (
    <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Photo

        </th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">DOB</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <th scope="row">                          <div className="img-container">
            {/* <img alt={props.name} src={props.image} /> */}
          </div>
          </th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>dd/mm/year</td>
        </tr>

        <tr>
          <th scope="row">                          <div className="img-container">
            {/* <img alt={props.name} src={props.image} /> */}
          </div>
          </th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>dd/mm/year</td>
        </tr>

    </tbody>
  </table>
  )
}

export default Employee;