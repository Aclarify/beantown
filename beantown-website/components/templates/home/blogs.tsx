import React from "react";

export default function Blogs() {
  return (
    <section id="blogs" className="flex flex-col p-4 mt-12">
      <div className="text-xl font-bold text-center">
        <h1>Lorem ipsum dolor sit amet consectetur adipiscing</h1>
      </div>
      <div className="text-xs text-center py-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      <div className="group flex flex-nowrap overflow-x-auto gap-5 ">
        <div className=" group-hover:scale-[0.85] hover:!scale-100 duration-500  flex-none w-[250px] p-4 ">
          <img src="images/home_page/blogImage1.svg" />
          <p className="pt-4 text-xl font-bold">
            Let us build the bridge between your brand and your customer!!!
          </p>
          <p className="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="text-md font-bold underline">Read More</button>
        </div>
        <div className=" group-hover:scale-[0.85] hover:!scale-100 duration-500 flex-none w-[250px] p-4">
          <img src="images/home_page/blogImage1.svg" />
          <p className="pt-4 text-xl font-bold">
            Let us build the bridge between your brand and your customer!!!
          </p>
          <p className="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="text-md font-bold underline">Read More</button>
        </div>
        <div className=" group-hover:scale-[0.85] hover:!scale-100 duration-500 flex-none w-[250px] p-4">
          <img src="images/home_page/blogImage1.svg" />
          <p className="pt-4 text-xl font-bold">
            Let us build the bridge between your brand and your customer!!!
          </p>
          <p className="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="text-md font-bold underline">Read More</button>
        </div>
      </div>
      <div className="items-center text-center pt-4">
        <button className="bg-[#15284C] text-white rounded-lg p-2 text-xs ">
          View More
        </button>
      </div>
    </section>
  );
}
