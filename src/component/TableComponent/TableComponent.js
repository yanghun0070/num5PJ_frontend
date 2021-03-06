import React, { Component } from 'react';

class TableComponent extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        var dataColumns = this.props.data.columns;
        var dataRows = this.props.data.rows;
    
        var tableHeaders = (<thead>
              <tr>
                {dataColumns.map(function(column) {
                  return <th>{column}</th>; })}
              </tr>
          </thead>);
    
        var tableBody = dataRows.map(function(row) {
          return (
            <tr>
              {dataColumns.map(function(column) {
                return <td>{row[column]}</td>; })}
            </tr>); });

        return (

            <table className="table table-bordered table-hover" width="100%">
            {tableHeaders}
            {tableBody}
          </table>
        );
    }
}

export default TableComponent;