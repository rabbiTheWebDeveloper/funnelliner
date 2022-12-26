import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Button, Checkbox, Container, FormControl, Grid, InputLabel, Menu, MenuItem, Select, Tab, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BsSearch, BsGraphUp } from 'react-icons/bs';
import { BiReceipt } from 'react-icons/bi';
import { MdOutlineReceiptLong, MdOutlineRemoveRedEye } from 'react-icons/md';
import { FiDownloadCloud, FiEdit } from 'react-icons/fi';
import { AiFillCaretDown } from 'react-icons/ai';
import Modal from '@mui/material/Modal';
import Link from 'next/link';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RxUpdate } from 'react-icons/rx';
import axios from 'axios';
import { baseTest } from '../../constant/constant';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import moment from "moment";



const WebPages = () => {


    // UpdateStockModal
    const [openStock, setOpenStock] = useState(false);
    const handleOpenStock = () => setOpenStock(true);
    const handleStockClose = () => setOpenStock(false);


    // Tabs
    const [value, setValue] = useState('1');

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };
  
    // handleClick Move To Completed
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // handleConfirmed
    const [anchorEl2, setAnchorEl2] = useState(null);
    const open2 = Boolean(anchorEl2);
    const handleConfirmed = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleCloseConfirmed = () => {
        setAnchorEl2(null);
    };


    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(6);
    const [page, setPage] = useState(1);
  
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };





    useEffect(() => {
        axios
          .get(baseTest + "/client/pages", { headers: headers })
          .then(function (response) {
            // handle success
            setProducts(response.data.data);
          });
      }, []);
      // console.log(products);
    
      const deleteProduct = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(baseTest + "/client/products/" + id, { headers: headers })
              .then(function (result) {
                // handle success
    
                if (result) {
                  setProducts((pd) => {
                    const filter = products.filter((prod) => {
                      return prod.id !== id;
                    });
                    return [...filter];
                  });
                } else {
                }
              });
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      };
    
      const indexOfLastProducts = currentPage * perPage;
      const indexOfFirstProducts = indexOfLastProducts - perPage;
      const currentProduct = products.slice(
        indexOfFirstProducts,
        indexOfLastProducts
      );
    
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(products.length / perPage); i++) {
        pageNumbers.push(i);
      }
      // console.log(pageNumbers);
    
      const paginate = (pageNumber, value) => setCurrentPage(value);
    



    return (



        <>

            <section className='TopSellingProducts DashboardSetting Order'>

                <Container maxWidth="sm">

                    {/* header */}
                    <Grid Container spacing={3}>

                        <Grid item xs={12}>

                            <div className="Header d_flex d_justify">

                                {/* Left */}
                                <div className="Left d_flex">
                                
                                    <div className="svg">
                                        <MdOutlineReceiptLong/>
                                    </div>

                                    <div className="text">
                                    <h4>Orders</h4>
                                    <p>Order List</p>
                                    </div>

                                </div>

                                {/* Right */}
                                <div className="Right d_flex">

                                    {/* item */}
                                    <div className="FilterItem">

                                        <div className="CustomeInput">
                                            <TextField id="outlined-basic" label="Search Here..." variant="outlined" />
                                            <Button> <BsSearch/> </Button>
                                        </div>

                                    </div>

                                </div>

                                
                            </div>   

                        </Grid>

                    </Grid>

                    {/* DashboardSettingTabs */}
                    <div className="DashboardSettingTabs WebsiteSettingPage">

                        <Box sx={{ width: '100%', typography: 'body1' }}>

                        <TabContext value={value}>

                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                
                                <div className="WebPages d_flex d_justify">

                                    <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                                        <Tab label="All Pages" value="1" />
                                        <Tab label="Published Pages" value="2" />
                                    </TabList>

                                    <Button className='AddNewOrder'> <Link href='/add-new-pages'>Create New Page</Link> </Button>

                                </div>

                            </Box>

                            {/* All Pages */}
                            <TabPanel value="1">

                                <div className="Pending">

                                    <div className="ProductTable">

                                        <table>

                                            <thead>

                                                <tr>
                                                    <th>Page Title</th>
                                                    <th>Creation Date</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>

                                            </thead>

                                            <tbody>



                                            {products.map((product, index) =>{
                                                    return (
                                                        <tr key={index}>
                                                        <td>{product.title}</td>
                                                        <td>{moment(product.created_at).fromNow()}</td>
                                                        <td className='EditViewDelete'> <Button className={product.status===1 ? "UpdateStock" : "Unpublished"}>Published</Button></td>
                                                        <td className='EditViewDelete'>
                                                            <Link href=''> <MdOutlineRemoveRedEye/> </Link>
                                                            <Link href=''> <FiEdit/> </Link>
                                                            <Link href=''> <RiDeleteBin6Line/> </Link>
                                                        </td>
                                                    </tr>


                                                    )
                                                })}
                                                {/* {products.map((product, index) =>{
                                                    return (
                                                        <tr key={index}>
                                                        <td>{product.title}</td>
                                                        <td>{moment(product.created_at).endOf('day').fromNow()}</td>
                                                        <td className='EditViewDelete'> <Button className={product.status===1 ? "UpdateStock" : "Unpublished"}>Published</Button></td>
                                                    <td className='EditViewDelete'>
                                                        <Link href=''> <MdOutlineRemoveRedEye/> </Link>
                                                        <Link href=''> <FiEdit/> </Link>
                                                        <Link href=''> <RiDeleteBin6Line/> </Link>
                                                    </td>
                                                    </tr>


                                                    )
                                                })} */}

                                              

                                            </tbody>

                                        </table>

                                    </div>
                                    
                                </div>

                            </TabPanel>

                            {/* Published Pages */}
                            <TabPanel value="2">

                                <div className="Pending">

                                    <div className="ProductTable">

                                        <table>

                                            <thead>

                                                <tr>
                                                    <th>Page Title</th>
                                                    <th>Creation Date</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>

                                            </thead>

                                            <tbody>
                                            {products.map((product, index) =>{

                                                    if(product.status ===1){
                                                        return (
                                                            <tr key={index}>
                                                            <td>{product.title}</td>
                                                            <td>{moment(product.created_at).fromNow()}</td>
                                                            <td className='EditViewDelete'> <Button className={product.status===1 ? "UpdateStock" : "Unpublished"}>Published</Button></td>
                                                            <td className='EditViewDelete'>
                                                                <Link href=''> <MdOutlineRemoveRedEye/> </Link>
                                                                <Link href=''> <FiEdit/> </Link>
                                                                <Link href=''> <RiDeleteBin6Line/> </Link>
                                                            </td>
                                                        </tr>
                                                        )
                                                    }
                                            })}
                                               


                                                

                                                {/* item */}
                                               

                                            </tbody>

                                        </table>

                                    </div>

                                </div>

                            </TabPanel>

                        </TabContext>
                        
                        </Box>

                    </div>

                </Container>

            </section>

        </>

    )

}

export default WebPages