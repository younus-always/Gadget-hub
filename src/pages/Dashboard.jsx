import { NavLink, Outlet } from "react-router-dom";
import Heading from "../components/Heading";
import useTitle from "../components/useTitle";

const Dashboard = () => {
      useTitle('Dashboard')

      return (
            <>
                  <div className="bg-primary py-8">
                        <Heading title={'dashboard'}
                              subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' />
                        <div className="flex items-center justify-center py-6 gap-5">
                              <NavLink
                                    to='/dashboard/cart'
                                    className={({ isActive }) => `py-2 px-6 rounded-3xl border font-semibold transition-colors ease-in-out duration-150 ${isActive ? 'bg-white text-primary' : 'bg-transparent text-slate-50'}`}>
                                    Cart
                              </NavLink>

                              <NavLink
                                    to='/dashboard/wishlist'
                                    className={({ isActive }) => `py-2 px-6 rounded-3xl border font-semibold transition-colors ease-in-out duration-150 ${isActive ? 'bg-white text-primary' : 'bg-transparent text-slate-50'}`}>
                                    Wishlist
                              </NavLink>
                        </div>
                  </div>

                  <div>
                        <Outlet />
                  </div>
            </>
      );
};

export default Dashboard;