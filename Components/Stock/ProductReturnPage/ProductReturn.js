import { Box, Button, Checkbox, Container, FormControl, Grid, InputLabel, Menu, MenuItem, Pagination, Select, Skeleton, Stack, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineInventory } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import Swal from 'sweetalert2';
import { headers } from '../../../pages/api';
import { baseTest } from './../../../constant/constant';



const ProductReturn = () => {


    // Filter 
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
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

    // // handleConfirmed
    // const [anchorEl2, setAnchorEl2] = useState(null);
    // const open2 = Boolean(anchorEl2);
    // const handleConfirmed = (event) => {
    //     setAnchorEl2(event.currentTarget);
    // };
    // const handleCloseConfirmed = () => {
    //     setAnchorEl2(null);
    // };

    // UpdateStockModal
    const [openStock, setOpenStock] = useState(false);
    const handleOpenStock = () => setOpenStock(true);
    const handleStockClose = () => setOpenStock(false);



    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(6);
    const [page, setPage] = useState(1);
  
   
    useEffect(() => {
      axios
        .get(baseTest + "/client/stocks/product-return/list", { headers: headers })
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

                    <Grid Container spacing={3}>

                        <Grid item xs={12}>

                            <div className="Header d_flex d_justify">

                                {/* Left */}
                                <div className="Left d_flex">
                                
                                    <div className="svg">
                                        <MdOutlineInventory/>
                                    </div>

                                    <div className="text">
                                        <h4>Product Return</h4>
                                        <p>Shop Products ListReport of your product return</p>
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

                        <div className="Pending">

                            <div className="MoveToComplete d_flex d_justify">

                                <div className="DropDown">
                                
                                    {/* <Button>
                                        <h6 className='d_flex'>
                                            Delete
                                            <div className="svg"><AiFillCaretDown/></div> 
                                        </h6>
                                    </Button> */}

                                </div>

                                <div className="DropDown Download">
                        
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                    <h6 className='d_flex'>
                                            Download Report 
                                            <div className="svg"><AiFillCaretDown/></div> 
                                        </h6>
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>As PDF</MenuItem>
                                        <MenuItem onClick={handleClose}>As Xml</MenuItem>
                                        <MenuItem onClick={handleClose}>As Doc File</MenuItem>
                                    </Menu>

                                </div>

                            </div>

                            <div className="ProductTable">

                                <table>

                                    <thead>

                                        <tr>
                                            <th>Order No.</th>
                                            <th>Order Date</th>
                                            <th>Return Date</th>
                                            <th>Customer Name </th>
                                            <th>Contact No.</th>
                                            <th>Address</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Total Price</th>
                                            <th>Cancellation Note</th>
                                        </tr>

                                    </thead>

                                    {currentProduct.length === 0 ? (
                                    <Box sx={{ width: 40 }}>
                                    <Skeleton     width={1570} height={28} />
                                    <Skeleton     width={1570} height={28} />
                                    <Skeleton     width={1570} height={28} />
                                    <Skeleton     width={1570} height={28} />
                                    <Skeleton     width={1570} height={28} />
                                    <Skeleton     width={1570} height={28} />
                                    <Skeleton     width={1570} height={28} />
                                    <Skeleton     width={1570} height={28} />
                                    <Skeleton     width={1570} height={28} />
                                    <Skeleton     width={1570} height={28} />
                                    <Skeleton     width={1570} height={28} />
                                    <Skeleton     width={1570} height={28} />                                   
                                    </Box>
                                 ) : (
                                <tbody>
                                {currentProduct?.map((product) => {
                                    return (
                                    <tr key={product.id}>
                                        <td>
                                        <Checkbox />
                                        </td>
                                        <td>
                                        <img src={product.main_image.name} alt="" />
                                        </td>
                                        <td>{product?.id}</td>
                                        <td>{product?.product_name}</td>
                                        <td>{product.product_code}</td>
                                        <td>{product.price}</td>
                                        <td>{product.product_qty}</td>
                                        <td className='EditViewDelete'>
                                               
                                                {/* Modal */}
                                                <UpdateStock productId={product?.id}></UpdateStock>
                                               
                                            </td>
                                    </tr>
                                    );
                                })}
                    </tbody>
                  )}

                                </table>

                            </div>
                            <Box>
                                    <Stack spacing={2}>
                    {console.log(pageNumbers.length + 1)}
                    <Pagination
                        count={pageNumbers.length}
                        variant="outlined"                                                                                      
                        page={page}
                        onChange={paginate}
                    />
                    </Stack>
              </Box>
                            
                        </div>

                    </div>

                </Container>

            </section>

        </>

    )

}

export default ProductReturn