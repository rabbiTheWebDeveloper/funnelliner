
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import Order from '../../Components/OrderPage/Order';
import Category from '../../Components/CategoryPage/Category';
import withAuth from '../../hook/PrivateRoute';



const index = () => {



  return (


    <>

      <Sidebar active='product'></Sidebar>
      <Menubar></Menubar>
      <Category></Category>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});