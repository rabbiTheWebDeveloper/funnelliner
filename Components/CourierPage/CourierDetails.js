import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Button, Container, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Tab, TextField } from '@mui/material';
import React, { useState } from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import Switch from '@mui/material/Switch';
import { GoGraph } from 'react-icons/go';
import Modal from '@mui/material/Modal';
import { GiReturnArrow } from 'react-icons/gi';
import { FiEdit } from 'react-icons/fi';



const CourierDetails = () => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    // UpdateStockModal
    const [openStock, setOpenStock] = useState(false);
    const handleOpenStock = () => setOpenStock(true);
    const handleStockClose = () => setOpenStock(false);

    return (

        <>

            <section className='TopSellingProducts DashboardSetting Courier'>

                <Container maxWidth="sm">

                    <Grid Container spacing={3}>

                        <Grid item xs={12}>

                            <div className="Header d_flex d_justify">

                                {/* Left */}
                                <div className="Left d_flex">
                                
                                    <div className="svg">
                                        <TbTruckDelivery/>
                                    </div>

                                    <div className="text">
                                        <h4>Courier</h4>
                                        <p>Deliver your products with your preferred courier service</p>
                                    </div>

                                </div>
                                
                            </div>   

                        </Grid>

                    </Grid>

                    {/* CourierContent */}
                    <div className="CourierDetailsContent">

                        <Grid container spacing={3}>

                            {/* item */}
                            <Grid item xs={12}>

                                {/* item */}
                                <div className="CourierDetailsItem">

                                    <div className="img">
                                        <img src="images/steadfast.png" alt="" />
                                    </div>

                                    <div className="CourierDetailsList">

                                        <Grid container spacing={3}>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Total Parcel</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Total Delivered</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Total Cancelled</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Total Pending</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Parcel To Be Delivered</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem Last">
                                                    
                                                    <h6> <GoGraph/> Total Balance</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                        </Grid>

                                    </div>

                                    <div className="RequestPayment">

                                        <Button onClick={handleOpenStock}>Request Payment</Button>

                                        {/* Modal */}
                                        <Modal
                                            open={openStock}
                                            onClose={handleStockClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                            >
                                            <Box>

                                                <div className="UpdateStockModal">

                                                    {/* <div className="Close">
                                                        <IoMdClose/>
                                                    </div> */}

                                                    <Grid Container spacing={3}>

                                                        <Grid item xs={12}>

                                                            <div className="Header">

                                                                {/* Left */}
                                                                <div className="Left d_flex">
                                                                
                                                                    <div className="svg">
                                                                        <GiReturnArrow/>
                                                                    </div>

                                                                    <div className="text">
                                                                        <h4>Request Payment</h4>
                                                                        <p>Payment Request For Due Amount</p>
                                                                    </div>

                                                                </div>

                                                                <div className="UpdateStockModalContent ">

                                                                    <div className="CustomeInput">

                                                                        <div className="CheckPaymentContent d_flex">

                                                                            {/* item */}
                                                                            <div className="CheckPayment">
                                                                                <input type="radio" name='Payment' id='Bkash'/>
                                                                                <label htmlFor="Bkash"><img src="images/bkash.png" alt="" /></label>
                                                                            </div>

                                                                            {/* item */}
                                                                            <div className="CheckPayment">
                                                                                <input type="radio" name='Payment' id='Nagod'/>
                                                                                <label htmlFor="Nagod"><img src="images/nagod.png" alt="" /></label>
                                                                            </div>

                                                                            {/* item */}
                                                                            <div className="CheckPayment">
                                                                                <input type="radio" name='Payment' id='Bank'/>
                                                                                <label htmlFor="Bank"><img src="images/banktransfer.png" alt="" /></label>
                                                                            </div>

                                                                            {/* item */}
                                                                            <div className="CheckPayment">
                                                                                <input type="radio" name='Payment' id='Cash'/>
                                                                                <label htmlFor="Cash"><img src="images/cashpayment.png" alt="" /></label>
                                                                            </div>

                                                                        </div>


                                                                        <p>Note for payment receive : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                                                        <div className="Item">
                                                                            <Button className='Update'>Continue</Button>
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                                
                                                            </div>   

                                                        </Grid>

                                                    </Grid>

                                                </div>
                                                
                                            </Box>

                                        </Modal>

                                    </div>
                                    
                                </div>

                                {/* item */}
                                <div className="CourierDetailsItem">

                                    <div className="img">
                                        <img src="images/pathao.png" alt="" />
                                    </div>

                                    <div className="CourierDetailsList">

                                        <Grid container spacing={3}>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Total Parcel</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Total Delivered</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Total Cancelled</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Total Pending</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Parcel To Be Delivered</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem Last">
                                                    
                                                    <h6> <GoGraph/> Total Balance</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                        </Grid>

                                    </div>

                                    <div className="RequestPayment">

                                        <Button>Request Payment</Button>

                                    </div>
                                    
                                </div> 

                                {/* item */}
                                <div className="CourierDetailsItem">

                                    <div className="img">
                                        <img src="images/redx.png" alt="" />
                                    </div>

                                    <div className="CourierDetailsList">

                                        <Grid container spacing={3}>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Total Parcel</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Total Delivered</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Total Cancelled</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Total Pending</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem">
                                                    
                                                    <h6> <GoGraph/> Parcel To Be Delivered</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                            {/* item */}
                                            <Grid item xs={2}> 

                                                <div className="CourierListItem Last">
                                                    
                                                    <h6> <GoGraph/> Total Balance</h6>

                                                    <h3>465</h3>

                                                </div>  

                                            </Grid>

                                        </Grid>

                                    </div>

                                    <div className="RequestPayment">

                                        <Button>Request Payment</Button>

                                    </div>
                                    
                                </div> 

                            </Grid>

                        </Grid>

                    </div>

                </Container>

            </section>    

        </>

    )

}

export default CourierDetails