import { Link, NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

const Navber = () => {
      const { pathname } = useLocation()

      return (
            <header className="pt-3">
                  <nav className={`navbar ${pathname === '/' && 'bg-primary text-slate-50'} w-11/12 mx-auto md:px-8 rounded-tl-xl rounded-tr-xl`}>
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M4 6h16M4 12h8m-8 6h16" />
                                          </svg>
                                    </div>
                                    <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-gray-800">
                                          <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>Home</NavLink>
                                          <NavLink to='/statistics' className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>Statistics</NavLink>
                                          <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>Dashboard</NavLink>
                                          <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>Contact Us</NavLink>
                                    </ul>
                              </div>
                              <Link to='/' className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary ${pathname === '/' && 'text-white'}`}>Gadget_Hub</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className={`menu menu-horizontal gap-8 font-semibold`}>
                                    <NavLink to='/' className={({ isActive }) =>
                                          `${pathname !== '/' ? isActive ? 'text-primary' : 'hover:text-primary'
                                                : isActive ? 'underline' : 'hover:underline'}`}>
                                          Home</NavLink>
                                    <NavLink to='/statistics' className={({ isActive }) =>
                                          `${pathname !== '/' ? isActive ? 'text-primary' : 'hover:text-primary'
                                                : isActive ? 'underline' : 'hover:underline'}`}>Statistics</NavLink>
                                    <NavLink to='/dashboard' className={({ isActive }) =>
                                          `${pathname !== '/' ? isActive ? 'text-primary' : 'hover:text-primary'
                                                : isActive ? 'underline' : 'hover:underline'}`}>Dashboard</NavLink>
                                    <NavLink to='/contact' className={({ isActive }) =>
                                          `${pathname !== '/' ? isActive ? 'text-primary' : 'hover:text-primary'
                                                : isActive ? 'underline' : 'hover:underline'}`}>Contact Us</NavLink>
                              </ul>
                        </div>
                        <div className="navbar-end flex items-center gap-4 text-gray-800">
                              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-slate-50 transition-all">
                                    <BsCart3 size={20} />
                              </div>
                              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-slate-50 transition-all">
                                    <IoMdHeartEmpty size={20} />
                              </div>
                        </div>
                  </nav>
            </header>
      );
};

export default Navber;