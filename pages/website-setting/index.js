import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Container, Grid, Tab, Tabs,  } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { RiComputerLine } from 'react-icons/ri';
import { AiOutlineFieldTime, AiOutlineCalendar } from 'react-icons/ai';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import DashboardSetting from '../../Components/DashboardSettingPage/DashboardSetting';
import WebsiteSettingPage from '../../Components/WebsiteSettingPage/WebsiteSettingPage';
import withAuth from '../../hook/PrivateRoute';



const index = () => {

  


  return (


    <>

        <Sidebar active='website-setting'></Sidebar>
        <Menubar></Menubar>
        <WebsiteSettingPage></WebsiteSettingPage>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});