
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import MultiWebsite from '../../Components/MyTheme/MultiWebsitePage/MultiWebsite';
import withAuth from '../../hook/PrivateRoute';



const index = () => {

  


  return (


    <>

      <Sidebar active='tamplate'></Sidebar>
      <Menubar></Menubar>
      <MultiWebsite></MultiWebsite>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});