
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import WebsiteSettingPage from '../../Components/WebsiteSettingPage/WebsiteSettingPage';
import LandingWebsite from '../../Components/MyTheme/LandingPage/LandingWebsite';
import withAuth from '../../hook/PrivateRoute';



const index = () => {




  return (


    <>

        <Sidebar active='website-setting'></Sidebar>
        <Menubar></Menubar>
        {/* <WebsiteSettingPage></WebsiteSettingPage> */}
        <LandingWebsite></LandingWebsite>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});