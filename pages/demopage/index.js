
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
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
