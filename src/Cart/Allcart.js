/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Cartnav from './Cartnav'
import { CartProvider,useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

function Allcart() {
    function Cart() {
        const {
          isEmpty,
          totalUniqueItems,
          totalItems,
          cartTotal,
          items,
          updateItemQuantity,
          removeItem,
          emptyCart,
        } = useCart();
      
        if (isEmpty) return <h3 className="text-center">Your cart is empty</h3>;
      
        return (
          <>
            <div className="d-flex align-items-center justify-content-center mt-5 mb-2 " >
              <h2 className="text-center">Cart ({totalUniqueItems})</h2>
              <button className="btn btn-danger ml-2" onClick={() => emptyCart()}>Delete All</button>
            </div>
      
            <div className="container">
              <div className="row">
                <div className="col m-auto">
                  <table className="table table-dark text-center">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Operation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id}>
                          <td><img className="rounded bg-warning" src={item.images[0]} style={{ width: '70px' }}></img></td>
                          <td>{item.title}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price * item.quantity} $</td>
                          <td>
                            <button className="btn btn-warning"
                              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <button className="btn btn-success mx-2"
                              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                            <button className="btn btn-danger my-2" onClick={() => removeItem(item.id)}>&times;</button>
                          </td>
      
                        </tr>
                      ))}
                      <tr>
                        <td>Total</td>
                        <td>
                          -----------
                        </td>
                        <td>{totalItems}</td>
                        <td>{cartTotal} $</td>
                        <td>
                          <Link className="btn btn-primary mr-1 my-1" to="/products">Go Back</Link>
                          <Link className="btn btn-success" to="/products">Payment</Link>
                        </td>
                      </tr>
                    </tbody>
      
                  </table>
                </div>
              </div>
            </div>
      
          </>
        );
      }
  return (
    <CartProvider>
      <Cartnav/>
      <Cart/>
      <ScrollToTop smooth className='bg-primary' />
    </CartProvider>
  )
}

export default Allcart
