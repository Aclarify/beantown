import React from 'react'
import Image from 'next/image'
import Nav from '../components/nav'
import cardImg1 from 'images/cooling-and-heating-service-page/footer-cta/footer-cta-curve-image.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Brands from '../components/template/home/brands'
import Faq from '../components/template/home/faq'
import Footer from '../components/Footer'

export default function CoolingandHeating() {
  return (
    <>
        <Nav />
       <section id="cooling-and-heating-hero"> 
          <div className="hidden md:block">
            <div className="space-y-4   md:mt-32 absolute  text-white   md:p-12">
              <p className="text-sm  md:text-4xl font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className=" md:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="border rounded-lg md:text-xl bg-white text-black ">
                Book Now
              </button>
            </div>
            <img
              className="w-full h-auto object-cover "
              src="images/cooling-and-heating-service-page/hero/Desktop_Header.svg"
              alt="Home Page Hero Image"
            ></img>
          </div>
          <div className='inline md:hidden'>            
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
                  src="images/cooling-and-heating-service-page/hero/Mobile_Hero.svg"
                  alt="Home Page Hero Image"
                ></img>           
          </div>   
       </section>

       <section id="heatingCard ">
          <div className='mx-8 flex flex-col items-center text-center '>
            <p className='text-2xl font-bold leading-normal'>heating & Cooling Services</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div className='group grid md:grid-cols-4 md:grid-col-4 mx-8 px-8 items-center space-y-5 md:space-x-5 '>
            <div className='group-hover:scale-[0.85] hover:!scale-100 duration-500 bg-[FFFFFF]  text-center space-y-2 py-8  items-center  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>

              
              {/* <Image src={cardImg1} alt={'card Image'}  width={100}
                height={100}/> */}
              <div className='ml-48 md:ml-16  p-4 '>
                <img src ="images/cooling-and-heating-service-page/service-cards/heating-service-card-image-installation.svg"></img>           
              </div>              
              <p>Installation</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className='group-hover:scale-[0.85] hover:!scale-100 duration-500 bg-[FFFFFF]  text-center space-y-2 py-8 items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>
           
              <div className='ml-48 md:ml-16 p-4 '>
                <img src ="images/cooling-and-heating-service-page/service-cards/heating-service-card-image-installation.svg"></img>           
              </div>    
              <p>Installation</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className='group-hover:scale-[0.85] hover:!scale-100 duration-500 bg-[FFFFFF]  text-center space-y-2 py-8 items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>
           
              <div className='ml-48 md:ml-16  p-4 '>
                <img src ="images/cooling-and-heating-service-page/service-cards/heating-service-card-image-installation.svg"></img>           
              </div>    
              <p>Installation</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className='group-hover:scale-[0.85] hover:!scale-100 duration-500 bg-[FFFFFF]  text-center space-y-2 py-8  items-center  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>
           
              <div className='ml-48 md:ml-16 p-4 '>
                <img src ="images/cooling-and-heating-service-page/service-cards/heating-service-card-image-installation.svg"></img>           
              </div>    
              <p>Installation</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
       </section>

       <section id="heatingCoolingProductsCards">
         <div className='flex  items-center justify-between mx-16'>
            <div>
              <p className='text-2xl font-bold'>Heating & Cooling Products</p>
            </div>
           
            <div className="hidden  md:flex gap-4 pt-4 ">
              <button className="bg-red-100 py-2 px-4 rounded-full w-16 ">
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button className=" py-2 px-4 rounded-full w-16 text-white bg-red-900">
                <FontAwesomeIcon icon={ faArrowRight} />
              </button>                
            </div>
          </div>   

          <div >
            <div className='flex flex-nowrap overflow-x-auto  mx-8 px-8 items-center space-y-5 md:space-x-5 '>
              <div className='flex-none w-[250px] p-4 bg-[FCF7F7]  text-center space-y-2   items-center  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>

                
                {/* <Image src={cardImg1} alt={'card Image'}  width={100}
                  height={100}/> */}
                <div className='ml-20 md:ml-16  p-4 FFFFFF'>
                  <img src ="images/cooling-and-heating-service-page/products/products1.svg"></img>           
                </div>              
                <p>Installation</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
              <div className='flex-none w-[250px] p-4 bg-[FCF7F7]  text-center space-y-2  items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>
            
                <div className='ml-20 md:ml-16  p-4 FFFFFF'>
                  <img src ="images/cooling-and-heating-service-page/products/products1.svg"></img>           
                </div>      
                <p>Installation</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
              <div className='flex-none w-[250px] p-4 bg-[FCF7F7]  text-center space-y-2  items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>
            
                <div className='ml-20 md:ml-16  p-4 FFFFFF'>
                  <img src ="images/cooling-and-heating-service-page/products/products1.svg"></img>           
                </div>      
                <p>Installation</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
              <div className='flex-none w-[250px] p-4 bg-[FCF7F7]  text-center space-y-2   items-center  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>
            
                <div className='ml-20 md:ml-16  p-4 FFFFFF'>
                  <img src ="images/cooling-and-heating-service-page/products/products1.svg"></img>           
                </div>     
                <p>Installation</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
            </div>
          </div>
     
         
          <div className="md:hidden flex justify-center gap-4 pt-4 ">
                <button className="bg-red-100 py-2 px-4 rounded-full w-16">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className=" py-2 px-4 rounded-full w-16 text-white bg-red-900">
                  <FontAwesomeIcon icon={ faArrowRight} />
                </button>             
          </div>
      
       </section>

       <section id="massSave" className="pt-32 flex flex-col">
        <div className="flex flex-col-reverse md:flex md:flex-row  items-center">
          <div className="p-8 m-8 space-y-4 flex flex-col items-center w-full  md:w-1/2">
            
            <p  className="text-4xl font-bold">
            Mass Save: Proudly Doing Our Part to Help the South Shore Go Green
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venias. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
           
            <button className="border rounded-lg text-white text-sm  bg-red-700 p-4 ">
              Know More
            </button>
          </div>
          <div className="group">
            <img className="group-hover:scale-110 transition-transform duration-200 ease-in-out" src=" images/cooling-and-heating-service-page/mass-save-blob.svg" />
          </div>
        </div>
        
      </section>

      <section id="footercta ">  

          <div className="hidden md:flex items-center justify-center h-auto "> 
          
             
              <img className='relative animate-pulse' 
                  src="images/cooling-and-heating-service-page/footer-cta/Desktop_CTA.svg" />                                 
               <div className="absolute  ml-96 w-1/2">
           
                  <div className=" space-y-4  bottom-20 inset-x-0 p-2  md:p-12">
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
          <div className="flex flex-col md:hidden "> 
              <div className='object-contain'>
                <img 
                  src="images/cooling-and-heating-service-page/footer-cta/footer-cta-image.svg" /> 
              </div>
              <div className='relative '>
                <img
                className="object-contain "
                src="images/cooling-and-heating-service-page/footer-cta/footer-cta-curve-image.svg"
                />

                 <div className="absolute left-20 top-24">           
                    <div className=" space-y-4  bottom-20 inset-x-0 p-2  md:p-12">
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
          </div>
          
      </section>

      <Brands/>

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

        <div className="group flex flex-nowrap overflow-x-auto gap-5 ">
          <div className=" group-hover:scale-[0.85] hover:!scale-100 duration-500  flex-none w-[250px] p-4 ">
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
          <div className=" group-hover:scale-[0.85] hover:!scale-100 duration-500 flex-none w-[250px] p-4">
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
          <div className=" group-hover:scale-[0.85] hover:!scale-100 duration-500 flex-none w-[250px] p-4">
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

      <Faq/>
      <Footer/>
    </>
   
   
  )
}
