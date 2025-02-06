/* eslint-disable react/prop-types */
const Heading = ({ title, subtitle }) => {
      return (
            <div className="w-11/12 md:w-8/12 lg:w-8/12 xl:w-6/12 mx-auto text-center space-y-2 text-slate-50">
                  <h1 className="text-3xl lg:text-4xl font-bold capitalize">{title}</h1>
                  <p className="font-semibold">{subtitle}</p>
            </div>
      );
};

export default Heading;