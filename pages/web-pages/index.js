
import Link from 'next/link';
import Sidebar from '../../Components/Common/Sidebar';
import Menubar from '../../Components/Common/Menubar';
import WebPages from '../../Components/WebPages/WebPages';
import withAuth from '../../hook/PrivateRoute';



const index = () => {



  return (


    <>

        <Sidebar active='mypage'></Sidebar>
        <Menubar></Menubar>
        <WebPages></WebPages>

    </>

  )

}

export default withAuth(index, {
  isProtectedRoute: true
});