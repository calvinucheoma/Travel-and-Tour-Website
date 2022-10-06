import React, {useEffect} from 'react';
import './footer.css';
import footerVideo from '../../assets/Coastline - 3581.mp4';
import {FiSend, FiChevronRight} from 'react-icons/fi';
import { FaTripadvisor} from 'react-icons/fa';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube} from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';



const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (

    <section className='footer'>

      <div className="videoDiv">
        <video src={footerVideo} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">

        <div className="contactDiv flex">

          <div className="text" data-aos='fade-up'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos='fade-up' type="text" placeholder='Enter Email Address' />
            <button data-aos='fade-up' className="btn flex" type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>

        </div>

        <div className="footerCard flex">

          <div className="footerIntro flex">

            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon' /> Travel.
              </a>
            </div>

            <div className="footerParagraph" data-aos='fade-up'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Dolor, unde voluptatem. Error, nesciunt nobis nemo velit, 
              nihil cupiditate numquam deserunt animi cumque illum fuga 
              labore aliquid totam earum! Eius, praesentium.
            </div>

            <div className="footerSocials" data-aos='fade-up'>
              <AiOutlineTwitter className='icon'/>
              <AiOutlineYoutube className='icon' />
              <AiOutlineInstagram className='icon' />
              <FaTripadvisor className='icon'/>
            </div>

          </div>

          <div className="footerLinks grid">

            {/* Group 1 */}

            <div className="linkGroup" data-aos='fade-up' data-aos-duration='3000'>

              <span className='groupTitle'>OUR AGENCY</span>
            
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>

           </div>

           {/* Group 2 */}

            <div className="linkGroup" data-aos='fade-up' data-aos-duration='4000'>

              <span className='groupTitle'>PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rent Cars
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Hostel World
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
               Trip Advisor
              </li>

           </div>

           {/* Group 3 */}

            <div className="linkGroup" data-aos='fade-up' data-aos-duration='5000'>

              <span className='groupTitle'>LAST MINUTE</span>
            
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Nigeria
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Australia
              </li>

           </div>

          </div>

          <div className="footerDiv flex">
            <small>TRAVEL WEBSITE DESIGN</small>
            <small>Developed 2022</small>
          </div>

        </div>

      </div>

    </section>

  )

}


export default Footer;