import React, { Component } from 'react'

class Products extends Component {
  componentDidUpdate() {
    // this.props.inputElement.current.focus()
    // this.props.inputElement2.current.focus()
  }
  render() {
    return (
      <div className="productsMain">
        <div className="input-box-header">
          <span>ÜRÜN FORMU</span>
        </div>
        <div className="input-box-body">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Ürün Adı"
              ref={this.props.nameInputElement}
              value={this.props.currentItem.name}
              onChange={this.props.handleNameInput}
            />
            <input
              placeholder="Ürün tutarı"
              ref={this.props.priceInputElement}
              value={this.props.currentItem.price}
              onChange={this.props.handlePriceInput}
            />
            <button type="submit"> Ürünü Ekle </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Products
