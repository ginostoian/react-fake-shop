import { useState, useContext } from 'react'
import { Context } from '../Context'
import PropTypes from 'prop-types'

function CartItem({ item }) {
    const [hovered, setHovered] = useState(false)
    const { removeFromCart } = useContext(Context)

    return (
        <div className="cart-item">
            <i
                onClick={() => removeFromCart(item)}
                className={hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
            </i>
            <img src={item.url} width="130px" alt="" />
            <p>£5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem