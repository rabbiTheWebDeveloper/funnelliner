import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Container, Grid, Tab, Tabs,  } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { RiComputerLine } from 'react-icons/ri';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import PluginDetails from '../../Components/PluginDetailsPage/PluginDetails';


const index = () => {

  


  return (


    <>

      <Sidebar active='plugins'></Sidebar>
      <Menubar></Menubar>
      <PluginDetails></PluginDetails>

    </>

  )

}

export default index