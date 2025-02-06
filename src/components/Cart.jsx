import searching from '../assets/setting.png'
import payment from '../assets/Group.png'
import addItem from '../assets/add-item.png'
import { useContext, useState } from 'react';
import {  useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { IoCloseOutline } from 'react-icons/io5'
import toast from 'react-hot-toast';


const Cart = () => {
      const navigate = useNavigate()
      const { cart } = useContext(CartContext);
      let totalMoney = cart.reduce((pre, acc) => pre + acc.price, 0)
      const [sorted, setSorted] = useState(cart)

      const handleSort = () => {
            const sortBy = [...cart].sort((a, b) => b.price - a.price)
            setSorted(sortBy)
      }

      const handlePurchase = () => {
            const purchaseProduct = sorted.splice(sorted.length)
            setSorted(purchaseProduct)

      }
      const handleRemove = id => {
            const removeProductToCart = sorted.filter(s => s.id !== id)
            setSorted(removeProductToCart)
            toast.success('Product Remove Successfully !')
      }


      return (
            <div className='w-11/12 lg:w-10/12 mx-auto font-inter'>
                  <div className="flex flex-col md:flex-row gap-5 items-center justify-between py-7">
                        <h3 className="font-bold text-2xl">Cart</h3>
                        <div className='flex items-center gap-4'>
                              <h3 className="font-bold text-xl">Total cost: {totalMoney}</h3>
                              <button onClick={handleSort} className="rounded-3xl py-2 px-6 border border-primary flex items-center gap-2 text-primary font-bold text-sm cursor-pointer">
                                    Sort by Price
                                    <img src={searching} alt="" width={20} />
                              </button>
                              <button onClick={() => {
                                    handlePurchase();
                                    document.getElementById('my_modal').showModal()
                              }} className='py-2 px-4 rounded-3xl bg-gradient-to-br from-primary via-blue-500 to-primary font-bold text-sm text-slate-50 cursor-pointer'>
                                    Purchase
                              </button>
                        </div>
                  </div>

                  <div className="py-7">
                        {
                              sorted.map(c =>
                                    <div key={c.id} className='shadow-lg rounded-xl p-7 my-5 flex justify-between'>
                                          <div className='flex flex-col sm:flex-row gap-7'>
                                                <div>
                                                      <img src={c.image} alt="" className='lg:w-40' />
                                                </div>
                                                <div className='space-y-2'>
                                                      <h2 className='font-bold text-2xl'>{c.title}</h2>
                                                      <p className='font-semibold text-gray-600 text-lg'>{c.description}</p>
                                                      <p className='font-semibold text-gray-600'>Price: ${c.price}</p>
                                                </div>
                                          </div>
                                          <button onClick={() => handleRemove(c.id)} className='w-16 h-8 md:w-12 lg:w-8 lg:h-8 flex items-center justify-center rounded-full border-red-600 border'>
                                                <IoCloseOutline size={20} />
                                          </button>
                                    </div>
                              )
                        }
                  </div>

                  {
                        cart.length !== 0 ?
                              <dialog id="my_modal" className="modal modal-bottom sm:modal-middle font-inter">
                                    <div className="modal-box text-center">
                                          <div className='flex items-center justify-center pb-5'>
                                                <img src={payment} alt="payment icon" />
                                          </div>
                                          <h3 className="font-bold text-2xl w-fit mx-auto border-b-2 pb-6 mb-8">Payment Successfully</h3>
                                          <p className="py-1 font-semibold text-gray-600">Thanks for purchasing</p>
                                          <p className='font-semibold text-gray-600'>Total: {totalMoney}</p>
                                          <div className="flex items-center justify-center mt-3">
                                                <button onClick={() => navigate('/')} className='w-4/6 mx-auto hover:bg-purple-500 rounded-lg py-2 font-semibold text-white bg-primary transition-colors ease-in-out'>
                                                      Close
                                                </button>
                                          </div>
                                    </div>
                              </dialog>
                              : <dialog id="my_modal" className="modal modal-bottom sm:modal-middle font-inter">
                                    <div className="modal-box text-center">
                                          <div className='flex items-center justify-center pb-5'>
                                                <img src={addItem} alt="payment icon" width={80} />
                                          </div>
                                          <h3 className="font-bold text-2xl w-fit mx-auto border-b-2 pb-6 mb-8">Cart is Empty</h3>
                                          <p className="py-1 font-semibold text-gray-600">Added to Your Product</p>
                                          <div className="flex items-center justify-center mt-3">
                                                <button onClick={() => navigate('/')} className='w-4/6 mx-auto hover:bg-purple-500 rounded-lg py-2 font-semibold text-white bg-primary transition-colors ease-in-out'>
                                                      Close
                                                </button>
                                          </div>
                                    </div>
                              </dialog>

                  }



            </div >
      );
};

export default Cart;