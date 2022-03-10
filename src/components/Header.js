import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../Context'

function Header() {
    const { cartItems } = useContext(Context)

    return (
        <header>
            <h2>
                <Link to="/">Pic Some</Link>
            </h2>
            <Link to="/cart">
                <i
                    className={`ri-shopping-cart-${cartItems.length > 0 ? 'fill' : 'line'} ri-fw ri-2x`}>
                </i>
                {cartItems.length}
            </Link>
        </header>
    )
}

export default Header