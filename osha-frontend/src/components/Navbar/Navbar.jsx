import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, color, motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FiArrowRight, FiBarChart2, FiChevronDown, FiHome, FiPieChart } from "react-icons/fi";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Navbar for laptop, pc */}
      <NavbarMd />

      {/* Navbar for mobile */}
      <nav className="block md:hidden bg-white w-full">
        <div className="flex items-center justify-around">
          <div className="py-3 px-5 w-full flex justify-between">
            {/* Logo */}
            <Link to="/" className="">
              <img src='/src/assets/logo/logoOsha.png' alt="Osha logo"  className="h-10"/>
            </Link>
            {/* Menu Icon */}
            <div className="text-3xl" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          {/* Navbar */}
          <div className={`
            absolute z-50 bg-grisFondo ${open ? "left-0" : "left-[-100%]"}
            h-[90%] w-[70%] top-0 overflow-y-auto bottom-0 duration-500
            border-grisMedio shadow-3xl rounded-r-3xl flex flex-col
          `}>
            <div className="py-6 px-5 w-full flex justify-center">
              <img src="/src/assets/logo/logoOsha.png" alt="logo" className="h-16" />
              {/*<div className="text-3xl" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>*/}
            </div>
            <div className="px-2 flex flex-col">
              <NavLinks/>
            </div>
            <div className="mx-auto mt-auto mb-5">
              <button className="bg-primary py-2 px-3 rounded-lg shadow-lg text-white">Contactanos</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavbarMd = () => {

  const { t, i18n } = useTranslation("labels");
  const navlinks = [
    {
      id: 0,
      name: t("home"),
      submenu: false,
      link: "/",
    },
    {
      id:1,
      name: t("us"),
      submenu: true,
      Component: Nosotross,
      sublinks: [
        { name: t("aboutus"), link: "/nosotros" },
        { name: t("ouridentity"), link: "/nuestra-identidad" },
        { name: t("cooperation"), link: "/cooperacion-internacional" },
        { name: t("privacy"), link: "/declaracion-privacidad" },
        { name: t("standards"), link: "/estandares-osha" },
      ],
    },
    {
      id:2,
      name: t("accreditation"),
      submenu: true,
      Component: Acreditacion,
      sublinks: [
        { name: t("accreditation"), link: "/acreditacion" },
        { name: t("accreditationae"), link: "/adreditacion-ae" },
      ],
    },
    {
      id:3,
      name: t("academy"),
      submenu: true,
      Component: Blog,
      sublinks:  [
        { name: t("degrees"), link: "/grados" },
        { name: t("courses"), link: "/cursos" },
        { name: t("freecourses"), link: "/cursos-gratuitos" },
      ],
    },
    {
      id:4,
      name: t("headquarters"),
      submenu: false,
      link: "/sedes",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  return (
    <div className="hidden md:block flex w-full bg-grisFondo p-6 text-neutral-200 md:justify-center">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src='/src/assets/logo/logoOsha.png' alt="Osha logo"  className="h-8 mr-3 sm:h-16"/>
        </Link>
        {/* Navbar */}
        <div
          onMouseLeave={() => handleSetSelected(null)}
          className="relative flex h-fit gap-2 z-50"
        >
          {navlinks.map((link) => {
            return (
              <>
                {link.submenu ? (
                  <Tab1
                    tab={link.id}
                    selected={selected}
                    handleSetSelected={handleSetSelected}
                    chevronDown={link.submenu}
                  >
                    {link.name}
                  </Tab1>
                ) : (
                  <NavLink to={link.link}
                    id={`shift-tab-${link.id}`}
                    className="flex items-center gap-1 rounded-full px-3 py-1.5 text-lg transition-colors hover:bg-primary hover:text-neutral-100 text-neutral-400"
                  >
                    {link.name}
                  </NavLink>
                )}
              </>
            );
          })}
          <AnimatePresence>
            {selected && <Content dir={dir} selected={selected} />}
          </AnimatePresence>
        </div>
        {/* Boton de Contactanos */}
        <Link to="/contactanos"
          className="px-8 py-4 bg-gradient-to-t from-primary to-sky-400 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
        >
          {t("contactUs")}
        </Link>
      </div>
    </div>
  );
};

const Tab1 = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <NavLink
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-lg transition-colors ${
        selected === tab
          ? " bg-primary text-neutral-100"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </NavLink>
  );
};

const Tabs = () => {

  const { t, i18n } = useTranslation("labels");
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2 z-50"
    >
      <NavLink to="/"
        activeClassName="text-primary"
        className="text-xl block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
        aria-current="page">
          {t("home")}
      </NavLink>
      {TABS.map((t) => {
        return (
          <Tab
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
            chevronDown={t.menu}
          >
            {t.title}
          </Tab>
        );
      })}
      <NavLink to='corporate'
        className="text-xl block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
        {t("corporate")}
      </NavLink>
      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected, chevronDown }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? " bg-primary text-neutral-100"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      {chevronDown === true && (
        <FiChevronDown
          className={`transition-transform ${
            selected === tab ? "rotate-180" : ""
          }`}
        />
      )}
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-800 via-neutral-800 to-neutral-700 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && t.menu && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};




const Nosotross = () => {
  return (
    <div className="flex flex-col gap-4">
      <NavLink to="/nosotros" className="mb-1 block text-sm text-neutral-400">
        Nosotros
      </NavLink>
      <NavLink to="/nuestra-identidad" className="block text-sm text-neutral-400">
        Nuestra identidad
      </NavLink>
      <NavLink to="/nosotros" className="mb-1 block text-sm text-neutral-400">
        Cooperación internacional
      </NavLink>
      <NavLink to="/nosotros" className="mb-1 block text-sm text-neutral-400">
        Declaración de privacidad y seguridad
      </NavLink>
      <NavLink to="/nosotros" className="mb-1 block text-sm text-neutral-400">
        Tax/VAT
      </NavLink>
    </div>
  );
};


const Acreditacion = () => {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiHome className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Acreditación</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiBarChart2 className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">ACreditación AE</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPieChart className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Areas</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPieChart className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Sedes</span>
      </a>
    </div>
  );
};



const Products = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">Startup</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Bookkeeping
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Nuestra identidad
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Osha</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Cooperación internacional
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Declaración de privacidad
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Estándares
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Enterprise</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            White glove
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            SOX Compliance
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Staffing
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            More
          </a>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiHome className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Startup</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiBarChart2 className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Scaleup</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPieChart className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Enterprise</span>
      </a>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/4.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/5.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};


const TABS = [
  {
    title: "Nosotros",
    menu: true,
    Component: Nosotross,
    link: '/standards',
  },
  {
    title: "Acreditación",
    menu: true,
    Component: Acreditacion,
    link: '/accreditation',
  },
  {
    title: "Formación Profesional",
    menu: true,
    Component: Blog,
    link: '/degrees',
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));


export default Navbar;