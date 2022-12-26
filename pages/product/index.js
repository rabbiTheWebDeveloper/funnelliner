
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import Product from '../../Components/ProductPage/Product';
import withAuth from '../../hook/PrivateRoute';



const index = () => {

  


  return (


    <>

        <Sidebar active='product'></Sidebar>
        <Menubar></Menubar>
        <Product></Product>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});