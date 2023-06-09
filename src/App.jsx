import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addtoCart, removeFomCart } from './features/ProductSlice'

function App() {

  const products = useSelector(state => state.product.products)
  // console.log(products)

  const cartProducts = useSelector(state => state.cart.cart)
  // console.log(cartProducts)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <h3>Products</h3>
        {
          products.map((product, index) => {
            return (
              <div key={index}>
                <h5>{product.title}</h5>
                <h6>Rs.{product.price}/-</h6>
                <button onClick={() => dispatch(addtoCart({ id: product.id, title: product.title, price: product.price }))}>Add to Cart</button>
              </div>
            )
          })
        }
      </div>

      <div>
        <h3>Cart</h3>
        {
          cartProducts ?
            cartProducts.map((product, index) => {
              return (
                <div key={index}>
                  <h5>{product.title}</h5>
                  <h6>Rs.{product.price}/-</h6>
                  <button onClick={() => dispatch(removeFomCart({ id: product.id }))}>Remove from Cart</button>
                </div>
              )
            }) : null
        }
      </div>
    </div>
  )
}

export default App
