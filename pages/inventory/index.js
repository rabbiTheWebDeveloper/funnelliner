
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import Inventory from '../../Components/Stock/InventoryPage/Inventory';
import withAuth from '../../hook/PrivateRoute';



const index = () => {

  


  return (


    <>

        <Sidebar active='stock'></Sidebar>
        <Menubar></Menubar>
        <Inventory></Inventory>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});