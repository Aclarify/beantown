import React from 'react'

export default function MassSave() {
  return (
    <section id="massSave" className="pt-32 flex flex-col">
    <div className="flex flex-col-reverse md:flex md:flex-row  items-center">
      <div className="p-8 m-8 space-y-4 flex flex-col items-center w-full  md:w-1/2">
        <p className="text-4xl font-bold">
          Mass Save: Proudly Doing Our Part to Help the South Shore Go Green
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim venias. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam
        </p>

        <button className="border rounded-lg text-white text-sm  bg-red-700 p-4 ">
          Know More
        </button>
      </div>
      <div className="group">
        <img
          className="group-hover:scale-110 transition-transform duration-200 ease-in-out"
          src=" images/cooling-and-heating-service-page/mass-save-blob.svg"
        />
      </div>
    </div>
  </section>
  )
}
