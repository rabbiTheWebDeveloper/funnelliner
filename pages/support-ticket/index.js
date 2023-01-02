
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import BulkSms from '../../Components/BulkSmsPage/BulkSms';
import SupportTicket from '../../Components/SupportTicketPage/SupportTicket';
import withAuth from '../../hook/PrivateRoute';



const index = () => {

  


  return (


    <>

        <Sidebar active='supportticket'></Sidebar>
        <Menubar></Menubar>
        <SupportTicket></SupportTicket>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});