import { Collapse, List, ListItemButton } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiOutlineFileDone,
  AiOutlineShoppingCart,
  AiOutlineStock,
} from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsCodeSlash, BsPlug } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlinePayments, MdOutlineSpaceDashboard } from "react-icons/md";
import { RiSettings2Line, RiTeamLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { baseLocal } from "../../constant/constant";
import { BsShop } from "react-icons/bs";
import { headers } from "../../pages/api";

const Sidebar = (props) => {
  const [busInfo, setBusInfo] = useState({});

  const [openCategory, setOpenCategory] = React.useState(false);
  const [openStock, setOpenStock] = React.useState(false);
  const [openTemplate, setOpenTemplate] = React.useState(false);
  const [openMyTemplate, setOpenMyTemplate] = React.useState(false);

  // handleCategory
  const handleCategory = () => {
    setOpenCategory(!openCategory);
  };

  // handleStock
  const handleStock = () => {
    setOpenStock(!openStock);
  };

  // handleTemplate
  const handleTemplate = () => {
    setOpenTemplate(!openTemplate);
  };

  // handleTemplate
  const handleMyTemplate = () => {
    setOpenMyTemplate(!openMyTemplate);
  };

  // const token = Cookies.get("token");
  // // console.log(token)
  // const headers = {
  //   Authorization: `Bearer ${token}`,
  // };

  useEffect(() => {
    axios
      .get(baseLocal + "/client/settings/business-info", { headers: headers })
      .then(function (response) {
        // handle success
        // let target = response.data.data;
        setBusInfo(response.data.data);
      });
  }, []);

  // "images/shop.png"

  return (
    <>
      <section className='Sidebar'>
        {/* logo */}
        <div className='Logo'>
          <Link href='/'>
            <img src='images/logo.svg' alt='' />
          </Link>
        </div>

        {/* Shop */}
        <div className='Shop'>
          <Link href='/'>
            {
              busInfo?.shop_logo?.name?<img src={busInfo?.shop_logo?.name} alt='' />:<BsShop style={{fontSize:"50px"}}/>
            }
            {/* <img src={busInfo?.shop_logo?.name} alt='' /> */}
          </Link>
          <h4>{busInfo?.name}</h4>
          <p>ID: {busInfo?.user_id}</p>
        </div>

        <div className='MenuItemContent'>
          {/* Dashboard */}
          <div className='MenuItem'>
            <ListItemButton>
              <Link
                href='/'
                className={props.active == "dashboard" && "active"}
              >
                {" "}
                <MdOutlineSpaceDashboard /> Dashboard
              </Link>
            </ListItemButton>
          </div>

          {/* Orders */}
          <div className='MenuItem'>
            <ListItemButton>
              <Link
                href='/order'
                className={props.active == "order" && "active"}
              >
                {" "}
                <AiOutlineFileDone /> Orders
              </Link>
            </ListItemButton>
          </div>

          {/* Products */}
          <div className='MenuItem'>
            <ListItemButton onClick={() => handleCategory(true)}>
              <Link href='#' className={props.active == "product" && "active"}>
                {" "}
                <AiOutlineShoppingCart /> Products{" "}
                <span>
                  <FiChevronDown />
                </span>
              </Link>
            </ListItemButton>

            <Collapse in={openCategory} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <Link href='/product'>Product</Link>
              </List>

              <List component='div' disablePadding>
                <Link href='/sub-product'>Category</Link>
              </List>
            </Collapse>
          </div>

          {/* Orders */}
          <div className='MenuItem'>
            <ListItemButton>
              <Link
                href='/courier'
                className={props.active == "courier" && "active"}
              >
                {" "}
                <TbTruckDelivery /> Courier
              </Link>
            </ListItemButton>
          </div>

          {/* Stock */}
          <div className='MenuItem'>
            <ListItemButton onClick={() => handleStock(true)}>
              <Link href='#' className={props.active == "stock" && "active"}>
                {" "}
                <AiOutlineStock /> Stock{" "}
                <span>
                  <FiChevronDown />
                </span>
              </Link>
            </ListItemButton>

            <Collapse in={openStock} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <Link href='/inventory'>Inventory</Link>
              </List>

              <List component='div' disablePadding>
                <Link href='/stockin'>Stock In</Link>
              </List>

              <List component='div' disablePadding>
                <Link href='/product-return'>Product Return</Link>
              </List>
            </Collapse>
          </div>

          {/* Bulk SMS */}
          <div className='MenuItem'>
            <ListItemButton>
              <Link
                href='/bulk-sms'
                className={props.active == "bulksms" && "active"}
              >
                {" "}
                <BiMessageRoundedDots /> Bulk SMS
              </Link>
            </ListItemButton>
          </div>

          {/* Support Ticket */}
          <div className='MenuItem'>
            <ListItemButton>
              <Link
                href='/support-ticket'
                className={props.active == "supportticket" && "active"}
              >
                {" "}
                <BiMessageRoundedDots />
                Support Ticket
              </Link>
            </ListItemButton>
          </div>

          {/* Customers */}
          <div className='MenuItem'>
            <ListItemButton>
              <Link
                href='/customer-list'
                className={props.active == "customar" && "active"}
              >
                {" "}
                <RiTeamLine /> Customers
              </Link>
            </ListItemButton>
          </div>

          {/* Templates */}
          <div className='MenuItem'>
            <ListItemButton onClick={() => handleTemplate(true)}>
              <Link href='' className={props.active == "tamplate" && "active"}>
                {" "}
                <RiSettings2Line /> Templates{" "}
                <span>
                  <FiChevronDown />
                </span>
              </Link>
            </ListItemButton>

            <Collapse in={openTemplate} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <Link href='landing-page'>Landing Page Website</Link>
              </List>

              <List component='div' disablePadding>
                <Link href='multi-page'>Multi Page Website</Link>
              </List>
            </Collapse>
          </div>

          {/* My Page */}
          <div className='MenuItem'>
            <ListItemButton onClick={() => handleMyTemplate(true)}>
              <Link href='' className={props.active == "mypage" && "active"}>
                {" "}
                <FaLaptopCode /> My Page{" "}
                <span>
                  <FiChevronDown />
                </span>
              </Link>
            </ListItemButton>

            <Collapse in={openMyTemplate} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <Link href='/myLandingPage'>Landing Page Website</Link>
              </List>

              <List component='div' disablePadding>
                <Link href='/myMultiWebsite'>Multi Page Website</Link>
              </List>

              <List component='div' disablePadding>
                <Link href='/web-pages'>Pages</Link>
              </List>

              <List component='div' disablePadding>
                <Link href=''>Menus</Link>
              </List>
            </Collapse>
          </div>

          {/* Website Setting */}
          <div className='MenuItem'>
            <ListItemButton>
              <Link
                href='/website-setting'
                className={props.active == "website-setting" && "active"}
              >
                {" "}
                <BsCodeSlash /> Website Setting
              </Link>
            </ListItemButton>
          </div>

          {/* Plugins */}
          <div className='MenuItem'>
            <ListItemButton>
              <Link
                href='/plug-in'
                className={props.active == "plugins" && "active"}
              >
                {" "}
                <BsPlug /> Plugins
              </Link>
            </ListItemButton>
          </div>

          {/* Offers */}
          {/* <div className="MenuItem">
            <ListItemButton>
              <Link href='' className={props.active == 'offer' && 'active'}> <MdOutlineLocalOffer/> Offers</Link>
            </ListItemButton>
          </div> */}

          {/* Offers */}
          <div className='MenuItem'>
            <ListItemButton>
              <Link href='/' className={props.active == "payment" && "active"}>
                {" "}
                <MdOutlinePayments /> Payment
              </Link>
            </ListItemButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
