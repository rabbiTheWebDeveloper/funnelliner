
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import Inventory from '../../Components/Stock/InventoryPage/Inventory';
import StockIn from '../../Components/Stock/StockInPage/StockIn';
import withAuth from '../../hook/PrivateRoute';



const index = () => {

  


  return (


    <>

        <Sidebar active='stock'></Sidebar>
        <Menubar></Menubar>
        <StockIn></StockIn>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});