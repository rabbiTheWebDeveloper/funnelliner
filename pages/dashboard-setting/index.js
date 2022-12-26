import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Container, Grid, Tab, Tabs,  } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { RiComputerLine } from 'react-icons/ri';
import { AiOutlineFieldTime, AiOutlineCalendar } from 'react-icons/ai';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import DashboardSetting from '../../Components/DashboardSettingPage/DashboardSetting';
import withAuth from '../../hook/PrivateRoute';



const index = () => {

  


  return (


    <>

        <Sidebar></Sidebar>
        <Menubar></Menubar>
        <DashboardSetting></DashboardSetting>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});