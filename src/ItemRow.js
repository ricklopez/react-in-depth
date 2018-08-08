import React, { Component } from 'react';
import Item from './Item';

class ItemRow extends Component {
  render() {
    const items = this.props.items.map((item, i) => (
      <Item data={item} key={i}/>
    ));
    return (
      <div className="row justify-content-md-center">
         {items}
      </div>
    );
  }
}

export default ItemRow;
