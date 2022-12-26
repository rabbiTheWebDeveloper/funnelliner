import { Box, Button, Container, Grid, Menu, MenuItem, TextField,  } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { GoGraph } from 'react-icons/go';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import Modal from '@mui/material/Modal';
import { FiEdit } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { baseLocal } from '../../constant/constant';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';


const TotalOrder = () => {
    const [salesTarget , setSalesTarget] = useState({});
    const [salesUpdate , setSalesUpdate] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
    // handleClickOrder
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    // OpenSales Modal 
    const [openSales, setOpenSales] = useState(false);
    const handleOpenSales = () => setOpenSales(true);
    const handleCloseSales = () => setOpenSales(false);
 
  // sales target form Modal 



    const token = Cookies.get("token");
   
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    

// local stroage data Modal
  


    const onSubmit = data =>{
        axios.post(baseLocal + "/client/sales-target/update", data, { headers: headers })
          .then(function (response) {
            console.log(response.data.msg);
            setSalesUpdate(response.data);
            Swal.fire("Target   Add!", response.data.msg, "success");
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.msg,
              footer: '<a href="">Why do I have this issue?</a>',
            });
          });
        console.log(data);
    
        reset();
        setOpenSales(false)

    }
       // sales target form get Modal 
    //    let cookiesUser =Cookies.get('user')
    //    let userDate =JSON.parse(cookiesUser)
    //    console.log(userDate)
   useEffect(() => {
    axios.get(baseLocal + "/client/sales-target", { headers: headers })
      .then(function (response) {
        // handle success
        let target=response.data.data
  
      
        setSalesTarget(target);
      });
  }, [salesUpdate]);
