import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
export default function ServiceAreas() {
  return (
    <section id="serviceAreas" className=" ">
      <div className="p-4">
        <div className="flex-col md:flex ">
          <div className="border-r-4 md:w-1/2">
            <h1 className="text-xl font-bold">Beantown Services Areas</h1>
          </div>
          <div className="pt-4">
            <p>
              {" "}
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>

        <div className=" pt-12">
          <img src="images/home_page/beantownServiceArea.svg" />
          <div className="bg-[#FFFFFF]  border rounded-lg p-4">
            <div>
              {" "}
              <h1 className="text-lg font-bold">Service Areas</h1>
            </div>

            <div className="flex flex-wrap justify-around space-y-2 bg-[#FFFFFF] ">
              <div className="px-4 py-2 justify-center flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faMapLocation} />
                </span>
                <span>Plymouth, MA</span>
              </div>
              <div className="px-4 py-2 justify-center flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faMapLocation} />
                </span>
                <span>Plymouth, MA</span>
              </div>
              <div className="px-4 py-2 justify-center flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faMapLocation} />
                </span>
                <span>Plymouth, MA</span>
              </div>
              <div className="px-4 py-2 justify-center flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faMapLocation} />
                </span>
                <span>Plymouth, MA</span>
              </div>
              <div className="px-4 py-2 justify-center flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faMapLocation} />
                </span>
                <span>Plymouth, MA</span>
              </div>
              <div className="px-4 py-2 justify-center flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faMapLocation} />
                </span>
                <span>Plymouth, MA</span>
              </div>
              <div className="px-4 py-2 justify-center flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faMapLocation} />
                </span>
                <span>Plymouth, MA</span>
              </div>
              <div className="px-4 py-2 justify-center flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faMapLocation} />
                </span>
                <span>Plymouth, MA</span>
              </div>
              <div className="px-4 py-2 justify-center  flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faMapLocation} />
                </span>
                <span>Plymouth, MA</span>
              </div>
              <div className="px-4 py-2 justify-center flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faMapLocation} />
                </span>
                <span>Plymouth, MA</span>
              </div>
              <div className="px-4 py-2 justify-center flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faMapLocation} />
                </span>
                <span>Plymouth, MA</span>
              </div>
              <div className="px-4 py-2 justify-center flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faMapLocation} />
                </span>
                <span>Plymouth, MA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
