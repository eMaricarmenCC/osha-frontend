import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from "framer-motion";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import { useTranslation } from "react-i18next";
import CountUp from 'react-countup';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";

import { SectionImgContent, CardGrado, HoverEffectCard, GlowingGradientBorder, GradientBorder, Section, Card, Card3, Form1 } from '../../components/ui/Card';
import { ShuffleGrid } from '../../components/ShuffledGrid/ShuffleGrid';
import { Categories } from '../../components/ui/Card';
import { Linea, Line1, OneLine } from '../../components/ui/Line';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import { MdSecurity, MdEngineering, MdSchool } from "react-icons/md";
import { FaHelmetSafety, FaBiohazard } from "react-icons/fa6";
import { GiMaterialsScience } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { PiStudentBold, PiBooks } from "react-icons/pi";
import { LuBookMarked } from "react-icons/lu";
import { t } from 'i18next';

import gradosData from "../../utils/gradosData";


function Inicio(){
  return (
    <section className="">
      <Hero/>
      <IntroCards/>
      <MetodologiaEducativa/>
      <Grados/>
      <Acreditacion/>
      <Categorias/>
      <AlianzaConvenio/>
      <Galería/>
    {/* <EJemplo/> */}
    </section>
  );
};


/* HERO INICIO */
const Hero = () => {
  const { t, i18n } = useTranslation("labels");
  const COLORS_TOP = ["#5900FF", "#006FFF", "#00E8FF", "#1DD7DE", "#0082C3"];
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  const backgroundImage = useMotionTemplate`radial-gradient(110% 110% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const squareDataGalery = [
    {
      id: 1,
      src: "/src/assets/img-inicio/sliders/slider1.jpg",
    },
    {
      id: 2,
      src: "/src/assets/img-inicio/sliders/slider2.jpg",
    },
    {
      id: 3,
      src: "/src/assets/img-inicio/sliders/slider3.jpg",
    },
  ];
  return(
    <>
    <motion.section
      style={{ backgroundImage, }}
      className="relative flex flex-col min-h-[83vh] w-full place-content-center overflow-hidden bg-gray-950 text-gray-200 items-center"
    >
      <div className="flex flex-col lg:flex-row max-w-7xl items-center justify-center gap-5">
        <div className="relative z-10 flex flex-col items-center justify-center pt-10 px-5 lg:p-0">
          <div className="flex flex-col items-center">
            <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-5 py-3 text-sm sm:text-lg text-center">
              {t("hero.subtitle1")}
            </span>
            <motion.h1
              initial={{y: "2rem", opacity:0}}
              animate={{y: 0, opacity: 1}}
              transition={{
                duration: 2,
                type: "spring"
              }}
              className="max-w-[190px] xs:max-w-xl sm:max-w-2xl md:max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-4xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"
            >
              Bienvenidos a<span className="text-primary uppercase">Osha</span> <span className="text-secondary">Institute</span>
            </motion.h1>
            <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed text-grisMedio">
              {t("hero.subtitle2")}
            </p>
            <motion.button
              style={{ border, boxShadow, }}
              whileHover={{ scale: 1.015, }}
              whileTap={{ scale: 0.985, }}
              className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
            >
              Contáctanos
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </div>
          <CountUpHome/>
        </div>
        <div className="z-20 flex flex-col items-center justify-end">
          <motion.div
            initial={{x: "7rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className='image-container'>
            <img className="h-[380px] w-[280px] md:h-[500px] md:w-[360px] lg:h-[800px] lg:w-[600px]" src="/src/assets/img-inicio/hero/engineer.png" alt=""/>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={5500} factor={5} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
    </>
  );
};

const CountUpHome = () => {
  return(
    <div className="mt-10 flex flex-row gap-3">
      <ItemCount
        icon={<PiStudentBold/>}
        text="Estudiantes"
        nstart={130}
        nend={150}
        time={4}
      />
      <ItemCount
        icon={<PiBooks/>}
        text="Programas"
        nstart={80}
        nend={100}
        time={4}
      />
      <ItemCount
        icon={<LuBookMarked/>}
        text="Cursos"
        nstart={180}
        nend={200}
        time={4}
      />
    </div>
  );
};

const ItemCount = ({icon, text, nstart, nend, time}) => {
  return(
    <div className="flex flex-col items-center p-3 border-secondary border-b-2 transparent rounded-t-lg bg-gray-600/50 text-3xl sm:flex-row sm:gap-3">
      <span className="sm:text-4xl md:text-5xl">{icon}</span>
      <div className="flex flex-col items-center">
        <span className="lg:text-4xl text-primary"><b>
          <span className="text-secondary">+</span>
          <CountUp start={nstart} end={nend} duration={time} /></b>
        </span>
        <p className="ml-2 text-white">{text}</p>
      </div>
    </div>
  );
};

const Hero1 = () => {
  return(
    <>
    {/* Hero */}
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
        <h1 className="font-light text-6xl">Osha Institute</h1>
      </div>
    </section>
    </>
  );
};

/* CARDS DE INTRODUCCIÓN */
const IntroCards = () => {
  const { t, i18n } = useTranslation("inicio");
  return(
    <section className="px-5 md:px-10 lg:px-20 xl:px-40 py-8 lg:py-10" style={{ backgroundImage: "url('/src/assets/papel/papel15.jpg')" }}>
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
  );
};

/* METODOLOGÍA EDUCATIVA */
const MetodologiaEducativa = () => {
  const { t, i18n } = useTranslation("inicio");
  return(
    <section className="bg-grisFondo">
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-8 lg:py-10">
        <SectionImgContent
          imagePath={"/src/assets/img-inicio/education.jpeg"}
          title={t("methodology.title")}
          content={t("methodology.description")}
          textButton={t("methodology.learnMoreUs")}
          link={"/nosotros"}
        />
      </div>
    </section>
  );
};

/* GRADOS */
const Grados = () => {
  const { t, i18n } = useTranslation("inicio");
  return(
    <section className="bg-grisFondo" style={{ backgroundImage: "url('/src/assets/papel/papel12.jpg')" }}>
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-14">
        <h1 className="text-center font-bold uppercase text-white w-auto text-2xl lg:text-3xl">
          {t("accreditationDegrees.title")}
        </h1>
        <Linea/>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          { gradosData.map(grado => (
            <CardGrado
              key={grado.id}
              title={grado.title}
              code={grado.code}
              label={grado.label}
              src={grado.src}
            />
          ))
          }
        </div>
      </div>
    </section>
  );
};

/* ACREDITACIÓN */
const Acreditacion = () => {
  const { t, i18n } = useTranslation("inicio");
  return(
    <section className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-14">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="">
          <img src="/src/assets/img-inicio/accreditation.png" alt="Educacion acreditada" className="rounded-lg h-full"/>
        </div>
        <div className="px-5 py-10 border-secondary border-r-4 border-b-4">
          <h2 className="text-primary uppercase"><b>{t("accreditation.title")}</b></h2>
          <p className="mt-3">{t("accreditation.description")}</p>
          <button className="mt-5">
            <Link to="" className="flex rounded-lg py-3 px-5 text-white font-semibold bg-gradient-to-b from-azulMedio to-primary hover:bg-azulOscuro transform transition-transform hover:scale-110 text-white">
              Certificate
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

/* CATEGORÍAS */
const Categorias = () => {
  const { t, i18n } = useTranslation("inicio");
  return(
    <section className="bg-grisFondo">
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-14">
        <div className="">
          <h2 className="text-center text-gray-600 font-bold uppercase">Categorías</h2>
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
  );
};

/* ALIANZAS Y CONVENIOS */
const AlianzaConvenio = () => {
  const { t, i18n } = useTranslation("inicio");
  return(
    <section className="" style={{ backgroundImage: "url('/src/assets/papel/papel12.jpg')" }}>
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-14">
        <h2 className="text-white text-center uppercase"><b>Nuestras alianzas y convenios</b></h2>
        <Linea/>
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
  );
};

/* GALERÍA */
const Galería = () => {
  const { t, i18n } = useTranslation("inicio");
  const squareDataGalery = [
    {
      id: 1,
      src: "/src/assets/img-inicio/galeria/galeria1.jpg",
    },
    {
      id: 2,
      src: "/src/assets/img-inicio/galeria/galeria2.jpg",
    },
    {
      id: 3,
      src: "/src/assets/img-inicio/galeria/galeria3.jpg",
    },
    {
      id: 4,
      src: "/src/assets/img-inicio/galeria/galeria4.jpg",
    },
    {
      id: 5,
      src: "/src/assets/img-inicio/galeria/galeria5.jpg",
    },
    {
      id: 6,
      src: "/src/assets/img-inicio/galeria/galeria6.jpg",
    },
    {
      id: 7,
      src: "/src/assets/img-inicio/galeria/galeria7.jpg",
    },
    {
      id: 8,
      src: "/src/assets/img-inicio/galeria/galeria8.jpg",
    },
  ];
  return (
    <section>
      <div className="px-5 py-10 sm:px-20">
        <h2 className="text-center text-primary uppercase"><b>Galería</b></h2>
        <Linea/>
        <div className="mt-10 w-full items-center gap-8 max-w-6xl mx-auto">
          <ShuffleGrid
            images={squareDataGalery}
            nColClass="grid-cols-4"
            gapClass="gap-2"
          />
        </div>
      </div>
    </section>
  );
};

const EJemplo = () => {
  return(
    <>
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


export default Inicio