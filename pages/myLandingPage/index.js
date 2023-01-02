import Menubar from "../../Components/Common/Menubar";
import Sidebar from "../../Components/Common/Sidebar";
import MyLandingPage from "../../Components/MyTheme/Theme/MyLandingPage/MyLandingPage";


const index = () => {
    return (
        <>
        <Sidebar active='order'></Sidebar>
        <Menubar></Menubar>
        <MyLandingPage></MyLandingPage>
            
        </>
    );
};

export default index;