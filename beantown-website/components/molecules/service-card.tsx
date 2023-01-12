import React from 'react'

export default function ServiceCard() {
  return (
    <>
     <div className="group grid grid-cols-1 md:grid-cols-3 mx-8 md:space-x-5 space-y-5 ">
            <div className="group-hover:scale-[0.55]  hover:!scale-100 duration-500 cursor-pointer border rounded-lg flex flex-col  items-center gap-4 bg-[#FFFFFF]">
              <a>
                <img className="" src="images/home_page/servicesCardImage1.svg" />
              </a>
              <h1>Electrical Services</h1>
              <button className="border rounded-lg text-white text-xs  bg-[#15284C] p-2 ">
                Book Now
              </button>
            </div>
            <div className="group-hover:scale-[0.55]  hover:!scale-100 duration-500 cursor-pointer border rounded-lg flex flex-col items-center gap-4 bg-[#FFFFFF]">
              <a>
                <img src="images/home_page/servicesCardImage1.svg" />
              </a>
              <h1>Electrical Services</h1>
              <button className="border rounded-lg text-white text-xs  bg-[#15284C] p-2 ">
                Book Now
              </button>
            </div>
            <div className="group-hover:scale-[0.55]  hover:!scale-100 duration-500 cursor-pointer border rounded-lg flex flex-col items-center gap-4 bg-[#FFFFFF]">
              <a>
                <img src="images/home_page/servicesCardImage1.svg" />
              </a>
              <h1>Electrical Services</h1>
              <button className="border rounded-lg text-white text-xs  bg-[#15284C] p-2 ">
                Book Now
              </button>
            </div>
          </div>
    </>
  )
}
