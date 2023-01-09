import groq from "groq";
import client from "../lib/sanity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLocation,
  faPhone,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import FAQDisclosure from "../components/faq_disclosure";
// import Footer from "../components/Footer";

const headerInfoQuery = groq`*[_type == "header"][0]{
  logo,
  headerButton,
  navGroup[]{
    groupTitle,
    links[]->{
         linkName
       }
   }
}`;

const footerInfoQuery = groq`*[_type =="footer"][0]{
  contact,
  description,
  logo,
  navGroup[]{
  groupTitle,
  links[]->{
         linkName
       }
   }
  
}`;

export async function getStaticProps(context: any) {
  const headerInfo = await client.fetch(headerInfoQuery);
  const footerInfo = await client.fetch(footerInfoQuery);
  console.log(footerInfo);

  return {
    props: {
      headerInfo,
      footerInfo,
    },
  };
}

export default function Home({ headerInfo }: any) {
  const servicesNavSubLinks = headerInfo.navGroup[0];
  console.log(servicesNavSubLinks);

  return (
    <>
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

      <section id="services" className="pt-12">
        <div className="border space-y-5">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          {/*   grid for services card */}
          <div className="grid grid-cols-1 md:grid-cols-3 mx-8 md:space-x-5 space-y-5 ">
            <div className="border rounded-lg flex flex-col  items-center gap-4 bg-[#FFFFFF]">
              <a>
                <img src="images/home_page/servicesCardImage1.svg" />
              </a>
              <h1>Electrical Services</h1>
              <button className="border rounded-lg text-white text-xs  bg-[#15284C] p-2 ">
                Book Now
              </button>
            </div>
            <div className="border rounded-lg flex flex-col items-center gap-4 bg-[#FFFFFF]">
              <a>
                <img src="images/home_page/servicesCardImage1.svg" />
              </a>
              <h1>Electrical Services</h1>
              <button className="border rounded-lg text-white text-xs  bg-[#15284C] p-2 ">
                Book Now
              </button>
            </div>
            <div className="border rounded-lg flex flex-col items-center gap-4 bg-[#FFFFFF]">
              <a>
                <img src="images/home_page/servicesCardImage1.svg" />
              </a>
              <h1>Electrical Services</h1>
              <button className="border rounded-lg text-white text-xs  bg-[#15284C] p-2 ">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="whyUs" className="pt-32 flex flex-col">
        <div className="flex flex-col-reverse md:flex md:flex-row  items-center">
          <div className="p-8 m-8 space-y-4 flex flex-col items-center ">
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
          <div className="">
            <img src="images/home_page/whyUsBlobImage.svg" />
          </div>
        </div>

        <div className=" p-2 m-2 pt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex border rounded-lg bg-[#F5F5F5]">
            <img className="p-1" src="images/home_page/quality.svg" />
            <div className="">
              <h1 className="text-xl font-bold">Quality</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex border rounded-lg bg-[#F5F5F5]">
            <img className="p-1" src="images/home_page/trustWorthy.svg" />
            <div className="">
              <h1 className="text-xl font-bold">Trustworthy</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex border rounded-lg bg-[#F5F5F5]">
            <img className="p-1" src="images/home_page/efficiency.svg" />
            <div className="">
              <h1 className="text-xl font-bold">Efficiency</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex border rounded-lg bg-[#F5F5F5] ">
            <img className="p-1" src="images/home_page/expertise.svg" />
            <div className="">
              <h1 className="text-xl font-bold">Expertise</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className=" pt-32 ">
        <div className="md:hidden">
          <div className="bg-[#F5F5F5]  w-full flex-none  gap-5   ">
            <div className="p-8 m-8">
              <h4>Clients Testimonial</h4>
              <h1 className="text-2xl">What Do They Say?</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-nowrap overflow-x-auto space-x-4  ">
          {/* card data from sanity */}

          <div className="hidden md:flex flex-col items-center bg-[#F5F5F5]   w-[250px]  flex-none gap-2 ">
              <div className="bg-[#F5F5F5]  flex-none  gap-5   ">
                <div className="p-8 m-8">
                  <h4>Clients Testimonial</h4>
                  <h1 className="text-2xl">What Do They Say?</h1>
                </div>
              </div>
              <div className='flex flex-col'>           
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

          <div className="flex flex-col items-center bg-[#F5F5F5]   w-[250px]  flex-none gap-2 ">
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
                  Tony did a wonderful job with both my carpet and my sofa. He
                  was a pleasure to deal with - kind, punctual, professional and
                  just an all round great guy. Will definitely use his services
                  again and would recommend him to anyone!
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#F5F5F5]   w-[250px]  flex-none gap-2 ">
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
                  Tony did a wonderful job with both my carpet and my sofa. He
                  was a pleasure to deal with - kind, punctual, professional and
                  just an all round great guy. Will definitely use his services
                  again and would recommend him to anyone!
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#F5F5F5]  w-[250px]  flex-none gap-2 ">
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
                  Tony did a wonderful job with both my carpet and my sofa. He
                  was a pleasure to deal with - kind, punctual, professional and
                  just an all round great guy. Will definitely use his services
                  again and would recommend him to anyone!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
         
          <div className='flex items-center justify-between '>
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

      <section id="service_area" className=" ">
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
            <div className="bg-[#FFFFFF]">
              <h1 className="text-lg font-bold">Service Areas</h1>
              <div className="grid grid-cols-2 gap-2 m-4 bg-[#FFFFFF]">
                <div className="px-4 flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth, MA</span>
                </div>
                <div className="px-4 flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth, MA</span>
                </div>
                <div className="px-4  flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth, MA</span>
                </div>
                <div className="px-4 flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth, MA</span>
                </div>
                <div className="px-4 flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth, MA</span>
                </div>
                <div className="px-4  flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth, MA</span>
                </div>
                <div className="px-4 flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth, MA</span>
                </div>
                <div className="px-4 flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth, MA</span>
                </div>
                <div className="px-4  flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth, MA</span>
                </div>
                <div className="px-4  flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth, MA</span>
                </div>
                <div className="px-4  flex space-x-2 bg-blue-100 border text-xs rounded-lg">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth, MA</span>
                </div>
                <div className="px-4  flex space-x-2 bg-blue-100 border text-xs rounded-lg">
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

      <section id="blog" className="flex flex-col p-4 mt-12">
        <div className="text-xl font-bold text-center">
          <h1>Lorem ipsum dolor sit amet consectetur adipiscing</h1>
        </div>
        <div className="text-xs text-center py-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-nowrap overflow-x-auto ">
          <div className="flex-none w-[250px] p-4 ">
            <img src="images/home_page/blogImage1.svg" />
            <p className="pt-4 text-xl font-bold">
              Let us build the bridge between your brand and your customer!!!
            </p>
            <p className="pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <button className="text-md font-bold underline">Read More</button>
          </div>
          <div className="flex-none w-[250px] p-4">
            <img src="images/home_page/blogImage1.svg" />
            <p className="pt-4 text-xl font-bold">
              Let us build the bridge between your brand and your customer!!!
            </p>
            <p className="pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <button className="text-md font-bold underline">Read More</button>
          </div>
          <div className="flex-none w-[250px] p-4">
            <img src="images/home_page/blogImage1.svg" />
            <p className="pt-4 text-xl font-bold">
              Let us build the bridge between your brand and your customer!!!
            </p>
            <p className="pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
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

      <section id="faq">
        <div className="bg-blue-100 mt-16">
          <div className="flex flex-col items-center mx-6">
            <h1 className="text-xl font-bold mt-2">
              Frequently Asked Questions
            </h1>
            <p className="text-center py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <button className="border  rounded-lg text-white text-xs  bg-[#15284C] px-4 py-2 ">
              View More
            </button>
          </div>
          <FAQDisclosure />
        </div>
      </section>
      <section id="brand">
        <div className="flex  justify-center">
          <span className="text-l font-bold">Proud To Represent</span>
        </div>
        <div className="flex flex-nowrap overflow-x-auto">
          <div className="flex-none w-[150px] p-4">
            <img src="images/home_page/brands/mitsubishi.svg" />
          </div>
          <div className="flex-none w-[150px] p-4">
            <img src="images/home_page/brands/lennox.svg" />
          </div>
          <div className="flex-none w-[150px] p-4">
            <img src="images/home_page/brands/mitsubishi.svg" />
          </div>
          <div className="flex-none w-[150px] p-4">
            <img src="images/home_page/brands/lennox.svg" />
          </div>
        </div>
      </section>

      <section id="footercta">
        <div className="md:flex ">
          <div className="">
            <img src="images/home_page/home_page_footer_cta_image.svg" />
          </div>
          <div className="bg-blue-100 relative w-full">
            <img
              className="object-cover animate-ping"
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
                <img
                  className="mx-auto h-5 w-5"
                  src="images/home_page/fb.svg"
                />
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

          <div className="pb-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim{" "}
            </p>
          </div>

          <div className="flex justify-center items-center align-middle pt-6 border-t-2 border-grey-100 ">
            <span className="text-xs">© Beantown 2022 · Privacy Policy</span>
          </div>
        </div>
      </section>
    </>
  );
}
