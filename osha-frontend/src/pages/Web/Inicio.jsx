import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import hero from '/src/assets/images/hero-image.png';
import { HoverEffectCard, Card, Card2, Card3, Form1 } from '../../components/ui/card';
import { MdSchool } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ShuffleGrid } from '../../components/ShuffledGrid/ShuffleGrid';
import { Categories } from '../../components/ui/card';

import { MdSecurity, MdEngineering } from "react-icons/md";
import { FaHelmetSafety, FaBiohazard } from "react-icons/fa6";
import { GiMaterialsScience } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";


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

    {/* Cards */}
    <section className="mt-10 px-5 py-10 sm:px-20 bg-grisFondo">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          icon={<MdSchool color='white' style={{height:50, width:50}}/>}
          title={t("intro.education.title")} 
          content={t("intro.education.description")}
          bgClass="bg-white"
          textClass="text-primary"
          bgCiClass="bg-primary"
        />
        <Card
          icon={<FaHandshake color='white' style={{height:50, width:50}}/>} 
          title={t("intro.partnerships.title")}
          content={t("intro.partnerships.description")}
          bgClass="bg-white"
          textClass="text-mintFuerte"
          bgCiClass="bg-mintFuerte"
        />
        <Card
          icon={<MdEngineering color='white' style={{height:50, width:50}}/>} 
          title={t("intro.certification.title")} 
          content={t("intro.certification.description")} 
          bgClass="bg-white"
          textClass="text-rojoFuerte"
          bgCiClass="bg-rojoFuerte"
        />
        <Card
          icon={<AiFillSafetyCertificate color='white' style={{height:50, width:50}}/>} 
          title={t("intro.validity.title")} 
          content={t("intro.validity.description")}
          bgClass="bg-white"
          textClass="text-amarilloFuerte"
          bgCiClass="bg-amarilloFuerte"
        />
      </div>
    </section>

    {/* Categorías */}
    <section className="bg-grisFondo">
      <div className="mt-10 px-5 py-10 sm:px-20">
        <div className="">
          <h2 className="text-center uppercase"><b>Categorías</b></h2>
          <Linea/>
        </div>
        <div className="mt-10 grid grid-cols-1 grid-rows-auto gap-4 md:grid-cols-2 md:grid-rows lg:grid-cols-3">
          <Categories
            icon={<MdSecurity style={{color:"var(--primary)", height:60, width:60}}/>} 
            title={t("categories.occupationalSafety.title")}
            text={t("categories.occupationalSafety.description")}
            bgColorClass="bg-white"
            titleColorClass="text-primary"
            borderClass="border-primary"
          />
          <Categories
            icon={<FaHelmetSafety style={{color:"var(--amarilloFuerte)", height:60, width:60}}/>} 
            title={t("categories.preventionOccupationalHazards.title")}
            text={t("categories.preventionOccupationalHazards.description")}
            bgColorClass="bg-white"
            titleColorClass="text-amarilloFuerte"
            borderClass="border-amarilloFuerte"
          />
          <Categories
            icon={<GiMaterialsScience style={{color:"var(--mintFuerte)", height:60, width:60}}/>} 
            title={t("categories.sciencieTechnology.title")}
            text={t("categories.sciencieTechnology.description")}
            bgColorClass="bg-white"
            titleColorClass="text-mintFuerte"
            borderClass="border-mintFuerte"
          />
          <Categories
            icon={<RiMentalHealthFill style={{color:"var(--celesteFuerte)", height:60, width:60}}/>} 
            title={t("categories.psychology.title")}
            text={t("categories.psychology.description")}
            bgColorClass="bg-white"
            titleColorClass="text-celesteFuerte"
            borderClass="border-celesteFuerte"
          />
          <Categories
            icon={<MdEngineering style={{color:"var(--lilaFuerte)", height:60, width:60}}/>} 
            title={t("categories.engineering.title")}
            text={t("categories.engineering.description")}
            bgColorClass="bg-white"
            titleColorClass="text-lilaFuerte"
            borderClass="border-lilaFuerte"
          />
          <Categories
            icon={<FaBiohazard style={{color:"var(--rojo)", height:60, width:60}}/>} 
            title={t("categories.hazardousMaterials.title")}
            text={t("categories.hazardousMaterials.description")}
            bgColorClass="bg-white"
            titleColorClass="text-rojo"
            borderClass="border-rojo"
          />
        </div>
      </div>
    </section>

    {/* Grados */}
    <section>
      <div className="">
      </div>
    </section>

    {/* Acreditacion */}
    <section className="mt-10 px-5 py-10 sm:px-20">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="">
          <img src="/src/assets/img-alianzas/ansi.jpg" alt="" style={{width:500}} className="rounded-lg"/>
        </div>
        <div className="p-5 border-secondary border-r-4 border-b-4">
          <h3 className="text-primary uppercase"><b>{t("acreditation.title")}</b></h3>
          <p className="mt-3">{t("acreditation.description")}</p>
          <button className="mt-3 bg-primary rounded-lg p-2 text-white">Certificate</button>
        </div>
      </div>
    </section>

    {/* Categorias */}
    <section>
      <div className="">
      </div>
    </section>

    {/* Alianzas y convenios */}
    <section className="" style={{ backgroundImage: "url('/src/assets/papel/papel12.jpg')" }}>
      <div className="mt-10 px-5 py-10 sm:px-20">
        <h2 className="text-white text-center uppercase"><b>Nuestras alianzas y convenios</b></h2>
        <div className="flex flex-col justify-center items-center mt-2">
          <div className="bg-primary h-1 w-80"></div>
          <div className="bg-secondary h-1 w-40 mt-2"></div>
        </div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={
            {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }
          }
          pagination={{el:'.swiper-pagination',clickable:true}}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable:true
          }}
          modules={[EffectCoverflow,Pagination,Navigation]}
          className="relative h-[28rem] pt-[2rem]"
        >
          <SwiperSlide>
            <img src="/src/assets/img-alianzas/ansi.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img-alianzas/asme.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img-alianzas/atm.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img-alianzas/nfpa.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img-alianzas/niosh.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img-alianzas/osha.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img-alianzas/safety.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img-alianzas/teex.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img-alianzas/texas.jpg" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/img-alianzas/wso.jpg" alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>

    {/* Galería */}
    <section>
      <div className="px-5 py-10 sm:px-20">
        <h2 className="text-center text-primary uppercase"><b>Galería</b></h2>
        <Linea/>
        <div className="mt-10 w-full items-center gap-8 max-w-6xl mx-auto">
          <ShuffleGrid
            images={squareDataGalery}
            nColClass="grid-cols-4"
          />
        </div>
      </div>
    </section>

    {/* Ejemplo */}
    <section>
      <div className='flex'>
        <Form1/>
        <Form1/>
      </div>
    </section>

    </>
  );
};

const Linea = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <div className="bg-primary h-1 w-80"></div>
      <div className="bg-secondary h-1 w-40 mt-2"></div>
    </div>
  );
};

const squareDataGalery = [
  {
    id: 1,
    src: "/src/assets/img-inicio/img-galeria/galeria1.jpg",
  },
  {
    id: 2,
    src: "/src/assets/img-inicio/img-galeria/galeria2.jpg",
  },
  {
    id: 3,
    src: "/src/assets/img-inicio/img-galeria/galeria3.jpg",
  },
  {
    id: 4,
    src: "/src/assets/img-inicio/img-galeria/galeria4.jpg",
  },
  {
    id: 5,
    src: "/src/assets/img-inicio/img-galeria/galeria5.jpg",
  },
  {
    id: 6,
    src: "/src/assets/img-inicio/img-galeria/galeria6.jpg",
  },
  {
    id: 7,
    src: "/src/assets/img-inicio/img-galeria/galeria7.jpg",
  },
  {
    id: 8,
    src: "/src/assets/img-inicio/img-galeria/galeria8.jpg",
  },
];

export default Inicio