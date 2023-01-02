import Menubar from "../../Components/Common/Menubar";
import Sidebar from "../../Components/Common/Sidebar";
import MyMultiWebsite from "../../Components/MyTheme/Theme/MyMultiWebsite/MyMultiWebsite";


const index = () => {
    return (
        <>
        <Sidebar active='order'></Sidebar>
        <Menubar></Menubar>
        <MyMultiWebsite></MyMultiWebsite>
            
        </>
    );
};

export default index;