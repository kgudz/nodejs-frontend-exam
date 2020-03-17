import React from 'react';

// Constants
import { TableData } from './constants/table-data';


/*
 * First level of table array
 */
function TableItems(props) {
  console.log(props);
  const tableParentList = props.data ? props.data.map((item) =>
    <li key={item.id} className="list-item">
      <div className="table-title">
        <div className="meta-value">{item.code}</div>
        <h5 className="title is-5">{item.name}</h5>
        <label className="checkbox">
          <input type="checkbox"/>
        </label>
      </div>
      <TableChildItems data={item.sub_items}/>
    </li>
  )
  : '';

  return (
    <ul className="list parent-list">
      {tableParentList}
    </ul>
  )
}

/*
 * Second level of table array
 */
function TableChildItems(props){
  const tableChildList = props.data ? props.data.map((item) =>
    <li key={item.id} className="list-item">
      <div className="table-title">
        <div className="meta-value">{item.date}</div>
        <h5 className="title is-5">{item.name}</h5>
        <label className="checkbox">
          <input type="checkbox"/>
        </label>
      </div>
      <TableInnerChildItems data={item.sub_items}/>
    </li>
  ) 
  : '';

  return(
    <ul className="list child-list">
      {tableChildList}
    </ul>
  );
}

/*
 * Third level of table array
 */
function TableInnerChildItems(props){
  const tableInnerChildList = props.data ? props.data.map((item) =>
    <li key={item.id} className="list-item">
      <div className="table-title">
        <h5 className="title is-5">{item.name}</h5>
        <label className="checkbox">
          <input type="checkbox"/>
        </label>
      </div>
    </li>
  ) 
  : '';

  return(
    <ul className="list inner-child-list">
      {tableInnerChildList}
    </ul>
  );
}

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange() {
    this.setState(state => ({
      isChecked: !state.isChecked
    }));
    console.log(this.state)
  }
  
  render(){
    return (
      <div className="table-component-card card">
        <div className="card-content">
          <TableItems data={TableData} checked={this.isChecked} />
        </div>
      </div>
    );
  }
}

export default TableComponent;
