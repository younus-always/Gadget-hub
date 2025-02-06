/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
      return (
            <>
                  <ul className="flex flex-col gap-4 text-center w-full">
                        {
                              categories.map(category =>
                                    <li key={category.id} className="" >
                                          <NavLink to={`/category/${category.category}`} className={({ isActive }) => `w-full block rounded-3xl py-2 font-semibold ${isActive ? 'bg-primary text-slate-50' : 'bg-gray-100'}`} >
                                                {category.category}
                                          </NavLink>
                                    </li>
                              )
                        }
                  </ul>
            </>
      );
};

export default Categories;