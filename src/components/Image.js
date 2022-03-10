import React, { useState, useContext } from "react";
// we could have imported and used useContext to get the 
//toggleFavorite function but instead we destructured it
//in Photos.js and passed it down to the Image component via Props
import { Context } from '../Context'
import PropTypes from "prop-types"

function Image({ className, img }) {
    const [hovered, setHovered] = useState(false)
    const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context)

    function highlight() {
        setHovered(prevState => !prevState)
    }

    function checkIfAddedToCart(img) {
        const foundItem = cartItems.find(item => item.id === img.id)
        return foundItem
    }

    const heartIcon = hovered &&
        <i
            onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite">
        </i>

    const favoritedHeart = <i
        onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite">
    </i>

    const cartIcon = hovered &&
        <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>

    const addedToCartIcon = <i
        onClick={() => removeFromCart(img)}
        className="ri-shopping-cart-fill cart"></i>

    return (
        <div
            onMouseEnter={highlight}
            onMouseLeave={highlight}
            className={`${className} image-container`}>
            <img src={img.url} className="image-grid" alt="" />
            {img.isFavorite ? favoritedHeart : heartIcon}
            {checkIfAddedToCart(img) ? addedToCartIcon : cartIcon}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    }),
    toggleFavorite: PropTypes.func
}

export default Image