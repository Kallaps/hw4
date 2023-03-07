import React from "react";

const Tabliza = ({ employees }) => {
  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <th>name</th>
            <th>surname</th>
            <th>days</th>
            <th>salaryPerDay</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((item) => (
            <tr>
              <td className="td">{item.name}</td>
              <td className="td">{item.surname}</td>
              <td className="td">
                <input className="input1" defaultValue={item.days}></input>
              </td>
              <td className="td">
                <input
                  className="input2"
                  defaultValue={item.salaryPerDay}
                ></input>
              </td>
              <td>{item.days * item.salaryPerDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabliza;
