
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import Order from '../../Components/OrderPage/Order';
import withAuth from '../../hook/PrivateRoute';



const index = () => {



  return (


    <>

        <Sidebar active='order'></Sidebar>
        <Menubar></Menubar>
        <Order></Order>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});