
const Hero = () => {
      return (
            <section className="w-11/12 mx-auto font-inter h-[820px]">
                  <div className="bg-primary rounded-bl-xl rounded-br-xl pt-12 pb-48 lg:pb-60 relative">
                        <div className="w-10/12 mx-auto text-center text-slate-50 space-y-4 pb-7">
                              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                              <p className="font-semibold">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                              <button className="bg-white text-primary py-2 px-4 rounded-xl font-semibold hover:bg-black hover:text-slate-50 transition-all duration-200 ease-in-out">Shop Now</button>
                        </div>
                        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto border bg-white/25 backdrop-blur-xl p-4 rounded-xl absolute left-0 right-0 -bottom-56 md:-bottom-60 lg:-bottom-64 ">
                              <div className="bg-banner rounded-xl h-[370px] md:h-[400px] lg:h-[450px] bg-cover bg-center">

                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Hero;