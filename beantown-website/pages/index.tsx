import groq from 'groq';
// import Footer from '../components/footer';
import client from '../lib/sanity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft,
  faMapLocation,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLocation,
  faPhone,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons';
import FAQDisclosure from '../components/faq_disclosure';

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
        <div className="">
          <div className="flex-col md:flex m-8 p-4">
            <div className="border-r-4 md:w-1/2">
              <h1 className="text-xl font-bold">Beantown Services Areas</h1>
            </div>
            <div className="">
              <p>
                {' '}
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>

          <div className="">
            <img src="images/home_page/beantownServiceArea.svg" />
            <div className="bg-[#FFFFFF]">
              <h1>Service Areas</h1>
              <div className="grid grid-cols-2 gap-2 m-4 bg-[#FFFFFF]">
                <div className="px-4 flex space-x-2 bg-slate-100 border rounded-lg">
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth</span>
                  <span>,</span>
                  <span> MA</span>
                </div>
                <div className="px-4 flex space-x-2 bg-slate-100 border rounded-lg">
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth</span>
                  <span>,</span>
                  <span> MA</span>
                </div>
                <div className="px-4  flex space-x-2 bg-slate-100 border rounded-lg">
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth</span>
                  <span>,</span>
                  <span> MA</span>
                </div>
                <div className="px-4  flex space-x-2 bg-slate-100 border rounded-lg">
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth</span>
                  <span>,</span>
                  <span> MA</span>
                </div>
                <div className="px-4  flex space-x-2 bg-slate-100 border rounded-lg">
                  <span>
                    {' '}
                    <FontAwesomeIcon icon={faMapLocation} />
                  </span>
                  <span>Plymouth</span>
                  <span>,</span>
                  <span> MA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="flex flex-col gap-2 p-4 ">
        <div className="text-xl font-bold">
          <h1>Lorem ipsum dolor sit amet consectetur adipiscing</h1>
        </div>
        <div className="text-xs">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="flex flex-nowrap overflow-x-auto ">
          <div className="flex-none w-[250px] p-4 ">
            <img src="images/home_page/blogImage1.svg" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <button className="text-xs underline">ReadMore</button>
          </div>
          <div className="flex-none w-[250px] p-4">
            <img src="images/home_page/blogImage1.svg" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <button className="text-xs underline">ReadMore</button>
          </div>
          <div className="flex-none w-[250px] p-4">
            <img src="images/home_page/blogImage1.svg" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <button className="text-xs underline">ReadMore</button>
          </div>
        </div>
        <div className="justify-center">
          <button className="bg-[#15284C] text-white rounded-lg p-2 text-xs ">
            Load More
          </button>
        </div>
      </section>

      <section id="faq">
        <div>
          <div className="flex flex-col place-items-center">
            <h1 className="text-xl font-bold">Frequently Asked Questions</h1>
            <p>
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
          <h1>Proud To Represent</h1>
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
            <div className="space-y-4  absolute bottom-20 inset-x-0 p-2  md:p-12">
              <p className="text-xl  md:text-4xl font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-sm  md:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="border rounded-lg text-xs  md:text-xl bg-[#15284C] text-white  p-2">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="footer">
        <div className="w-full h-auto bg-[#15284C] text-white  ">
          {/* <img className='w-full ' src='/images/faq_page/FAQ_footer_blue_curve.svg' alt="Footer Curve Image"></img>           */}
          <div className="py-4 px-4 max-w-sm">
            <h1 className="text-xl ">Services</h1>
            <div className="flex justify-between">
              <span>Heating & Cooling</span>
              <span>Electrical</span>
              <span>Plumbing</span>
            </div>
          </div>

          <div className="py-4 px-4 max-w-sm">
            <h1 className="text-xl">Company</h1>
            <div className="flex  justify-between">
              <span>About Us</span>
              <span>Carrers</span>
              <span>Memberships</span>
              <span>FAQ</span>
              <span>Blog</span>
            </div>
          </div>

          <div className="">
            <div className="flex">
              <FontAwesomeIcon icon={faLocation} />
              <span>9 Aldrin Rd Suite 10, Plymouth, MA 02360</span>
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faPhone} />
              <span>(508) 594-3279</span>
            </div>
            <div className="flex">
              <FontAwesomeIcon icon={faMailBulk} />
              <span>info@brantownac.com</span>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src="" />
            </div>
            <div></div>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim{' '}
            </p>
          </div>

          <div>
            <span>© Beantown 2022 · Privacy Policy</span>
          </div>
        </div>
      </section>
    </>
  );
}
