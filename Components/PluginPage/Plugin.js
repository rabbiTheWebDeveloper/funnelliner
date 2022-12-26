import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Button, Container, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Tab, TextField } from '@mui/material';
import React, { useState } from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import Switch from '@mui/material/Switch';
import { FiEdit } from 'react-icons/fi';
import Link from 'next/link';
import { BsPlug } from 'react-icons/bs';



const Plugin = () => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (

        <>

            <section className='TopSellingProducts DashboardSetting Courier Plugin'>

                <Container maxWidth="sm">

                    <Grid Container spacing={3}>

                        <Grid item xs={12}>

                            <div className="Header d_flex d_justify">

                                {/* Left */}
                                <div className="Left d_flex">
                                
                                    <div className="svg">
                                        <BsPlug/>
                                    </div>

                                    <div className="text">
                                        <h4>Plugins</h4>
                                        <p>Add plugins for extra advantages</p>
                                    </div>

                                </div>
                                
                            </div>   

                        </Grid>

                    </Grid>

                    {/* CourierContent */}
                    <div className="CourierContent">

                        <Grid container spacing={3}>

                            {/* item */}
                            <Grid item xs={3}>

                                <div className="CourierItem">

                                    <div className="Free">
                                        <span>Free</span>
                                    </div>

                                    <div className="img">
                                        <img src="images/fb-pixel.png" alt="" />
                                    </div>

                                    <div className="text">

                                        <h5>Facebook Pixel</h5>

                                        <div className="Toggle">

                                            <p>Disabled</p>

                                            <Switch {...label} />

                                        </div>

                                    </div>
                                    
                                </div> 

                            </Grid>

                            {/* item */}
                            <Grid item xs={3}>

                                <div className="CourierItem">

                                    <div className="Free">
                                        <span>Free</span>
                                    </div>

                                    <div className="img">
                                        <img src="images/domain-verify.png" alt="" />
                                    </div>

                                    <div className="text">

                                        <h5>Domain Verify</h5>

                                        <div className="Toggle">

                                            <p>Enabled</p>

                                            <Switch {...label} defaultChecked />

                                        </div>

                                    </div>
                                    
                                </div> 

                            </Grid>

                            {/* item */}
                            <Grid item xs={3}>

                                <div className="CourierItem">

                                    <div className="Free">
                                        <span>BDT 500</span>
                                    </div>

                                    <div className="img">
                                        <img src="images/otp.png" alt="" />
                                    </div>

                                    <div className="text">

                                        <h5>OTP Verify</h5>

                                        <div className="Toggle">

                                            <p>Disabled</p>

                                            <Link href='/plugin-details'><Switch {...label} /></Link>

                                        </div>

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

export default Plugin