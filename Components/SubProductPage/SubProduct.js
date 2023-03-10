
import { Box, Button, Checkbox, Container, Grid, Menu, MenuItem, Pagination, Stack } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineRemoveRedEye, MdProductionQuantityLimits } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { baseUrl } from '../../constant/constant';
import { headers } from '../../pages/api';




const SubProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(6);

    

  const [page, setPage] = useState(1);
    const router = useRouter();

  
    // handleClick Move To Completed
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

   

   

  
  
  
    // const token =Cookies.get('token')
   
    // const headers = {
    //   Authorization: `Bearer ${token}`,
    // };
    useEffect(() => {
      axios.get(baseUrl + "/client/categories", { headers: headers })
        .then(function (response) {
          let allProduct = response.data.data
           setProducts(allProduct);
        });
    }, []);

  
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
          .delete(baseUrl + "/client/categories/" + id, { headers: headers })
          .then(function (result) {
            // handle success
            console.log(result);
            if (result) {
  
              setProducts((pd) => {
                const filter = products.filter((prod) => {
                  return prod.id !== id;
                });
                return [...filter];
              });
              // props.history.push("/category")
              // router.push("/category");
            } else {
  
            }
          });
          Swal.fire("Deleted!", "Your file has been deleteddd.", "success");
        }
      });
  
     
    };
  
  
  
    const indexOfLastProducts = currentPage * perPage;
      const indexOfFirstProducts = indexOfLastProducts - perPage;
      const currentProduct = products.slice(indexOfFirstProducts, indexOfLastProducts)
  
      const pageNumbers = []
      for (let i = 1; i <= Math.ceil(products.length / perPage); i++) {
          pageNumbers.push(i)
      }
   
      const paginate = pageNumber => setCurrentPage(pageNumber);


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
                                        <MdProductionQuantityLimits/>
                                    </div>

                                    <div className="text">
                                        <h4>Category</h4>
                                        <p>Shop Category List</p>
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
                                        
                                            <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                                <h6 className='d_flex'>
                                                    Delete
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
                                                <MenuItem onClick={handleClose}>Move To Shipped</MenuItem>
                                                <MenuItem onClick={handleClose}>Move To Confirmed</MenuItem>
                                                <MenuItem onClick={handleClose}>Move To Follow Up</MenuItem>
                                            </Menu>

                                        </div>

                                        <Link href='/sub-category' className='AddProduct'>Add Category <BiPlus/></Link>

                                    </div>

                                    <div className="ProductTable">

                                        <table>

                                            <thead>

                                                <tr>
                                                    <th><Checkbox/></th>
                                                    <th>Image</th>
                                                    <th>SL</th>
                                                    <th>Product Name</th>
                                                    <th>Product Code</th>
                                                    <th>Selling Price (BDT)</th>
                                                    <th>Quantity</th>
                                                    <th>Added On</th>
                                                    <th>Action</th>
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
                                                    <tr>
                                                    <td><Checkbox/></td>
                                                    <td>
                                                        <img src="images/img1.png" alt="" />
                                                    </td>
                                                    <td>{product.id}</td>
                                                    <td>{product.name}</td>
                                                    <td>0123456</td>
                                                    <td>7529</td>
                                                    <td>300</td> 
                                                    <td>24 May, 2020</td>
                                                    <td className='EditViewDelete'>
                                                        <Link href=''> <MdOutlineRemoveRedEye/> </Link>
                                                        <Link href=''> <FiEdit/> </Link>
                                                        <Link
                                href=""
                                onClick={() => deleteProduct(product.id)}
                              >
                                {" "}
                                <RiDeleteBin6Line />{" "}
                              </Link>
                                                    </td>
                                                </tr>

                                                )
                                            })}

                                            
                                               

                                            </tbody>
                  )}
                                        </table>

                                    </div>
                                    <Box
                sx={{
                  margin: "auto",
                  width: "fit-content",
                  alignItems: "center",
                }}
              >
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

export default SubProduct