import React from "react";
import FAQDisclosure from "../../template/home/faq_disclosure";

export default function Faq() {
  return (
    <section id="faq">
      <div className="bg-blue-100 mt-16">
        <div className="flex flex-col items-center mx-6">
          <h1 className="text-xl font-bold mt-2">Frequently Asked Questions</h1>
          <p className="text-center py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="border  rounded-lg text-white text-xs  bg-[#15284C] px-4 py-2 ">
            View More
          </button>
        </div>
        <FAQDisclosure />
      </div>
    </section>
  );
}
