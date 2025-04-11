import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postFormContacto, getProgramas } from "../../api/Contacto.api";
import Select from 'react-select';

import { Email } from "../../components/ui/Questions";
import { Line1 } from "../../components/ui/Line";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";

import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp, FaTelegramPlane, FaFacebookF, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaRegUser, FaRegCalendar, FaRegBookmark } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhone, MdOutlineSchool } from "react-icons/md";
import { RiLandscapeLine } from "react-icons/ri";
import { FaBuildingColumns } from "react-icons/fa6";


function Contactos() {
  const { t, i18n } = useTranslation("contactos");
  const [programas, setProgramas] = useState([]);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async data => {
    try {
      await postFormContacto(data);
      toast.success('Información enviada');
    } catch (error) {
      toast.error(`No se puso completar su envio`);
    }
  });

  useEffect(() => {
    const loadProgramas = async () => {
      try {
        const programasData = await getProgramas();
        setProgramas(programasData);
      } catch (error) {
        setError(error.message || "Ocurrió un error al cargar programas.");
      }
    };
    loadProgramas();
  }, []);

  return(
    <section className="bg-grisFondo">
      <Breadcrumbs
        text={"Contáctanos"}
        icon={<FaBuildingColumns/>}
        img="/img-nosotros/business.jpg"
      />
      {/* CONTACT SECTION */}
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20 w-full">
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="w-full">
            <h4 className="">{t("subtitle")}</h4>
            <h2 className="text-primary"><b>{t("title")}</b></h2>
            <Line1 bgColorClass={"bg-secondary"} />
            <p className="mt-5">{t("p")}</p>
            <div className="mt-8">
              {t("emails", { returnObjects: true }).map((li, index) => (
                <div key={index}>
                  <Email
                    text={li.type}
                    content={li.content}
                    email={li.email}
                    icon={<MdOutlineMailOutline/>}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Formulario de contacto */}
          <div className="w-full">
            <div className="bg-grisFondo p-5 rounded-lg">
              <h3 className="text-center text-primary">Formulario para contactarnos</h3>
              <form onSubmit={onSubmit} className="mt-5 bg-white flex flex-col gap-5 p-5 rounded-lg shadow-lg">
                <div>
                  <div className="relative bg-inherit">
                    <input
                      type="text"
                      name="fullname"
                      className="block w-full h-10 pl-8 pr-3 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-primary"
                      placeholder="Nombres y apellidos"
                      {...register('fullname', {required: true})}
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                      <FaRegUser style={{color:"var(--primary)"}}/>
                    </span>
                  </div>
                  {errors.fullname?.type === 'required' && <p className="mt-1 text-xs text-red-500">*El campo nombre es requerido</p>}
                </div>
                <div>
                  <div className="relative bg-inherit">
                    <input
                      type="email"
                      className="block w-full h-10 pl-8 pr-3 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-primary"
                      placeholder="Email"
                      {...register('email', {required: true})}
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                      <MdOutlineEmail style={{color:"var(--primary)"}}/>
                    </span>
                  </div>
                  {errors.email?.type === 'required' && <p className="text-xs text-red-400">*El campo email es requerido</p>}
                </div>
                <div>
                  <div className="relative bg-inherit">
                    <input
                      type="number"
                      className="block w-full h-10 pl-8 pr-3 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-primary"
                      placeholder="Teléfono"
                      {...register('phone', {required: true})}
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                      <MdOutlinePhone style={{color:"var(--primary)"}}/>
                    </span>
                  </div>
                  {errors.phone?.type === 'required' && <p className="text-xs text-red-400">*El campo teléfono es requerido</p>}
                </div>
                <div>
                  <div className="relative bg-inherit">
                    <input
                      type="number"
                      className="block w-full h-10 pl-8 pr-3 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-primary"
                      placeholder="Edad"
                      {...register('age')}
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                      <FaRegCalendar style={{color:"var(--primary)"}}/>
                    </span>
                  </div>
                </div>
                <div>
                  <div className="relative bg-inherit">
                    <input
                      type="text"
                      className="block w-full h-10 pl-8 pr-3 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-primary"
                      placeholder="País o región"
                      {...register('country', {required: true})}
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                      <RiLandscapeLine style={{color:"var(--primary)"}}/>
                    </span>
                  </div>
                  {errors.country?.type === 'required' && <p className="mt-1 text-xs text-red-400">*El campo país es requerido</p>}
                </div>
                <div>
                  <div className="relative bg-inherit">
                    <input
                      type="text"
                      className="block w-full h-10 pl-8 pr-3 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-primary"
                      placeholder="Grado de intrucción"
                      {...register('degree', {required: true})}
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                      <FaRegBookmark style={{color:"var(--primary)"}}/>
                    </span>
                  </div>
                  {errors.degree?.type === 'required' && <p className="mt-1 text-xs text-red-400">*El campo grado es requerido</p>}
                </div>
                <div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="">
                      <MdOutlineSchool style={{ color: "var(--primary)" }} />
                    </span>
                    <Controller
                      name="programOsha"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          placeholder="Selecciona el programa de su interés ..."
                          isSearchable={true}
                          isClearable={true}
                          options={programas.map(p => ({
                            value: p.procod,                                     // envío al backend
                            label: `${p.procod} ${p.procodosh} -> ${p.pronom}`,  // visible para el usuario
                          }))}
                          className="text-sm w-full"
                        />
                      )}
                    />
                    
                  </div>
                  {errors.programOsha && <p className="mt-1 text-xs text-red-400">*El campo programa es requerido</p>}
                </div>
                <div>
                  <div className="relative bg-inherit">
                    <input
                      type="text"
                      className="block w-full h-10 pl-8 pr-3 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-primary"
                      placeholder="¿Que información requiere?"
                      {...register('information', {required: true})}
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                      <MdOutlineSchool style={{color:"var(--primary)"}}/>
                    </span>
                  </div>
                  {errors.information?.type === 'required' && <p className="mt-1 text-xs text-red-400">*El campo información es requerido</p>}
                </div>
                <button className="p-2 rounded-lg bg-primary hover:bg-azulOscuro text-white"><b>Enviar</b></button>
              </form>
            </div>
            <div className="mt-10">
              <h3 className="text-center text-primary mb-5">Tambien puede contactarnos por nuestras redes sociales</h3>
              <SocialsBlock/>
            </div>
          </div>
        </div>
      </div>
      {/* Toast */}
      <ToastContainer />
    </section>
  );
};

