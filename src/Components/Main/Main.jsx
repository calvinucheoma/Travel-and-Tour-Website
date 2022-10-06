import React, {useEffect} from 'react';
import { data } from '../data';
import './main.css';
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (

    <section className='main container section'>

      <div className="secTitle">
        <h3 className="title" data-aos='fade-right'>Most Visited Destinations</h3>
      </div>

      <div className="secContent grid">
        {
          data.map((city) => {
            return (
              <div key={city.id} className="singleDestination" data-aos='fade-up'>

                <div className="imageDiv">
                  <img src={city.imgSrc} alt={city.destTitle} />
                </div>

                <div className="cardInfo">

                  <h4 className="destTitle">{city.destTitle}</h4>

                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className='name'>{city.location}</span>
                  </span>

                  <div className="fees flex">

                    <div className="grade">
                      <span>{city.grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{city.fees}</h5>
                    </div>

                  </div>

                  <div className="desc">
                    <p>{city.description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon' />
                  </button>
                  
                </div>

              </div>
            )
          })
        }
      </div>

    </section>

  )

};

export default Main;