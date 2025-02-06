import { Link } from "react-router-dom";

const Footer = () => {
      return (

            <footer className="bg-gray-50  py-8">
                  <section className="w-11/12 mx-auto space-y-8">
                        <div className="text-center border-b pb-5">
                              <Link to='/' className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary">Gadget_Hub</Link>
                              <p className="text-lg text-gray-600 font-semibold mt-2">Leading the way in cutting edge-technology and innovation.</p>
                        </div>
                        <div className="flex flex-col text-center gap-6 md:gap-0 md:text-start md:flex-row justify-around">
                              <ul>
                                    <h6 className="footer-title opacity-100">Services</h6>
                                    <li className="link link-hover">Product Support</li>
                                    <li className="link link-hover">Order Tracking</li>
                                    <li className="link link-hover">Shipping & Delivery</li>
                                    <li className="link link-hover">Returns</li>
                              </ul>
                              <ul>
                                    <h6 className="footer-title opacity-100">Company</h6>
                                    <li className="link link-hover">About Us</li>
                                    <li className="link link-hover">Careers</li>
                                    <li className="link link-hover">Contact</li>
                              </ul>
                              <ul>
                                    <h6 className="footer-title opacity-100">Legal</h6>
                                    <li className="link link-hover">Terms of Service</li>
                                    <li className="link link-hover">Privacy Policy</li>
                                    <li className="link link-hover">Cookie policy</li>
                              </ul>
                        </div>
                  </section>
            </footer>
      )
};

export default Footer;