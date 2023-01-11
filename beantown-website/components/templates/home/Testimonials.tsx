import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  return (
    <section id="testimonials" className=" pt-32 ">
      <div className="md:hidden">
        <div className="bg-blue-50  w-full flex-none  gap-5   ">
          <div className="p-8 m-8">
            <h4>Clients Testimonial</h4>
            <h1 className="text-2xl">What Do They Say?</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-nowrap overflow-x-auto space-x-4 bg-blue-50 ">
        {/* card data from sanity */}

        <div className="hidden md:flex flex-col items-center   w-[250px]  flex-none gap-2 ">
          <div className="  flex-none  gap-5   ">
            <div className="p-8 m-8 bg-blue-50">
              <h4>Clients Testimonial</h4>
              <h1 className="text-2xl">What Do They Say?</h1>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-2 m-4 ">
              <button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
              <button className="w-8 border rounded-lg h-2 bg-[#1E1E1E] "></button>
              <button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
              <button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
            </div>
            <div className="flex gap-4 pt-4 ">
              <button className="bg-blue-100 py-2 px-4 rounded-full w-16">
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button className=" py-2 px-4 rounded-full w-16 text-white bg-[#1E1E1E]">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-[#FFFFFF]   w-[250px]  flex-none gap-2 border rounded-xl">
          <div className="p-4">
            <img src="images/home_page/testimonialCardsImageUnionVector.svg" />
          </div>
          <div className="p-4 flex flex-col gap-2 items-center ">
            <div>
              <h1>Name From cms</h1>
            </div>
            <div>
              <h4>Details of Clients from cms</h4>
            </div>
            <div className="p-4">
              <p>
                Tony did a wonderful job with both my carpet and my sofa. He was
                a pleasure to deal with - kind, punctual, professional and just
                an all round great guy. Will definitely use his services again
                and would recommend him to anyone!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-[#FFFFFF]    w-[250px]  flex-none gap-2 border rounded-xl ">
          <div className="p-4">
            <img src="images/home_page/testimonialCardsImageUnionVector.svg" />
          </div>
          <div className="p-4 flex flex-col gap-2 items-center ">
            <div>
              <h1>Name From cms</h1>
            </div>
            <div>
              <h4>Details of Clients from cms</h4>
            </div>
            <div className="p-4">
              <p>
                Tony did a wonderful job with both my carpet and my sofa. He was
                a pleasure to deal with - kind, punctual, professional and just
                an all round great guy. Will definitely use his services again
                and would recommend him to anyone!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-[#FFFFFF]   w-[250px]  flex-none gap-2 border rounded-xl ">
          <div className="p-4">
            <img src="images/home_page/testimonialCardsImageUnionVector.svg" />
          </div>
          <div className="p-4 flex flex-col gap-2 items-center ">
            <div>
              <h1>Name From cms</h1>
            </div>
            <div>
              <h4>Details of Clients from cms</h4>
            </div>
            <div className="p-4">
              <p>
                Tony did a wonderful job with both my carpet and my sofa. He was
                a pleasure to deal with - kind, punctual, professional and just
                an all round great guy. Will definitely use his services again
                and would recommend him to anyone!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex items-center justify-between ">
          <div className="flex gap-2 m-4">
            <button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
            <button className="w-8 border rounded-lg h-2 bg-[#1E1E1E] "></button>
            <button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
            <button className="w-8 border rounded-lg h-2 bg-blue-100 "></button>
          </div>
          <div className="flex gap-4 pt-4 ">
            <button className="bg-blue-100 py-2 px-4 rounded-full w-16">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className=" py-2 px-4 rounded-full w-16 text-white bg-[#1E1E1E]">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
