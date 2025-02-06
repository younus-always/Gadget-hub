/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
      const [cart, setCart] = useState([]);
      const [wishlist, setWishlist] = useState([]);

      const addToCart = (product) => {
            const isProductInCart = cart.find(p => p.id == product.id)
            if (isProductInCart) {
                  toast.error('Already Exists in Cart !')
            } else {
                  setCart((prev) => [...prev, product])
                  toast.success('Successfully added to Cart !')
            }
      };

      const addToWishlist = (product) => {
            const isProductInWishlist = wishlist.find(p => p.id == product.id)
            if (isProductInWishlist) {
                  toast.error(` Already Exists in WishList !`)
            }
            else {
                  setWishlist((prev) => [...prev, product])
                  toast.success('Successfully added to WishList !')
            }
      };

      return (
            <CartContext.Provider value={{ cart, addToCart, wishlist, addToWishlist }}>
                  {children}
            </CartContext.Provider>
      );
};
