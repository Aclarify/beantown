import React from 'react'

export default function HeatingCoolingPageHero() {
  return (
    <section id="cooling-and-heating-hero">
        <div className="hidden md:block">
          <div className="space-y-4   md:mt-32 absolute  text-white   md:p-12">
            <p className="text-sm  md:text-4xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className=" md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="border rounded-lg md:text-xl bg-white text-black ">
              Book Now
            </button>
          </div>
          <img
            className="w-full h-auto object-cover "
            src="images/cooling-and-heating-service-page/hero/Desktop_Header.svg"
            alt="Home Page Hero Image"
          ></img>
        </div>
        <div className="inline md:hidden">
          <div className="space-y-4  mt-12 md:mt-64 absolute w-1/2 text-white p-2  md:p-12">
            <p className="text-sm  md:text-4xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-sm  md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="border rounded-lg text-xs  md:text-xl bg-white text-black p-2">
              Book Now
            </button>
          </div>
          <img
            className="w-full h-auto object-cover  "
            src="images/cooling-and-heating-service-page/hero/Mobile_Hero.svg"
            alt="Home Page Hero Image"
          ></img>
        </div>
      </section>
  )
}
