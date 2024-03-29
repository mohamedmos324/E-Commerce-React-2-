/* eslint-disable jsx-a11y/alt-text */
import { CartProvider, useCart } from "react-use-cart";
import products from "./Apidata";
import Productsnav from "./Productsnav";
import ScrollToTop from "react-scroll-to-top";

function Page() {
  const { addItem } = useCart();

  return (
    <div>

      <div className="container">
        <div className="row">

          {products.map((item) => (
            <div className="col-md-4 text-center mb-5" key={item.id}>
              <div className="p-2  border border-dark">
                <img src={item.images[0]} className="w-75 rounded bg-warning" height='350px' />
                <h5 className="mt-2">{item.title}</h5>
                <h6>{item.price} $</h6>
                <button className="btn btn-primary" onClick={() => addItem(item)}>Add to cart</button>
              </div>


              
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function Allproducts() {
  return (
    <CartProvider>
      <Productsnav/>
      <br></br>
      <Page />
      <ScrollToTop smooth className='bg-primary' />
    </CartProvider>
  );
}
export default Allproducts