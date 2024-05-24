import { useTranslation } from "react-i18next";
import { FaHome, FaBook } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { FaBuildingColumns } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";


//const { t, i18n } = useTranslation("labels");
export const navlinks = [
  {
    name: "Home",
    submenu: false,
    link: "/",
    icon: <FaHome style={{color:"var(--primary)", width:20, height:20 }}/>
  },
  {
    name: "Nosotros",
    submenu: true,
    sublinks: [
      { name: "Sobre nosotros", link: "/nosotros" },
      { name: "Nuestra identidad", link: "/nuestra-identidad" },
      { name: "Cooperación internacional", link: "/cooperacion-internacional" },
      { name: "Declaración de privacidad", link: "/declaracion-privacidad" },
      { name: "Estandares osha", link: "/estandares-osha" },
    ],
    icon: <FaBuildingColumns style={{color:"var(--primary)", width:20, height:20 }}/>
  },
  {
    name: "Acreditación",
    submenu: true,
    sublinks: [
      { name: "Acreditación", link: "/acreditacion" },
      { name: "Acreditación AE", link: "/adreditacion-ae" },
      { name: "", link: "/" },
    ],
    icon: <AiFillSafetyCertificate style={{color:"var(--primary)", width:20, height:20 }}/>
  },
  {
    name: "Formación Académica",
    submenu: true,
    sublinks:  [
      { name: "Grados", link: "/grados" },
      { name: "Cursos", link: "/cursos" },
      { name: "Cursos gratuitos", link: "/cursos-gratuitos" },
    ],
    icon: <IoMdSchool style={{color:"var(--primary)", width:20, height:20 }}/>
  },
  {
    name: "Grados",
    submenu: false,
    link: "/grados",
    icon: <FaBook style={{color:"var(--primary)", width:20, height:20 }}/>
  },
];