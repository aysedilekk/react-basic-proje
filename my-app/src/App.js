import React, { Component } from 'react'
import './App.css'
import Products from './products'
import ProductList from './productList'

class App extends Component {
  nameInputElement = React.createRef()
  priceInputElement2 = React.createRef()

  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        name: '',
        price: '',
      },
    }
  }

  handleNameInput = e => {
    const itemText = e.target.value
    const currentItem = { name: itemText, price: this.state.currentItem.price }
    this.setState({
      currentItem,
    })
  }

  handlePriceInput = e => {
    const itemText = e.target.value
    const currentItem = { name: this.state.currentItem.name, price: itemText }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if ((newItem.name !== '') && (newItem.price !== '')) {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { name: '', price: '' },
      })
    }
  }

  render() {
    return (
      <div className="app">
        <div className="column">
          <Products
            addItem={this.addItem}
            nameInputElement={this.nameInputElement}
            priceInputElement={this.priceInputElement}
            handleNameInput={this.handleNameInput}
            handlePriceInput={this.handlePriceInput}
            currentItem={this.state.currentItem}
          />
        </div>
        <div className="column">
          <div className="list-box-header">
            <span>ÜRÜN FİŞİ</span>
          </div>
          <div className="list-box-body">
            <ProductList entries={this.state.items}/>
          </div>
          <div className="list-box-footer">
            <span>TOPLAM: </span>{this.state.items.length > 0 && this.state.items.map(item => parseFloat(item.price)).reduce((acc, next) => acc + next, 0)}
          </div>
        </div>
      </div>
    )
  }
}

export default App
