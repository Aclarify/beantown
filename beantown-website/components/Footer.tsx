import { faLocation, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="w-full h-auto bg-[#15284C] text-white">      
      {/* <img className='w-full ' src='/images/faq_page/FAQ_footer_blue_curve.svg' alt="Footer Curve Image"></img>           */}
      <div>
        <h1>Services</h1>
        <div className='flex gap-4'>
            <span>Heating & Cooling</span>
            <span>Electrical</span>
            <span>Plumbing</span>
        </div>        
      </div>   

      <div>
        <h1>Company</h1>
        <div className='flex gap-4'>
            <span>About Us</span>
            <span>Carrers</span>
            <span>Memberships</span>
            <span>FAQ</span>
            <span>Blog</span>
        </div>        
      </div>   

      <div>
          <div className='flex'>
            <FontAwesomeIcon icon={faLocation} />
            <span>9 Aldrin Rd Suite 10, Plymouth, MA 02360</span>
          </div>
          <div className='flex'>
            <FontAwesomeIcon icon={faPhone} />
            <span>(508) 594-3279</span>
          </div> 
          <div className='flex'>
            <FontAwesomeIcon icon={faMailBulk} />
            <span>info@brantownac.com</span>
          </div>
      </div>  
      
      <div className='flex'>       
        <div>
          <img src=""/>
        </div>
        <div>
          
        </div>
      </div>

      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </p>
      </div>

      <div>
          <span>© Beantown 2022 · Privacy Policy</span>
      </div>

    </div>
  ) 
}