import React from 'react';
var Row = require('./RowComponent');
var Cell = require('./CellComponent');

var Table = React.createClass({

  render() {
    var Rows = this.props.tableData.rows.map(function(object, i) {
      return <Row
        rowData={object}
        selectCell={this.props.selectCell}
        editCell={this.props.editCell}
        updateCell={this.props.updateCell}
        key={i} />
    }, this);

    var Headers = this.props.tableData.headers.map(function(object, i) {
      return <th key={i}>{object}</th>
    });

    return (
      <table className="ui striped fixed single line selectable celled table" >
        <thead>
        <tr>
          {Headers}
        </tr>
        </thead>
        <tbody>
          {Rows}
        </tbody>
      </table>
    );
  }
});

module.exports = Table;
