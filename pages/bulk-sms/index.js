
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import BulkSms from '../../Components/BulkSmsPage/BulkSms';
import withAuth from '../../hook/PrivateRoute';



const index = () => {

  


  return (


    <>

        <Sidebar active='bulksms'></Sidebar>
        <Menubar></Menubar>
        <BulkSms></BulkSms>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});