import Head from 'next/head';
import Image from 'next/image';
import client from '../lib/sanity';

export async function getStaticProps(context: any) {
  const post = await client.fetch(
    `
    *[_type == "header"]
  `
  );
  return {
    props: {
      post,
    },
  };
}

export default function Home({ post }: any) {
  console.log('Printing props', post);
  console.log(post.navLinks.linkName);
  return (
    <>
        <div className="relative aspect-w-16 aspect-h-9"> 
             {/* fetch image from cms and update */}
            <img className='w-full' src='images/homepage.svg' alt="Home Page Background Image Image"></img>          
        </div> 
       
        <div className='absolute top-0  flex w-full  justify-around items-center '>
            <div>
               <img className='object-cover  ' src='images/logo.svg' alt="logo Image"></img>
            </div>
            <div className='items-center text-xl  font-[neue-plak] justify-center text-white'>
             <button className="p-8 pr-1 group inline-block">Home</button>
              <div className="group inline-block">

                <button
                  className="outline-none focus:outline-none  px-3 py-1  rounded-sm flex items-center min-w-32"
                >
                  <span className="pr-1  flex-1 ">Services</span>
                  <span>
                    <svg
                      className="fill-current h-4 w-4 transform group-hover:-rotate-180
                      transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </span>
                </button>
              <ul
              className="rounded-sm transform scale-0 group-hover:scale-100 absolute 
                        transition duration-150 ease-in-out origin-top min-w-32"
            >
                <li className="rounded-sm px-3 py-1 ">Cooling and Heating Service</li>
                <li className="rounded-sm px-3 py-1 ">Electrical Service Page</li>    
                <li className="rounded-sm px-3 py-1">Plumbing Service Page</li>
              </ul>

              </div>
              <div className="group inline-block">

                <button
                  className="outline-none focus:outline-none  px-3 py-1 rounded-sm flex items-center min-w-32"
                >
                  <span className="pr-1  flex-1">About Us</span>
                  <span>
                    <svg
                      className="fill-current h-4 w-4 transform group-hover:-rotate-180
                      transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </span>
                </button>
              <ul
              className="rounded-sm transform scale-0 group-hover:scale-100 absolute 
                        transition duration-150 ease-in-out origin-top min-w-32"
            >
                {/* List Load from cms */}
                <li className="rounded-sm px-3 py-1">FAQ</li>
                <li className="rounded-sm px-3 py-1 ">Blog Page</li>    
                <li className="rounded-sm px-3 py-1 ">Blog Post</li>
              </ul>

              </div>
            </div>
            <div>
              <button className='border  text-xl bg-white p-2'>Book Now</button>
            </div>
``
            
        </div>
   
      

    </>
   

  );
}
