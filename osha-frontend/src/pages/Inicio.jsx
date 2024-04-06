import React from 'react';
import '../styles/Inicio.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import hero from '/src/assets/images/hero-image.png';

function Inicio(){
  return (
    <section className='hero-wrapper'>
        <div className="paddings inerWidth flexCenter hero-container">
            {/* Left side */}
            <div className='flezColStart hero-left'>
              <div className="hero-tittle">
                <div className="orange-circle" />
                <motion.h1
                  initial={{y: "2rem", opacity:0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{
                    duration: 2,
                    type: "spring"
                  }}
                >
                  Discover <br/>
                  Most Suitable <br/>
                  Property
                </motion.h1>
              </div>
              
              <div className='flexColStart hero-des'>
                <span>Find a variety of properties that you very easilty</span>
                <span>Forget all difficulties in finding a residence for you</span>
              </div>

              <div className='search-bar'>
                <HiLocationMarker color="var(--blue)" size={25} />
                <input type='text' />
                <button className='button'>Search</button>
              </div>

              <div className='flexCenter stats'>
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={8800} end={9000} duration={4} />
                    <span>+</span>
                  </span>
                  <span className='secondaryText'>Premium Products</span>
                </div>

                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={1950} end={2000} duration={4} />
                    <span>+</span>
                  </span>
                  <span className='secondaryText'>Happy Customers</span>
                </div>

                <div className="flexColCenter stat">
                  <span>
                    <CountUp end={28} />
                    <span>+</span>
                  </span>
                  <span className='secondaryText'>Award Winning</span>
                </div>
              </div>
            </div>
            {/* Right side */}
            <div className='flexCenter hero-right'>
              <motion.div
                initial={{x: "7rem", opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                  duration: 2,
                  type: "spring",
                }}
                className='image-container'>
                <img src='/src/assets/images/Sliders/slider1.jpg' alt="osha institute" />
              </motion.div>
            </div>
        </div>
    </section>
  )
}
export default Inicio