import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import hero from '/src/assets/images/hero-image.png';
import { HoverEffectCard, Card, Card2, Card3, Form1 } from '../../components/ui/card';
import { MdSchool } from "react-icons/md";
import { useTranslation } from "react-i18next";

function Inicio(){

  const { t, i18n } = useTranslation("inicio");

  return (
    <>
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute w-full h-full bg-black opacity-60"></div>
      </div>
      <div className="video-content space-y-2 z-10">
        <h1 className="font-light text-6xl">full Hero Video</h1>
        <h3 className="font-light text-3xl">with TailwindCSS</h3>
      </div>
    </section>
    {/*<section className='hero-wrapper'>
        <div className="paddings inerWidth flexCenter hero-container">*/}
            {/* Left side */}
            {/*<div className='flezColStart hero-left'>
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
            </div>*/}
            {/* Right side */}
            {/*<div className='flexCenter hero-right'>
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
    </section> */}
    <section className="mt-10 px-5 sm:px-20">
      <div className='flex flex-col md:flex-row gap-5'>
        <Card
          colorBg="white"
          colorCi="green"
          icon={<MdSchool color='white' style={{height:50}}/>}
          title={t("intro.education.title")} 
          content={t("intro.education.description")} 
        />
        <Card
          colorBg="white"
          colorCi="white"
          icon={<MdSchool />} 
          title={t("intro.partnerships.title")}
          content={t("intro.partnerships.description")}
        />
        <Card
          colorBg="white"
          colorCi="white"
          icon={<MdSchool />} 
          title={t("intro.certification.title")} 
          content={t("intro.certification.description")} 
        />
        <Card
          colorBg="white"
          colorCi="white"
          icon={<MdSchool />} 
          title={t("intro.validity.title")} 
          content={t("intro.validity.description")}
        />
      </div>
      <div className='flex'>
        <Form1/>
        <Form1/>
      </div>
      
    </section>
    </>
  )
}
export default Inicio