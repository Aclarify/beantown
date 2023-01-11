import React from "react";

export default function FooterCta() {
  return (
    <section id="footerCta">
      <div className="md:flex ">
        <div className="">
          <img src="images/home_page/home_page_footer_cta_image.svg" />
        </div>
        <div className="bg-blue-500 relative w-full">
          <img
            className="object-cover animate-pulse"
            src="images/home_page/footer_cta_theme/mask_group.svg"
          />
          <div className=" space-y-4  absolute bottom-20 inset-x-0 p-2  md:p-12">
            {" "}
            <div className="flex-col ">
              <div className="flex-col space-y-2 ">
                <p className="text-2xl  md:text-4xl font-bold text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-sm  md:text-2xl text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex justify-center pt-4">
                <button className="border rounded-lg text-xs  md:text-xl bg-[#15284C] text-white  p-2">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
