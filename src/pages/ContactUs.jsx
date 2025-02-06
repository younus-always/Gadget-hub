import Heading from "../components/Heading";
import useTitle from "../components/useTitle";
import contact from '../assets/contact.svg'
const ContactUs = () => {
      useTitle('Contact us')

      return (
            <section>
                  <div className="bg-primary text-slate-50 py-8">
                        <Heading title={'contact us'}
                              subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' />
                  </div>
                  <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col lg:pt-10 xl:pt-0 lg:flex-row items-center justify-between">
                        <div className="w-11/12 md:w-10/12 lg:w-[53%] xl:w-[58%]">
                              <img src={contact} alt="" />
                        </div>
                        <div className="rounded-xl shadow-xl p-6 bg-white w-11/12 md:w-10/12 lg:w-[44%] xl:w-[40%]">
                              <h2 className="text-3xl font-bold">Get in Touch</h2>
                              <p className="font-semibold py-3">You can reach us anytime</p>
                              <form onSubmit={(e) => e.preventDefault()} className="mt-5 space-y-3">
                                    <div className="flex items-center justify-between gap-3">
                                          <div className="rounded-xl border flex-1">
                                                <input type="text" name="" id="" placeholder="First name"
                                                      className="py-2 px-4 bg-transparent outline-none w-full" />
                                          </div>
                                          <div className="rounded-xl border flex-1">
                                                <input type="text" name="" id="" placeholder="Last name"
                                                      className="py-2 px-4 bg-transparent outline-none w-full" />
                                          </div>
                                    </div>
                                    <div className="rounded-xl border">
                                          <input type="email" name="" id="" placeholder="Your email"
                                                className="py-2 px-4 bg-transparent outline-none w-full" />
                                    </div>
                                    <div className="rounded-xl border">
                                          <input type="number" name="" id="" placeholder="Phone number"
                                                className="py-2 px-4 bg-transparent outline-none w-full" />
                                    </div>
                                    <div className="rounded-xl border">
                                          <textarea name="" id="" placeholder="How can we help?"
                                                className="py-2 px-4 bg-transparent outline-none w-full resize-y h-32"></textarea>
                                    </div>
                                    <button type="submit" className="bg-primary text-slate-50 font-bold py-2 px-4 text-center rounded-2xl w-full"> Submit </button>
                              </form>
                              <div className="text-gray-500 font-semibold text-center pt-3">
                                    By contacting us you agree to our <span className="text-gray-900">Terms of Service</span> <br /> and <span className="text-gray-900">Privacy Policy</span>
                              </div>
                        </div>
                  </div>
                  <div className="w-11/12 lg:w-10/12 mx-auto py-10">
                              <h2 className="text-4xl font-bold my-5">Contact Us</h2>
                              <p className="text-gray-700 font-semibold">Email, call or complete the form to learn how <br /> Gadget_Hub can solve your messaging problem.</p>
                              <div className="flex flex-col gap-3 my-6">
                                    <span className="text-gray-600 font-semibold">info@gadgetHub.io</span>
                                    <span className="text-gray-600 font-semibold">+8801795270676</span>
                                    <span className="font-bold underline ">Customer Support</span>
                              </div>
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-10">
                                    <div className="space-y-2 w-7/12 md:w-full">
                                          <h4 className="text-xl font-bold">Customer Support</h4>
                                          <p className="text-gray-600">Our support team is available around the clock to address any concerns or queries you may have.</p>
                                    </div>
                              <div className="space-y-3  w-7/12 md:w-full">
                                          <h4 className="text-xl font-bold">Feedback and Suggestions</h4>
                                          <p className="text-gray-600">We value your feedback and are continuously working to improve Gadget_Hub. Your input is crucial in shapping the future of Gadget_Hub.</p>
                                    </div>
                              <div className="space-y-3  w-7/12 md:w-full">
                                          <h4 className="text-xl font-bold">Media Inquiries</h4>
                                          <p className="text-gray-600">For media-related question or press inquiries, please contact us at media@gadgetHub.com.</p>
                                    </div>

                              </div>
                        </div>
            </section>
      );
};

export default ContactUs;