const SocialsBlock = () => (
  <div className="grid grid-cols-3 items-center gap-2 w-full">
    <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp"
      className="grid h-full place-content-center text-3xl text-white bg-whatsapp p-1 rounded-lg transform transition-transform hover:scale-105 py-2"
    >
      <FaWhatsapp/>
    </a>
    <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp"
      className="grid h-full place-content-center text-3xl text-white bg-telegram p-1 rounded-lg transform transition-transform hover:scale-105 py-2"
    >
      <FaTelegramPlane/>
    </a>
    <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp"
      className="grid h-full place-content-center text-3xl text-white bg-facebook p-1 rounded-lg transform transition-transform hover:scale-105 py-2"
    >
      <FaFacebookF/>
    </a>
    <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp"
      className="grid h-full place-content-center text-3xl text-white bg-linkedin p-1 rounded-lg transform transition-transform hover:scale-105 py-2"
    >
      <FaLinkedin/>
    </a>
    <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp"
      className="grid h-full place-content-center text-3xl text-white bg-twitter p-1 rounded-lg transform transition-transform hover:scale-105 py-2"
    >
      <FaTwitter/>
    </a>
    <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp"
      className="grid h-full place-content-center text-3xl text-white bg-instagram p-1 rounded-lg transform transition-transform hover:scale-105 py-2"
    >
      <FaInstagram/>
    </a>
  </div>
);

export { Contactos };