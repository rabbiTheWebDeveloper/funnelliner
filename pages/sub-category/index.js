
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import SubCategory from '../../Components/SubCategoryPage/SubCategory';
import withAuth from '../../hook/PrivateRoute';



const index = () => {



  return (


    <>

      <Sidebar active='product'></Sidebar>
      <Menubar></Menubar>
      <SubCategory></SubCategory>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});