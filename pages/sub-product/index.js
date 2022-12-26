
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import SubProduct from '../../Components/SubProductPage/SubProduct';
import withAuth from '../../hook/PrivateRoute';



const index = () => {

  


  return (


    <>

        <Sidebar active='product'></Sidebar>
        <Menubar text ='Category'></Menubar>
        <SubProduct></SubProduct>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});