/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import useTitle from "./useTitle";


const DetailCard = ({ product, handleAddToCart, handleAddToWishlist }) => {
      const { title, image, price, description, rating, availability, specification } = product || {};
      useTitle('Details')


      return (
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 rounded-xl bg-white p-6 shadow-md">
                  <div className="md:w-[35%]">
                        <img src={image} alt={`${title} photo`} />
                  </div>
                  <div className="md:w-[60%] space-y-3">
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <p className="font-semibold text-lg text-gray-700">Price: $ {price}</p>
                        <div className={`inline-block py-1 px-6 rounded-3xl font-semibold text-sm border ${availability ? 'bg-green-200 border-green-600 text-green-600' : 'bg-red-200 text-red-500 border-red-600'}`}>
                              {
                                    availability ? 'In Stock' : 'Out of Stock'
                              }
                        </div>
                        <p className="font-semibold text-gray-600">{description}</p>
                        <h3 className="text-xl font-bold">Specification:</h3>
                        <ul className="list-inside">
                              {specification &&
                                    Object.keys(specification).map((s) =>
                                          <li key={s}
                                                className="capitalize list-decimal font-semibold text-gray-500"
                                          >{s}: {specification[s]}</li>)
                              }
                        </ul>
                        <h3 className="text-xl font-bold">Rating:</h3>
                        <div className="flex items-center gap-3">
                              <ReactStars
                                    count={5}
                                    size={26}
                                    isHalf={true}
                                    activeColor="#ffd700"
                              />
                              <span className="py-1 px-4 font-semibold flex items-center justify-center text-sm rounded-3xl bg-gray-200">{rating}</span>
                        </div>
                        <div className="flex items-center gap-4">
                              <button onClick={handleAddToCart} className="py-2 px-5 flex items-center gap-4 rounded-3xl bg-primary text-slate-50 font-bold">
                                    Add to Cart
                                    <BsCart3 size={20} />
                              </button>
                              <button onClick={handleAddToWishlist} className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-slate-50 transition-all">
                                    <IoMdHeartEmpty size={20} />
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default DetailCard;