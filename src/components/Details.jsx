import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "./Heading";
import DetailCard from "./DetailCard";
import { CartContext } from "../context/CartContext";

const Details = () => {

      const { addToCart, addToWishlist } = useContext(CartContext);
      const data = useLoaderData()
      const { detailId } = useParams()
      const [product, setProduct] = useState({})

      useEffect(() => {
            const newProduct = data.find(single => single.id === parseInt(detailId))
            setProduct(newProduct)
      }, [data, detailId])

      const handleAddToCart = () => {
            addToCart(product);
      };

      const handleAddToWishlist = () => {
            addToWishlist(product);
      };



      return (
            <section className="relative h-[1200px] sm:h-[1000px] md:h-[800px] lg:h-[800px]">
                  <div className="bg-primary text-slate-50 pt-8 pb-36">
                        <Heading
                              title='product details'
                              subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
                        />
                  </div>
                  <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto absolute left-0 right-0 bottom-32 sm:-bottom-16 md:bottom-16 lg:bottom-24">
                        <DetailCard product={product}
                              handleAddToCart={handleAddToCart} handleAddToWishlist={handleAddToWishlist}
                        />
                  </div>
            </section>
      );
};

export default Details;