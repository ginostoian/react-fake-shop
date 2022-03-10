import { useState, useContext } from 'react'
import { Context } from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
    const { cartItems, setCartItems } = useContext(Context)
    const cartItemElements = cartItems.map(item => {
        return <CartItem key={item.id} item={item} />
    })

    const [isOrderInProgress, setIsOrderInProgress] = useState(false)

    function placeOrder() {
        setIsOrderInProgress(true)
        setTimeout(() => {
            setCartItems([])
            setIsOrderInProgress(false)
            alert('Thank you for your order!')
        }, 3000)
    }


    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: £{(cartItems.length * 5.99).toFixed(2)} </p>
            <div className="order-button">
                {
                    cartItems.length ?
                        <button onClick={placeOrder}>{isOrderInProgress ? 'Sending your order...' : 'Place Order'}</button> :
                        <p style={{ fontSize: '1.6rem' }}>Add items to your cart to place an order!</p>
                }
            </div>
        </main >
    )
}

export default Cart