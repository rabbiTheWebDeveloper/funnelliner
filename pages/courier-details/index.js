import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Container, Grid, Tab, Tabs,  } from '@mui/material';
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import CourierDetails from '../../Components/CourierPage/CourierDetails';
import withAuth from '../../hook/PrivateRoute';



const index = () => {

  


  return (


    <>

        <Sidebar active='courier'></Sidebar>
        <Menubar></Menubar>
        <CourierDetails></CourierDetails>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});