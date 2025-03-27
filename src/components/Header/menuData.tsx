import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Packages",
    path: "/packages",
    newTab: false,
  },
  {
    id: 3,
    title: "Portfolio",
    path: "/portfolio",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Custom Logo Design",
        path: "/customlogo",
        newTab: false,
      },
      {
        id: 42,
        title: "Custom Web Development",
        path: "/customweb",
        newTab: false,
      },
      {
        id: 43,
        title: "Video Animation ",
        path: "/customvideo",
        newTab: false,
      },
      {
        id: 44,
        title: "Branding",
        path: "/custombranding",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
