import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import searching from '../assets/no-data.gif'


const Products = () => {
      const data = useLoaderData();
      const { category } = useParams()
      const [products, setProducts] = useState([data])

      useEffect(() => {
            if (category) {
                  const filterProduct = [...data].filter(product => product.category === category)
                  setProducts(filterProduct)
            } else {
                  setProducts(data)
            }
      }, [data, category])


      return (
            <>
                  <div className={`${products.length > 0 && 'grid'} grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-7`} >
                        {
                              products.length === 0
                                    ? <div className="w-full h-52 flex items-center gap-6">
                                          <p className="text-3xl lg:text-5xl font-bold">Data Not Found!</p>
                                          <img src={searching} alt="" width={'80px'} />
                                    </div>
                                    : products.map(product =>
                                          <Card key={product.id} product={product} />)
                        }
                  </div>
            </>
      );
};

export default Products;