//   console.log(salesTarget)
 
   


    return (

        <>

            <section className='TotalOrder'>

                <Container maxWidth="sm">

                    <Grid container spacing={3}>

                        {/* Total Order */}
                        <Grid item xs={4}>

                            <div className="TotalOrderItem">

                                <div className="overlayImg">
                                    <img src="images/totalorder_overlay1.png" alt="" />
                                </div>
                                
                                {/* header */}
                                <div className="Header d_flex d_justify">

                                    <h5 className='d_flex'> <GoGraph/> Total Order </h5>

                                    <div className="DropDown">
                                    
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                        <h6 className='d_flex'>
                                                Today 
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
                                            <MenuItem onClick={handleClose}>Today</MenuItem>
                                            {/* <MenuItem onClick={handleClose}>Yesterday</MenuItem>
                                            <MenuItem onClick={handleClose}>Tomorrow</MenuItem>
                                            <MenuItem onClick={handleClose}>This Weak</MenuItem> */}
                                            <MenuItem onClick={handleClose}>This Month</MenuItem>
                                            <MenuItem onClick={handleClose}>Last Year</MenuItem>
                                        </Menu>

                                    </div>

                                </div>

                                <div className="Main">
                                    <h3>465</h3>

                                    <ul>
                                        <li>Leads Update:</li>
                                        <li>Increased by <span> <BsGraphUp/> 30% </span></li>
                                    </ul>

                                </div>

                            </div>      

                        </Grid>

                        {/* Total Confirmed Order */}
                        <Grid item xs={4}>

                            <div className="TotalOrderItem">

                                <div className="overlayImg">
                                    <img src="images/totalorder_overlay2.png" alt="" />
                                </div>
                                
                                {/* header */}
                                <div className="Header d_flex d_justify">

                                    <h5 className='d_flex'> <GoGraph/> Total Confirmed Order </h5>

                                    <div className="DropDown">
                                    
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                        <h6 className='d_flex'>
                                                Today 
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
                                            <MenuItem onClick={handleClose}>Today</MenuItem>
                                            <MenuItem onClick={handleClose}>Yesterday</MenuItem>
                                            <MenuItem onClick={handleClose}>Tomorrow</MenuItem>
                                            <MenuItem onClick={handleClose}>This Weak</MenuItem>
                                            <MenuItem onClick={handleClose}>This Month</MenuItem>
                                            <MenuItem onClick={handleClose}>Last Month</MenuItem>
                                        </Menu>

                                    </div>

                                </div>

                                <div className="Main">
                                    <h3>465</h3>

                                    <ul>
                                        <li>Leads Update:</li>
                                        <li>Increased by <span> <BsGraphUp/> 30% </span></li>
                                    </ul>

                                </div>

                            </div>      

                        </Grid>

                        {/* Total Sale Amount */}
                        <Grid item xs={4}>

                            <div className="TotalOrderItem">

                                <div className="overlayImg">
                                    <img src="images/totalorder_overlay3.png" alt="" />
                                </div>
                                
                                {/* header */}
                                <div className="Header d_flex d_justify">

                                    <h5 className='d_flex'> <GoGraph/> Total Sale Amount </h5>

                                    <div className="DropDown">
                                    
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                        <h6 className='d_flex'>
                                                Today 
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
                                            <MenuItem onClick={handleClose}>Today</MenuItem>
                                            <MenuItem onClick={handleClose}>Yesterday</MenuItem>
                                            <MenuItem onClick={handleClose}>Tomorrow</MenuItem>
                                            <MenuItem onClick={handleClose}>This Weak</MenuItem>
                                            <MenuItem onClick={handleClose}>This Month</MenuItem>
                                            <MenuItem onClick={handleClose}>Last Month</MenuItem>
                                        </Menu>

                                    </div>

                                </div>

                                <div className="Main">
                                    <h3>465</h3>

                                    <ul>
                                        <li>Leads Update:</li>
                                        <li>Increased by <span> <BsGraphUp/> 30% </span></li>
                                    </ul>

                                </div>

                            </div>      

                        </Grid>

                        {/* Total Available Courier Balance */}
                        <Grid item xs={4}>

                            <div className="TotalOrderItem">

                                <div className="overlayImg">
                                    <img src="images/totalorder_overlay4.png" alt="" />
                                </div>
                                
                                {/* header */}
                                <div className="Header d_flex d_justify">
                                    <h5 className='d_flex'> <GoGraph/> Total Available Courier Balance </h5>
                                </div>

                                <div className="Main">
                                    <h3> <span>BDT</span> 465</h3>

                                    <ul>
                                        <li>Leads Update:</li>
                                        <li>Increased by <span> <BsGraphUp/> 30% </span></li>
                                    </ul>

                                </div>

                            </div>      

                        </Grid>

                        {/* Sales Target (in BDT) */}
                        <Grid item xs={8}>

                            <div className="SalesTarget d_flex d_justify">
                                
                                {/* Item */}
                                <div className="TotalOrderItem">

                                    {/* header */}
                                    <div className="Header d_flex d_justify">

                                        <h5 className='d_flex'> <GoGraph/> Sales Target (in BDT) </h5>

                                        <div className="DropDown">
                                        
                                            <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                            <h6 className='d_flex'>
                                                    Today 
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
                                                <MenuItem onClick={handleClose}>Today</MenuItem>
                                                <MenuItem onClick={handleClose}>Yesterday</MenuItem>
                                                <MenuItem onClick={handleClose}>Tomorrow</MenuItem>
                                                <MenuItem onClick={handleClose}>This Weak</MenuItem>
                                                <MenuItem onClick={handleClose}>This Month</MenuItem>
                                                <MenuItem onClick={handleClose}>Last Year</MenuItem>
                                            </Menu>

                                        </div>

                                    </div>

                                    <div className="Main">
                                        <h3>{salesTarget.daily}</h3>

                                        <ul>
                                            <li>Leads Update:</li>
                                            <li><span> <BsGraphUp/> 30% </span></li>
                                        </ul>

                                        <Button className='ModalBtn' onClick={handleOpenSales}>Update Sales Target</Button>

                                        {/* modal */}
                                        <Modal
                                            open={openSales}
                                            onClose={handleCloseSales}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box>

                                                <div className="SalesTargetModal">

                                                    <div className="Header d_flex">

                                                        <div className="svg">
                                                            <FiEdit/>
                                                        </div>

                                                        <div className="text">
                                                            <h5>Update Sales Target</h5>
                                                            <p>Enter Your Sales Target In BDT</p>
                                                        </div>

                                                    </div>

                                                    <div className="Form">
                                                        <form onSubmit={handleSubmit(onSubmit)}>

                                                            <div className="CustomeInput">
                                                                <label>Enter Daily Sales Target (in BDT)</label>
                                                                <TextField id="outlined-basic" label="Daily Sales Target" variant="outlined"  {...register("daily")} />
                                                                {errors.daily && <span>This field is required</span>}
                                                            </div>

                                                            <div className="CustomeInput">
                                                                <label>Enter Weekly Sales Target (in BDT)</label>
                                                                <TextField id="outlined-basic" label="Weekly Sales Target" variant="outlined"  {...register("weekly")} />
                                                                {errors.weekly && <span>This field is required</span>}
                                                            </div>

                                                            <div className="CustomeInput">
                                                                <label>Enter Monthly Sales Target (in BDT)</label>
                                                                <TextField id="outlined-basic" label="Monthly Sales Target" variant="outlined"  {...register("monthly")} />
                                                                {errors.monthly && <span>This field is required</span>}
                                                            </div>

                                                            <div className="CustomeInput">
                                                                
                                                                <div className="DuelButton">
                                                                    <Button type='submit'>Save Changes</Button>
                                                                    <Button type='reset' className='Delete'>Delete</Button>
                                                                </div>

                                                            </div>
                                                    
                                                        </form>

                                                    </div>

                                                </div>

                                            </Box>

                                        </Modal>

                                    </div>

                                </div>
                                
                                <div className="salseChart">
                                    <img src="images/salse.png" alt="" />
                                </div>

                                {/* Item */}
                                <div className="TotalOrderItem">

                                    {/* header */}
                                    <div className="Header d_flex d_justify">

                                        <h5 className='d_flex'> <GoGraph/> Total Order Cancel </h5>

                                        <div className="DropDown">
                                        
                                            <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                            <h6 className='d_flex'>
                                                    Today 
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
                                                <MenuItem onClick={handleClose}>Today</MenuItem>
                                                <MenuItem onClick={handleClose}>Yesterday</MenuItem>
                                                <MenuItem onClick={handleClose}>Tomorrow</MenuItem>
                                                <MenuItem onClick={handleClose}>This Weak</MenuItem>
                                                <MenuItem onClick={handleClose}>This Month</MenuItem>
                                                <MenuItem onClick={handleClose}>Last Month</MenuItem>
                                            </Menu>

                                        </div>

                                    </div>

                                    <div className="Main">
                                        <h3> 10,50,000</h3>

                                        <ul>
                                            <li>Leads Update:</li>
                                            <li><span> <BsGraphUp/> 30% </span></li>
                                        </ul>

                                        <h6 className='CancelOrder'><span>Order Cancelled:</span> 188/590</h6>

                                    </div>

                                </div>

                            </div>      

                        </Grid>

                    </Grid>

                </Container>

            </section>
        
        </>
    
    )

}

export default TotalOrder