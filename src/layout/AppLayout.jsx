import Navber from "../components/Navber";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../context/CartContext";


const AppLayout = () => {
      return (
            <>
                  <CartProvider>
                        <Navber />
                        <div className="min-h-[calc(100vh-392.8px)]">
                              <Outlet />
                        </div>
                  </CartProvider>
                  <Footer />
            </>
      );
};

export default AppLayout;