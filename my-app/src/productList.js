import React, { Component } from 'react'

class ProductList extends Component {
  createProduct = (item, i) => {
    return (
      <li key={i}>
        {item.name} {item.price}
      </li>
    )
  }
  render() {
    const listItems = this.props.entries.map(this.createProduct)

    return (
      <ul className="theList">{listItems}</ul>
    )

  }
}

export default ProductList
