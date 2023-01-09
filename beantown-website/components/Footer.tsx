import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <section id="footer">
      <div className="w-full h-auto bg-[#15284C] text-white px-4  ">
        {/* <img className='w-full ' src='/images/faq_page/FAQ_footer_blue_curve.svg' alt="Footer Curve Image"></img>           */}
        <div className="pt-10 max-w-sm">
          <h1 className="text-xl ">Services</h1>
          <div className="flex space-x-8">
            <span>Heating & Cooling</span>
            <span>Electrical</span>
            <span>Plumbing</span>
          </div>
        </div>

        <div className="pt-8 max-w-sm">
          <h1 className="text-xl font-bold">Company</h1>
          <div className="flex justify-between">
            <span>About Us</span>
            <span>Carreers</span>
            <span>Memberships</span>
            <span>FAQ</span>
            <span>Blog</span>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <span className="font-bold text-xl">Contact</span>
          </div>
          <div className="flex justify-start pt-2 space-x-2">
            <FontAwesomeIcon icon={faLocation} />
            <span>9 Aldrin Rd Suite 10, Plymouth, MA 02360</span>
          </div>
          <div className="flex justify-start pt-2 space-x-2 ">
            <FontAwesomeIcon icon={faPhone} />
            <span>(508) 594-3279</span>
          </div>
          <div className="flex justify-start pt-2 space-x-2 ">
            <FontAwesomeIcon icon={faMailBulk} />
            <span>info@brantownac.com</span>
          </div>
        </div>

        <div className="flex space-x-4 pt-8 ">
          <div>
            <img src="images/logo.svg" />
          </div>
          <div className="flex align-middle items-center space-x-2">
            <div className="rounded-full h-10 w-10 flex  items-center bg-white">
              <img className="mx-auto h-5 w-5" src="images/home_page/fb.svg" />
            </div>
            <div className="rounded-full h-10 w-10 flex  items-center bg-white">
              <img
                className="mx-auto h-5 w-5"
                src="images/home_page/instagram.svg"
              />
            </div>
            <div className="rounded-full h-10 w-10 flex  items-center bg-white">
              <img
                className="mx-auto h-5 w-5"
                src="images/home_page/twitter.svg"
              />
            </div>
          </div>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim{" "}
          </p>
        </div>

        <div className="flex justify-center pt-8 ">
          <span className="text-xs border-t-2 border-grey-100">
            © Beantown 2022 · Privacy Policy
          </span>
        </div>
      </div>
    </section>
  );
}
