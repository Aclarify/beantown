import React, { Component } from "react";

export default class WhyUs extends Component {
  render() {
    return (
      <section id="whyUs" className="p-6 flex flex-col">
        <div className="flex flex-col-reverse md:flex md:flex-row  items-center">
          <div className=" pt-8 space-y-4 flex flex-col items-center text-justify ">
            <h1 className="text-4xl font-bold">Why Us?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim venias.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              laborum magnam vitae blanditiis corporis adipisci consequuntur,
              soluta saepe veritatis delectus!
            </p>
            <button className="border rounded-lg text-white text-sm  bg-[#15284C] p-4  ">
              Know More
            </button>
          </div>
          <div className="group">
            <img
              className="group-hover:scale-125  transition-all  duration-500"
              src=" images/home_page/whyUsBlobImage.svg"
            />
          </div>
        </div>

        <div className="  pt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex border rounded-lg bg-[#F5F5F5]">
            <img className="p-1" src="images/home_page/quality.svg" />
            <div className="p-2">
              <h1 className=" text-2xl font-bold">Quality</h1>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex border rounded-lg bg-[#F5F5F5]">
            <img className="p-1" src="images/home_page/trustWorthy.svg" />
            <div className="p-2">
              <h1 className="text-2xl font-bold">Trustworthy</h1>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex border rounded-lg bg-[#F5F5F5]">
            <img className="p-1" src="images/home_page/efficiency.svg" />
            <div className="p-2">
              <h1 className="text-2xl font-bold">Efficiency</h1>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex border rounded-lg bg-[#F5F5F5] ">
            <img className="p-1" src="images/home_page/expertise.svg" />
            <div className="p-2">
              <h1 className="text-2xl font-bold">Expertise</h1>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
