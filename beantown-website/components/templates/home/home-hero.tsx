import React from "react";

export default function HomeHero() {
  return (
    <section id="home_page_hero" className="">
      <div className="flex-shrink-0">
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
          className="w-full h-auto object-cover "
          src="images/home_page/homepageHero.svg"
          alt="Home Page Hero Image"
        ></img>
      </div>
    </section>
  );
}
