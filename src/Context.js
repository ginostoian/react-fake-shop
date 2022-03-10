import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    function toggleFavorite(imgId) {
        setAllPhotos(prevAllPhotos => {
            const newPhotos = prevAllPhotos.map(photo => {
                if (photo.id === imgId) {
                    return {
                        ...photo,
                        isFavorite: !photo.isFavorite
                    }
                } else {
                    return photo
                }
            })
            return newPhotos
        })
    }

    function addToCart(img) {
        setCartItems(prevState => [...prevState, img])
    }

    function removeFromCart(img) {
        const newCart = cartItems.filter(item => item.id !== img.id)
        setCartItems(newCart)
    }

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
        )
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    return (
        <Context.Provider value={{ allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, setCartItems }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }