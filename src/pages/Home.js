import React from 'react'
import { FaRocket,FaUsers,FaHandshake,FaLightbulb,FaBoxes } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";

const Home = () => {
  return (
    <main>
      {/* hero */}
      <section>
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-center text-center">
            <div className="mt-10">
              <div>
                <h1><b>Experienced Business</b> </h1>
                <h1><b>Solutions Integrator</b></h1>
                <br />
                <div>
                  <button className="px-5 py-2 text-white bg-[#e8505b] rounded-full hover:border hover:border-[#e8505b] hover:bg-white hover:text-[#e8505b]">Learn More</button>
                </div>
              </div>
              <div className="mt-10">
                <img width={1000}  src="https://htmlrev.com/preview/sena/images/header.svg" alt="hero" />
              </div>
              <div className="flex flex-wrap justify-between text-left mt-20">
                <div className="p-4 space-y-2">
                  <p className="flex text-[#e8505b] items-center"><FaRocket/>&nbsp;&nbsp;EXPERIENCE</p>
                  <h5><b>10 Years Of Business Solution <br /> Integration Experience</b></h5>
                  <p>We love to connect and manage complex <br /> business solutions systems for small and <br /> medium sized companies globally</p>
                </div>
                <div className="p-4 space-y-2">
                  <p className="flex text-[#e8505b] items-center"><FaHandshake/>&nbsp;&nbsp;PARTNERS</p>
                  <h5><b>Enduring Partnerships With<br /> Solution Providers</b></h5>
                  <p>Partnerships represent a key pillar of our <br />development strategy. We invest resources <br />to preserve them for the long run</p>
                </div>
                <div className="p-4 space-y-2">
                  <p  className="flex text-[#e8505b] items-center"><FaUsers/>&nbsp;&nbsp;TEAM</p>
                  <h5><b>Skilled Team Capable Of <br />Delivering Great Results</b></h5>
                  <p>Our team is our core strength. We rely on <br />each other's skills and experience to delivery<br />huge value to our loyal customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#f5f5f5]">
          <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-evenly my-20">
              <div className="space-y-4 p-4">
                <div>
                  <h3><b>Just Fill Out The Form To</b></h3>
                  <h3><b>Schedule A Quick Call</b></h3>
                </div>
                <p>Use the following form to setup a consultative call with <br /> one of our staff members in order to send you a custom<br /> offer. Fill the form and we'll call you in 24h</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <h2 className="text-[#e8505b]"><BsDot/></h2>
                    <p><b>No costs</b> from your side, the call is free of charge</p>
                  </div>
                  <div className="flex items-center">
                    <h2 className="text-[#e8505b]"><BsDot/></h2>
                    <p><b>No costs</b> from your side, the call is free of charge</p>
                  </div>
                  <div className="flex items-center">
                    <h2 className="text-[#e8505b]"><BsDot/></h2>
                    <p><b>No costs</b> from your side, the call is free of charge</p>
                  </div>
                  <div className="flex items-center">
                    <h2 className="text-[#e8505b]"><BsDot/></h2>
                    <p><b>No costs</b> from your side, the call is free of charge</p>
                  </div>
                  <div className="flex items-center">
                    <h2 className="text-[#e8505b]"><BsDot/></h2>
                    <p><b>No costs</b> from your side, the call is free of charge</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
               <form action="">
                <div className="p-4">
                    <label htmlFor="">
                      <input 
                        type="text" 
                        required
                        placeholder="Name"
                        className="px-4 py-3 border border-slate-400 focus:outline-none focus:border-[#e8505b]"
                      />
                    </label>
                  </div>
                  <div className="p-4">
                    <label htmlFor="">
                      <input 
                        type="email" 
                        required
                        placeholder="Email"
                        className="px-4 py-3 border border-slate-400 focus:outline-none focus:border-[#e8505b]"
                      />
                    </label>
                  </div>
                  <div className="p-4">
                    <label htmlFor="">
                      <input 
                        type="text" 
                        required
                        placeholder="Phone"
                        className="px-4 py-3 border border-slate-400 focus:outline-none focus:border-[#e8505b]"
                      />
                    </label>
                  </div>
                  <div className="p-4">
                    <label htmlFor="">
                      <select name="" id="" required className="px-4 py-3 border border-slate-400 focus:outline-none focus:border-[#e8505b] bg-white w-full">
                        <option value="Select">Select Solution...</option>
                        <option value="Select">ERP Solution</option>
                        <option value="Select">CRM Solution</option>
                        <option value="Select">SFA Solution</option>
                        <option value="Select">WMS Solution</option>
                      </select>
                    </label>
                  </div>
                  <div className="p-4">
                    <button className="w-full px-5 py-3 text-white bg-[#e8505b] rounded-full hover:border hover:border-[#e8505b] hover:bg-white hover:text-[#e8505b]">Submit</button>
                  </div>
               </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto p-4">
          <br />
          <div className="text-center my-10 space-y-2">
            <h2><b>Software Integration Services</b></h2>
            <p>We offer premium business software integration services to optimize business flows, <br /> reduce costs and increase revenues. We offer our services world wide</p>
          </div>
          <br />
          <div className="flex flex-wrap justify-center text-center gap-5 my-10">
            <div className="p-4 bg-[#f5f5f5] space-y-3">
              <h1 className="flex justify-center text-[#e8505b]"><FaLightbulb/></h1>
              <h3>ERP Integration</h3>
              <p>Keep track of all your <br /> resources and optimize the <br /> way your staff uses them</p>
            </div>
            <div className="p-4 bg-[#f5f5f5] space-y-3">
              <h1 className="flex justify-center text-[#e8505b]"><FaRocket/></h1>
              <h3>CRM Integration</h3>
              <p>Your customer base is one <br /> of your major assets. Use it <br /> wisely for results</p>
            </div>
            <div className="p-4 bg-[#f5f5f5] space-y-3">
              <h1 className="flex justify-center text-[#e8505b]"><MdPhoneIphone/></h1>
              <h3>SFA Integration</h3>
              <p>Automate your sales force <br /> to increase revenues and <br /> manage them better</p>
            </div>
            <div className="p-4 bg-[#f5f5f5] space-y-3">
              <h1 className="flex justify-center text-[#e8505b]"><FaBoxes/></h1>
              <h3>WMS Integration</h3>
              <p>Use a dedicated software to <br /> optimize and increase <br /> warehouse speed</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto p-4 my-10">
          <div className="flex flex-wrap justify-evenly items-center">
            <div className="p-4 space-y-3">
              <h1 className="text-[#e8505b]"><FaLightbulb/></h1>
              <h3><b>ERP Integration Service <br /> Resource Planning</b></h3>
              <p>A good ERP system is mandatory for the well being of your <br /> company. It's the backbone of your software infrastructure</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <h2 className="text-[#e8505b]"><BsDot/></h2>
                  <p><b>For startups</b> which have less data and operations</p>
                </div>
                <div className="flex items-center">
                  <h2 className="text-[#e8505b]"><BsDot/></h2>
                  <p><b>For startups</b> which have less data and operations</p>
                </div>
              </div>
            </div>
            <div>
              <img width={500} src="https://htmlrev.com/preview/sena/images/details-1.svg" alt="details" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto p-4 my-10">
          <div className="flex flex-wrap justify-evenly items-center">
            <div>
              <img width={500} src="https://htmlrev.com/preview/sena/images/details-2.svg" alt="details" />
            </div>
            <div className="p-4 space-y-3">
              <h1 className="text-[#e8505b]"><FaRocket/></h1>
              <h3><b>CRM Integration Service <br /> Customer Relationship</b></h3>
              <p>It's very hard to build customer trust but once you secure it <br /> then it will be much easier to sell something to your users. Use <br />a good and proven solution to manage customers</p>
              <br />
              <div className="flex flex-wrap space-x-3">
                <button className="px-6 py-2 text-white bg-[#e8505b] rounded-full hover:border hover:border-[#e8505b] hover:bg-white hover:text-[#e8505b]">Terms</button>
                <button className="px-6 py-2 border border-slate-400  rounded-full hover:text-white hover:bg-neutral-700">Privacy</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto p-4 my-10">
          <div className="flex flex-wrap justify-evenly items-center">
            <div className="p-4 space-y-3">
              <h1 className="text-[#e8505b]"><MdPhoneIphone/></h1>
              <h3><b>SFA Integration Service <br /> Sales Force Automation</b></h3>
              <p>For field sales workers there's nothing more important than a <br /> reliable interface to the company's knowledge base app</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <h2 className="text-[#e8505b]"><BsDot/></h2>
                  <p><b>For startups</b> which have less data and operations</p>
                </div>
                <div className="flex items-center">
                  <h2 className="text-[#e8505b]"><BsDot/></h2>
                  <p><b>For startups</b> which have less data and operations</p>
                </div>
              </div>
            </div>
            <div>
              <img width={500} src="https://htmlrev.com/preview/sena/images/details-3.svg" alt="details" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto p-4 my-10">
          <div className="flex flex-wrap justify-evenly items-center">
            <div>
              <img width={500} src="https://htmlrev.com/preview/sena/images/details-4.svg" alt="details" />
            </div>
            <div className="p-4 space-y-3">
              <h1 className="text-[#e8505b]"><FaBoxes/></h1>
              <h3><b>WMS Integration Service <br /> Warehouse Management</b></h3>
              <p>An increased warehouse accuracy and efficiency can lead to <br /> tremendous savings in terms of time and money. Also your <br />customers will be much happier receiving the right orders</p>
              <br />
              <div className="flex flex-wrap space-x-3">
                <button className="px-6 py-2 text-white bg-[#e8505b] rounded-full hover:border hover:border-[#e8505b] hover:bg-white hover:text-[#e8505b]">Terms</button>
                <button className="px-6 py-2 border border-slate-400  rounded-full hover:text-white hover:bg-neutral-700">Privacy</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto p-4">
          <div className="text-center space-y-3 p-4 my-8">
            <h3><b>Our Process Defines Us</b></h3>
            <p>We serve small and medium sized companies in all tech related industries with high <br /> quality business growth services based on many years of software development</p>
          </div>
          <div className="flex justify-center">
            <img width={1000} src="https://htmlrev.com/preview/sena/images/video-preview.svg" alt="preview" />
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#f5f5f5] my-20 py-20">
          <div className="container mx-auto p-4">
            <div className="flex justify-center">
              <div className="text-center">
                <h2><b>Our pricing policy is designed to cover budgets for all <br />companies without sacrificing quality</b></h2>
                <br />
                <button className="px-6 py-2 text-white bg-[#e8505b] rounded-full hover:border hover:border-[#e8505b] hover:bg-white hover:text-[#e8505b]">See Prices</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto p-4">
          <div className="flex justify-center my-10">
            <div className="text-center space-y-4">
              <h2><b>Subscribe To Stay Updated</b></h2>
              <p>We serve small and medium sized companies in all tech related industries with high <br /> quality business growth services based on many years of software development</p>

              <br />
              <div className="flex items-center justify-center">
                <label htmlFor="">
                  <input 
                    type="email" 
                    required
                    placeholder="Email address"
                    className="px-6 py-3 border border-slate-400 focus:outline-none focus:border-[#e8505b] rounded-l-full"
                  />
                </label>
                <div>
                  <button className="px-6 py-3.5 text-white bg-[#e8505b] rounded-r-full hover:border hover:border-[#e8505b] hover:bg-white hover:text-[#e8505b]">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
