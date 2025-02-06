import { Outlet, useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import useTitle from "../components/useTitle";

const Home = () => {
      useTitle('Home')
      const categories = useLoaderData()

      return (
            <>
                  <Hero />
                  <section className="py-6">
                        <h2 className="w-11/12 mx-auto text-2xl md:text-3xl lg:text-4xl font-bold text-center py-8 capitalize font-inter">explore cutting-edge gadgets</h2>

                        <div className="w-10/12 mx-auto flex flex-col gap-7 xl:gap-0 lg:flex-row justify-between">
                              <div className="lg:w-3/12 xl:w-2/12 h-fit shadow-lg p-6 rounded-lg">
                                    <Categories categories={categories} />
                              </div>
                              <div className="lg:w-9/12 xl:w-9/12 border-warning">
                                    <Outlet />
                              </div>
                        </div>
                  </section>
            </>
      );
};

export default Home;