import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
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
          icon={<PiCertificateFill color='white' style={{height:50, width:50}}/>} 
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
      <div className='flex'>
        <h1>ti</h1>
        <ShuffleGrid />
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


const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Inicio