import { useTranslation } from "react-i18next";

//const { t, i18n } = useTranslation("labels");

export const links = [
  {
    name: "Nosotros",
    submenu: true,
    sublinks: [
      {
        Head: "Sobre nosotros",
        sublink: [
          { name: "Nosotros", link: "/us" },
          { name: "Nuestra Identidad", link: "/" },
          { name: "Coperación Internacional", link: "/" },
          { name: "Declaración de Privacidad y Seguridad", link: "/" },
          { name: "Estándares Osha Institute", link: "/standards" },
        ],
      },
    ],
  },
  {
    name: "Acreditación",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "Acreditación", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Instrución",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Instrucción",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Grados",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
    ],
  },
];