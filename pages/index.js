import Sidebar from '../Components/Common/Sidebar'
import Menubar from '../Components/Common/Menubar'
import NoticeBoard from '../Components/HomePage/NoticeBoard'
import TotalOrder from '../Components/HomePage/TotalOrder'
import GraphChart from '../Components/HomePage/GraphChart'
import TopSellingProducts from '../Components/HomePage/TopSellingProducts'
import WebsiteLink from '../Components/HomePage/WebsiteLink'
import withAuth from '../hook/PrivateRoute'
import { Fragment } from 'react'

const index = () => {

  
  return (
    
    <Fragment>
        {/* Sidebar */}
        <Sidebar active='dashboard'></Sidebar>
        <Menubar></Menubar>
        <WebsiteLink></WebsiteLink>
        <NoticeBoard></NoticeBoard>
        <TotalOrder></TotalOrder>
        <GraphChart></GraphChart>
        <TopSellingProducts></TopSellingProducts>
    </Fragment>
     

    
    
  )
};
export default withAuth(index, {
  isProtectedRoute: true
});
