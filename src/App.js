import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./Components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./Pages";
import { useStateContext } from "./Contexts/ContextProvider";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Admin from "./Pages/Admin/Admin";
import Location from "./Pages/Location/Location";
import Event from "./Pages/Event/Event";
import User from "./Pages/User/User";
import Payment from "./Pages/Payment/Payment";
import Vendor from "./Pages/Vendor/Vendor";

import AddEvent from "./Pages/Event/add";
import AddLocation from "./Pages/Location/add";
import AddVendor from "./Pages/Vendor/add";
import UpdateVendor from "./Pages/Vendor/update";

import "./App.css";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    currentUser,
    setCurrentUser,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <>
      {currentUser == true ? (
        <div className={currentMode === "Dark" ? "dark" : ""}>
          <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
              <div
                className="fixed right-4 bottom-4"
                style={{ zIndex: "1000" }}
              >
                <TooltipComponent content="Settings" position="Top">
                  <button
                    type="button"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: "50%" }}
                    className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>
              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )}
              <div
                className={
                  activeMenu
                    ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                    : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
                }
              >
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                  <Navbar />
                </div>
                <div>
                  {themeSettings && <ThemeSettings />}

                  <Routes>
                    <Route path="/" element={<Ecommerce />} />

                    {/* dashboard  */}
                    <Route path="/ecommerce" element={<Ecommerce />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/vendor" element={<Vendor />} />

                    <Route path="/event/create" element={<AddEvent />} />
                    <Route path="/location/create" element={<AddLocation />} />
                    <Route path="/vendor/create" element={<AddVendor />} />
                    <Route path="/vendor/edit" element={<UpdateVendor />} />
                    {/* pages  */}
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />

                    {/* apps  */}
                    <Route path="/kanban" element={<Kanban />} />
                    {/* <Route path="/editor" element={<Editor />} /> */}
                    <Route path="/calendar" element={<Calendar />} />
                    {/* <Route path="/color-picker" element={<ColorPicker />} /> */}

                    {/* charts  */}
                    <Route path="/line" element={<Line />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/financial" element={<Financial />} />
                    <Route path="/color-mapping" element={<ColorMapping />} />
                    {/* <Route path="/pyramid" element={<Pyramid />} /> */}
                    <Route path="/stacked" element={<Stacked />} />
                  </Routes>
                </div>
                <Footer />
              </div>
            </div>
          </BrowserRouter>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
};

export default App;
