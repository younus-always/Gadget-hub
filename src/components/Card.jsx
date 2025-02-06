/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ product }) => {
      const { id, title, price, image } = product

      return (
            <div className="card shadow-xl">
                  <figure className="px-5 pt-5">
                        <img
                              src={image}
                              alt={`${title} photo`}
                              className="rounded-xl h-56 w-auto object-contain" />
                  </figure>
                  <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>Price: ${price}</p>
                        <Link to={`/detail/${id}`} className="btn btn-primary">View Details</Link>
                  </div>
            </div>
      );
};

export default Card;