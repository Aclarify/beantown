import React from 'react'

export default function Brands() {
  return (
    <section id="brand">
        <div className="flex  justify-center">
          <span className="text-l font-bold">Proud To Represent</span>
        </div>
        <div className="group flex flex-nowrap overflow-x-auto">
          <div className=" group-hover:scale-[0.55] hover:!scale-100 duration-500  flex-none w-[150px] p-4">
            <img src="images/home_page/brands/mitsubishi.svg" />
          </div>
          <div className=" group-hover:scale-[0.55] hover:!scale-100 duration-500  flex-none w-[150px] p-4">
            <img src="images/home_page/brands/lennox.svg" />
          </div>
          <div className=" group-hover:scale-[0.55] hover:!scale-100 duration-500 flex-none w-[150px] p-4">
            <img src="images/home_page/brands/mitsubishi.svg" />
          </div>
          <div className=" group-hover:scale-[0.55] hover:!scale-100 duration-500 flex-none w-[150px] p-4">
            <img src="images/home_page/brands/lennox.svg" />
          </div>
        </div>
      </section>
  )
}
