import { Bar, BarChart,  Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Heading from "../components/Heading";
import useTitle from "../components/useTitle";

const Statistics = () => {
      useTitle('Statistics');

      const data = [
            {
                  "title": "Apple MacBook Pro 16 M1",
                  "price": 2499,
                  "category": "Laptops"
            },
            {
                  "title": "OnePlus 11",
                  "price": 749,
                  "category": "Smart Phones"
            },
            {
                  "title": "HTC Vive Focus Vision",
                  "price": 999,
                  "category": "VR Headsets"
            },
            {
                  "title": "Samsung Galaxy Tab S10 Ultra",
                  "price": 1199,
                  "category": "Tablets"
            },
            {
                  "title": "Google Pixel 7 Pro",
                  "price": 899,
                  "category": "Smart Phones"
            },
            {
                  "title": "Microsoft Surface Laptop 5",
                  "price": 1299,
                  "category": "Laptops"
            },
            {
                  "title": "Pico 4 Ultra",
                  "price": 429,
                  "category": "VR Headsets"
            },
            {
                  "title": "Apple Watch Series 9",
                  "price": 499,
                  "category": "Smart Watches"
            },
            {
                  "title": "Lenovo ThinkPad X1 Carbon Gen 9",
                  "price": 1899,
                  "category": "Laptops"
            },
            {
                  "title": "Dell XPS 13",
                  "price": 1399,
                  "category": "Laptops"
            },
            {
                  "title": "Samsung Galaxy S23 Ultra",
                  "price": 1199,
                  "category": "Smart Phones"
            },
            {
                  "title": "Samsung Galaxy Watch 6",
                  "price": 349,
                  "category": "Smart Watches"
            },
            {
                  "title": "Garmin Venu 2 Plus",
                  "price": 449,
                  "category": "Smart Watches"
            },
            {
                  "title": "Apple iPad Pro 12.9 (2024)",
                  "price": 1099,
                  "category": "Tablets"
            },
            {
                  "title": "Asus ROG Zephyrus G14",
                  "price": 1799,
                  "category": "Laptops"
            },
            {
                  "title": "Microsoft Surface Pro 9",
                  "price": 999,
                  "category": "Tablets"
            },
            {
                  "title": "Sony PlayStation VR2",
                  "price": 549,
                  "category": "VR Headsets"
            },
            {
                  "title": "Amazon Fire HD 10 Plus",
                  "price": 179,
                  "category": "Tablets"
            },
            {
                  "title": "Meta Quest 3",
                  "price": 499,
                  "category": "VR Headsets"
            },
            {
                  "title": "HP Spectre x360",
                  "price": 1599,
                  "category": "Laptops"
            },
            {
                  "title": "Lenovo Tab P12 Pro",
                  "price": 699,
                  "category": "Tablets"
            },
            {
                  "title": "iPhone 14 Pro Max",
                  "price": 1099,
                  "category": "Smart Phones"
            }
      ]


      return (
            <>
                  <div className="bg-primary text-slate-50 py-8">
                        <Heading
                              title='statistics'
                              subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
                        />
                  </div>
                  <div className='w-11/12 lg:w-10/12 mx-auto font-inter'>
                        <h3 className="font-bold text-2xl py-7">Statistics</h3>
                        <div className="py-10">
                              <ResponsiveContainer height={350} >
                                    <BarChart data={data}>
                                          <XAxis dataKey="title" fontSize={12} />
                                          <YAxis />
                                          <Tooltip />
                                          <Legend />
                                          <Bar dataKey="price" fill="#9538E2" />
                                          <Bar dataKey="category" fill="#1008E2" />
                                    </BarChart>
                              </ResponsiveContainer>
                        </div>
                  </div>
            </>
      );
};

export default Statistics;