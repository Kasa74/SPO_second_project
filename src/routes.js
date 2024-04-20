import { Component } from "react";
import ToursPage from "./pages/ToursPage/ToursPage";
import TourItemPage from "./pages/TourItemPage/TourItemPage";
import ContactForm from "./components/ContactForm/ContactForm";
import OrderPage from "./pages/OrderPage/OrderPage";
import Success from "./components/Success/Success";
import Main from "./pages/Main/Main";
import News from "./pages/News/News";

export const routes = [
  {
    path: "/",
    Component: Main,
  },
  {
    path: "/news",
    Component: News,
  },
  {
    path: "/tours",
    Component: ToursPage,
  },
  {
    path: "/tour" + "/:id",
    Component: TourItemPage,
  },
  {
    path: "/order",
    Component: OrderPage,
  },
  {
    path: "/success",
    Component: Success,
  },
];
