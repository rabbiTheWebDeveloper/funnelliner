
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import CustomerList from '../../Components/CustomerListPage/CustomerList';
import withAuth from '../../hook/PrivateRoute';



const index = () => {

  


  return (


    <>

      <Sidebar active='customar'></Sidebar>
      <Menubar></Menubar>
      <CustomerList></CustomerList>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});