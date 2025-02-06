import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { IoCloseOutline } from "react-icons/io5";
import toast from "react-hot-toast";

const Wishlist = () => {

      const { wishlist } = useContext(CartContext);
      const [product, setProduct] = useState(wishlist)
      const handleRemove = id => {
            const removeProductToWishlist = product.filter(p => p.id !== id)
            setProduct(removeProductToWishlist)
            toast.success('Product Removed Successfully !')
      }

      return (
            <div className='w-11/12 lg:w-10/12 mx-auto font-inter'>
                  <h3 className="font-bold text-2xl py-7">WishList</h3>


                  <div className="pb-7">
                        {
                              product.map((p, i) =>
                                    < div key={i} className='shadow-lg rounded-xl p-7 my-5 flex justify-between gap-5'>
                                          <div className='flex flex-col sm:flex-row gap-7'>
                                                <div>
                                                      <img src={p.image} alt="" className='lg:w-40' />
                                                </div>
                                                <div className='space-y-2'>
                                                      <h2 className='font-bold text-2xl'>{p.title}</h2>
                                                      <p className='font-semibold text-gray-600 text-lg'>Description: {p.description}</p>
                                                      <p className='font-semibold text-gray-600'>Price: ${p.price}</p>
                                                </div>
                                          </div>
                                          <button onClick={() => handleRemove(p.id)} className='w-16 h-8 md:w-12 lg:w-8 lg:h-8 flex items-center justify-center rounded-full border-red-600 border'>
                                                <IoCloseOutline size={20} />
                                          </button>
                                    </div >)
                        }
                  </div>


            </div>
      )
};

export default Wishlist;