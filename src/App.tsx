import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableCell from './TableCell';

function App() {

  const headers = [
    { name: "header1" },
    { name: "header2" },
    { name: "header3" },
    { name: "header4" },
    { name: "header5" },
    { name: "header6" },
  ]

  const tableContent = [
    { row: [{ value: "cell1" }, { value: "cell2" }, { value: "cell3" }, { value: "cell4" }, { value: "cell5" }, { value: "cell6" },] },
    { row: [{ value: "cell1" }, { value: "cell2" }, { value: "cell3" }, { value: "cell4" }, { value: "cell5" }, { value: "cell6" },] },
    { row: [{ value: "cell1" }, { value: "cell2" }, { value: "cell3" }, { value: "cell4" }, { value: "cell5" }, { value: "cell6" },] },
    { row: [{ value: "cell1" }, { value: "cell2" }, { value: "cell3" }, { value: "cell4" }, { value: "cell5" }, { value: "cell6" },] },
    { row: [{ value: "cell1" }, { value: "cell2" }, { value: "cell3" }, { value: "cell4" }, { value: "cell5" }, { value: "cell6" },] },
    { row: [{ value: "cell1" }, { value: "cell2" }, { value: "cell3" }, { value: "cell4" }, { value: "cell5" }, { value: "cell6" },] },
    { row: [{ value: "cell1" }, { value: "cell2" }, { value: "cell3" }, { value: "cell4" }, { value: "cell5" }, { value: "cell6" },] },
    { row: [{ value: "cell1" }, { value: "cell2" }, { value: "cell3" }, { value: "cell4" }, { value: "cell5" }, { value: "cell6" },] },
  ]

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            {headers.map((hd, headerIndex) => <td key={headerIndex}>{hd.name}</td>)}
          </tr>
          {tableContent.map((tc, rowNumber) => (
            <tr key={rowNumber}>
              {tc.row.map((cell, cellNumber) => (<td key={cellNumber}><TableCell value={cell.value} index={cellNumber} /></td>))}
            </tr>
          ))}
        </tbody>
        {/* <tr>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr> */}
      </table>
    </div>
  );
}

export default App;
