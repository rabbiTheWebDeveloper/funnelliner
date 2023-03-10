
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import AddNewPage from '../../Components/AddNewPages/AddNewPage';
import withAuth from '../../hook/PrivateRoute';



const index = () => {



  return (


    <>

        <Sidebar active='mypage'></Sidebar>
        <Menubar></Menubar>
        <AddNewPage></AddNewPage>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});